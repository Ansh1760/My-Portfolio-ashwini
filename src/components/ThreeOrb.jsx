import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";

function Orb() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y += 0.003;
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.25;
  });

  return (
    <Sphere ref={ref} args={[1.1, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#7c3aed"
        distort={0.35}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
}

export default function ThreeOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Orb />
    </Canvas>
  );
}
