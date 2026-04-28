/**
 * Three.js floating particles scene.
 * Renders an abstract particle field that subtly reacts to mouse movement.
 * Uses @react-three/fiber for React integration.
 */

"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Number of particles in the field */
const PARTICLE_COUNT = 200;

/** Particle field mesh - instanced for performance */
function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Generate random positions and sizes for particles
  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const siz = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
      siz[i] = Math.random() * 0.03 + 0.01;
    }
    return { positions: pos, sizes: siz };
  }, []);

  // Track mouse for subtle parallax
  useMemo(() => {
    if (typeof window === "undefined") return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate particles with subtle drift
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const dummy = new THREE.Object3D();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = positions[i * 3] + Math.sin(time * 0.2 + i) * 0.2;
      const y = positions[i * 3 + 1] + Math.cos(time * 0.15 + i) * 0.2;
      const z = positions[i * 3 + 2];

      // Subtle mouse parallax offset
      const offsetX = mouseRef.current.x * 0.5;
      const offsetY = mouseRef.current.y * 0.5;

      dummy.position.set(x + offsetX, y + offsetY, z);
      dummy.scale.setScalar(sizes[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </instancedMesh>
  );
}

/** Floating wireframe mesh for visual depth */
function FloatingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
    meshRef.current.rotation.y = Math.cos(time * 0.15) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} scale={2}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#ff3e00"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

/** Main scene exported to the layout */
export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]} // Optimize for performance
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingMesh />
      </Canvas>
    </div>
  );
}
