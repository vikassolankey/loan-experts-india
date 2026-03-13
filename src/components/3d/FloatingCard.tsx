import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingCard({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, Math.cos(t / 2) / 10 + 0.25, 0.1);
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, Math.sin(t / 4) / 10, 0.1);
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, Math.sin(t / 4) / 20, 0.1);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, Math.sin(t / 2) / 2 + position[1], 0.1);
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color="#003366" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export default FloatingCard;
