"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function useGlowTexture() {
  return useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
      );
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.4, "rgba(255,255,255,0.9)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);
}

function NodePoints() {
  const glowTexture = useGlowTexture();
  const positions = useMemo(() => {
    const geometry = new THREE.IcosahedronGeometry(1, 4);
    return geometry.attributes.position.array as Float32Array;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={glowTexture}
        color="#ffffff"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlobeGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1}>
      <group ref={groupRef} position={[2.4, 0.1, 0]} scale={1.3}>
        <mesh>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color="#0f6fff"
            emissive="#38bdf8"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.6}
            distort={0.4}
            speed={1.6}
            wireframe
          />
        </mesh>
        <NodePoints />
      </group>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#38bdf8" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#0f6fff" />
        <Suspense fallback={null}>
          <GlobeGroup />
          <Sparkles count={80} scale={9} size={2} speed={0.3} color="#7dd3fc" opacity={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
