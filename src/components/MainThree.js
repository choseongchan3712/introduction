import { useGLTF, SoftShadows, CameraControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Model = () => {
  const group = useRef();
  const light = useRef();
  const { nodes } = useGLTF(`${process.env.PUBLIC_URL}/graces-draco.glb`);
  console.log(nodes);
  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [0, -state.pointer.x * (Math.PI / 10), 0],
      1.5,
      delta
    );
    easing.damp3(
      group.current.position,
      [0, -5.5, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    );
    easing.damp3(
      light.current.position,
      [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
      0.2,
      delta
    );
  });
  return (
    <group ref={group}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node_3.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.2}
        dispose={null}
      >
        <meshLambertMaterial color="#404044" />
      </mesh>
      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={1000}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </spotLight>
    </group>
  );
};

const MainThree = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Canvas
          shadows="basic"
          eventSource={document.getElementById("root")}
          eventPrefix="client"
          camera={{ position: [0, 1.5, 14], fov: 45 }}
        >
          <fog attach="fog" args={["black", 0, 20]} />
          <pointLight position={[10, -10, -20]} intensity={100} />
          <pointLight position={[-10, -10, -20]} intensity={100} />
          <Model position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
          <SoftShadows samples={3} />
          <CameraControls
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </Container>
  );
};

export default MainThree;
