import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, OrbitControls, Text } from "@react-three/drei";

const Word = ({ children, to, ...props }) => {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 1.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  useFrame(({ camera }) => {
    ref.current.material.color.lerp(
      color.set(hovered ? "#D4AF37" : "white"),
      0.1
    );
  });

  const handleClick = () => {
    window.open(to, "_blank");
  };

  return (
    <Billboard {...props}>
      <group onClick={handleClick}>
        <Text
          ref={ref}
          onPointerOver={over}
          onPointerOut={out}
          {...fontProps}
          children={children}
        />
      </group>
    </Billboard>
  );
};

const Cloud = ({ count = 4, radius = 20, wordList, to }) => {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) {
        const word = wordList[(i * count + j) % wordList.length];
        const url = to[(i * count + j) % to.length];
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          word,
          url,
        ]);
      }
    return temp;
  }, [count, radius, wordList, to]);
  return words.map(([pos, word, url], index) => (
    <Word key={index} position={pos} children={word} to={url} />
  ));
};

const StudyThree = ({ wordList, to }) => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={["#1C1C1C", 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={8} radius={20} wordList={wordList} to={to} />
        </group>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default StudyThree;
