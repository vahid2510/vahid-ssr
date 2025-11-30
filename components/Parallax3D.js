"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function FloatingShape() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t / 2) / 6;
    ref.current.rotation.y = Math.sin(t / 3) / 6;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.4}>
      <mesh ref={ref} scale={1.4}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#00aaff"}
          wireframe
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Parallax3D() {
  return (
    <div className="absolute inset-0 opacity-70 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 2, 4]} intensity={1.4} />
        <FloatingShape />
      </Canvas>
    </div>
  );
}
