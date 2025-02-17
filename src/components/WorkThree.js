import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
} from "@react-three/drei";
import { easing } from "maath";
import getUuid from "uuid-by-string";
import {
  LocationProvider,
  useLocationContext,
} from "../context/LocationContext";
import { useNavigate } from "react-router-dom";

const GOLDENRATIO = 1.61803398875;

const Frame = ({ url, c = new THREE.Color(), text, link, ...props }) => {
  const image = useRef();
  const frame = useRef();
  const { selectedItem, selectItem, deselectItem } = useLocationContext();
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = selectedItem === name;
  const navigate = useNavigate();
  useCursor(hovered);

  useFrame((state, dt) => {
    image.current.material.zoom =
      1 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 3;
    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && hovered ? 1.03 : 1.1),
        0.9 * (!isActive && hovered ? 0.905 : 1),
        1,
      ],
      0.1,
      dt
    );
    easing.dampC(
      frame.current.material.color,
      hovered ? "#D4AF37" : "white",
      0.1,
      dt
    );
  });

  const handleTextClick = () => {
    navigate(`/work/${link}`); // 링크에 따라 이동
  };

  const [textHover, setTextHover] = useState(false);
  const textRef = useRef();

  useCursor(textHover);

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1.7, 1, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#292929"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.95, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
          scale={[1.7, 1, 0.01]}
        />
      </mesh>
      <Text
        ref={textRef}
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.9, 1.325, 0]}
        fontSize={0.04}
        fontWeight={900}
        lineHeight={1.5}
        color={textHover ? "#D4AF37" : "white"}
        onPointerOver={() => setTextHover(true)}
        onPointerOut={() => setTextHover(false)}
        onClick={handleTextClick}
      >
        {text}
      </Text>
    </group>
  );
};

const Frames = ({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) => {
  const ref = useRef();
  const { selectedItem, selectItem, deselectItem } = useLocationContext();

  useEffect(() => {
    if (!selectedItem) {
      p.set(0, 0, 5.5);
      q.identity();
    } else {
      const clicked = ref.current.getObjectByName(selectedItem);
      if (clicked) {
        clicked.parent.updateWorldMatrix(true, true);
        clicked.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
        clicked.parent.getWorldQuaternion(q);
      }
    }
  }, [selectedItem, p, q]);

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  const handleClick = (e) => {
    const itemName = e.object.name;
    if (selectedItem === itemName) {
      deselectItem();
    } else {
      selectItem(itemName);
    }
  };

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        handleClick(e);
      }}
      onPointerMissed={() => deselectItem()}
    >
      {images.map((props) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  );
};

const WorkThree = ({ images }) => {
  return (
    <LocationProvider>
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <color attach="background" args={["#1C1C1C"]} />
        <fog attach="fog" args={["#1C1C1C", 0, 15]} />
        <group position={[0, -0.5, 0]}>
          <Frames images={images} />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
            />
          </mesh>
        </group>
        <Environment preset="city" />
      </Canvas>
    </LocationProvider>
  );
};

export default WorkThree;
