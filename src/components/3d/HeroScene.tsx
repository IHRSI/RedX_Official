import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlowingSphere = ({ position, color, size, pulseSpeed }: { position: [number, number, number]; color: string; size: number; pulseSpeed: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const scale = 1 + Math.sin(state.clock.elapsedTime * pulseSpeed) * 0.2;
    ref.current.scale.setScalar(scale);
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </mesh>
  );
};

const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null);
  const count = 40;

  const spheres = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const t = (i / count) * Math.PI * 4;
      const y = (i / count) * 12 - 6;
      return {
        pos1: [Math.cos(t) * 2, y, Math.sin(t) * 2] as [number, number, number],
        pos2: [Math.cos(t + Math.PI) * 2, y, Math.sin(t + Math.PI) * 2] as [number, number, number],
      };
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef} position={[5, 0, -5]}>
      {spheres.map((s, i) => (
        <React.Fragment key={i}>
          <mesh position={s.pos1}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshBasicMaterial color="#ff0000" transparent opacity={0.5} />
          </mesh>
          <mesh position={s.pos2}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshBasicMaterial color="#ff4444" transparent opacity={0.4} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
};

const WaveGrid = () => {
  const meshRef = useRef<THREE.Points>(null);
  const gridSize = 30;
  const count = gridSize * gridSize;

  const geometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const idx = (i * gridSize + j) * 3;
        pos[idx] = (i - gridSize / 2) * 0.5;
        pos[idx + 1] = 0;
        pos[idx + 2] = (j - gridSize / 2) * 0.5;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const idx = (i * gridSize + j) * 3;
        arr[idx + 1] = Math.sin(i * 0.3 + time) * Math.cos(j * 0.3 + time) * 0.5;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef} position={[0, -4, -3]} rotation={[-0.3, 0, 0]} geometry={geometry}>
      <pointsMaterial color="#ff2222" size={0.04} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const HeroScene: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <GlowingSphere position={[-4, 2, -3]} color="#ff0000" size={1.5} pulseSpeed={1} />
        <GlowingSphere position={[4, -1, -4]} color="#ff3333" size={1} pulseSpeed={1.5} />
        <GlowingSphere position={[0, 3, -5]} color="#ff1111" size={0.8} pulseSpeed={0.8} />
        <DNAHelix />
        <WaveGrid />
      </Canvas>
    </div>
  );
};

export default HeroScene;
