import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';

function ModelWithMouseFollow() {
  const { scene } = useGLTF('/models/message.glb'); // your model path
  const modelRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = mouse.x * 0.8;
      modelRef.current.rotation.x = mouse.y * 0.4;
    }
  });

  return (
    <Center>
      <primitive
        ref={modelRef}
        object={scene}
        scale={0.1}
        position={[-1, 0.7, 0]} // move it down a bit
        />
    </Center>
  );
}

export default function ThreeModel() {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        background: '#fef9c3',
        borderRadius: '1rem',
      }}
      camera={{ position: [0, 0, 5], fov: 40 }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <Suspense fallback={null}>
        <ModelWithMouseFollow />
      </Suspense>
    </Canvas>
  );
}
