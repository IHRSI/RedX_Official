import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 200, color = '#ff0000', speed = 0.3 }: { count?: number; color?: string; speed?: number }) => {
  const mesh = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      vel[i * 3] = (Math.random() - 0.5) * speed * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * speed * 0.02;
      vel[i * 3 + 2] = (Math.random() - 0.5) * speed * 0.02;
    }
    return { positions: pos, velocities: vel };
  }, [count, speed]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame(() => {
    if (!mesh.current) return;
    const posAttr = mesh.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];

      for (let j = 0; j < 3; j++) {
        if (Math.abs(arr[i * 3 + j]) > 10) {
          velocities[i * 3 + j] *= -1;
        }
      }
    }
    posAttr.needsUpdate = true;
    mesh.current.rotation.y += 0.0005;
  });

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial color={color} size={0.05} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const FloatingRing = ({ radius = 3, color = '#ff0000', rotationSpeed = 0.5 }: { radius?: number; color?: string; rotationSpeed?: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * rotationSpeed) * 0.5;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.z = Math.cos(state.clock.elapsedTime * rotationSpeed * 0.7) * 0.3;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  );
};

const FloatingX = ({ position = [0, 0, 0] as [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z += 0.008;
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[2.5, 0.15, 0.15]} />
        <meshBasicMaterial color="#ff0000" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[2.5, 0.15, 0.15]} />
        <meshBasicMaterial color="#ff0000" transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

interface FloatingParticlesProps {
  variant?: 'home' | 'events' | 'partners' | 'membership' | 'team';
  className?: string;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ variant = 'home', className = '' }) => {
  const configs = {
    home: { particles: 300, color: '#ff2222', speed: 0.4, rings: 3, showX: true },
    events: { particles: 200, color: '#ff4444', speed: 0.3, rings: 2, showX: false },
    partners: { particles: 320, color: '#ff6666', speed: 0.35, rings: 3, showX: true },
    membership: { particles: 250, color: '#ff1111', speed: 0.5, rings: 3, showX: true },
    team: { particles: 180, color: '#ff5555', speed: 0.25, rings: 2, showX: false },
  };

  const config = configs[variant];

  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles count={config.particles} color={config.color} speed={config.speed} />
        {Array.from({ length: config.rings }).map((_, i) => (
          <FloatingRing
            key={i}
            radius={2 + i * 1.5}
            color={config.color}
            rotationSpeed={0.3 + i * 0.2}
          />
        ))}
        {config.showX && <FloatingX position={[0, 0, -2]} />}
      </Canvas>
    </div>
  );
};

export default FloatingParticles;
