import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";

function FloatingOrb() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.y += 0.002;
    meshRef.current.position.y =
      Math.sin(clock.elapsedTime) * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[2, 0, 0]}>
      <MeshDistortMaterial
        color="#7c3aed"
        distort={0.35}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <FloatingOrb />
      </Canvas>
    </div>
  );
}
