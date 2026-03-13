import React from 'react';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

function FloatingSphere({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[0.5, 32, 32]} position={position}>
        <MeshDistortMaterial color={color} speed={2} distort={0.3} />
      </Sphere>
    </Float>
  );
}

export default FloatingSphere;
