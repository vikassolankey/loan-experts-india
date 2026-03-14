import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import FloatingCard from './FloatingCard';
import FloatingSphere from './FloatingSphere';

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-5 pointer-events-none">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <FloatingCard position={[-4, 2, 0]} />
          <FloatingCard position={[4, -2, 2]} />
          <FloatingSphere position={[2, 3, -2]} color="#D4AF37" />
          <FloatingSphere position={[-3, -3, -1]} color="#0055aa" />
          
          <mesh position={[0, -5, -10]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#f8fafc" />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
