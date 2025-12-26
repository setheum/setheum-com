"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const FloatingNodes = () => {
    const nodes = useMemo(() => {
        return Array.from({ length: 40 }).map(() => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15
            ] as [number, number, number],
            speed: Math.random() * 0.5 + 0.2
        }));
    }, []);

    return (
        <group>
            {nodes.map((node, i) => (
                <Float key={i} speed={node.speed} rotationIntensity={2} floatIntensity={1}>
                    <mesh position={node.position}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshBasicMaterial color="#0066FF" transparent opacity={0.6} />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

const EcosystemCore = () => {
    const materialRef = useRef<any>(null);

    useFrame((state) => {
        if (materialRef.current) {
            // Calmer distortion based on mouse position
            const dist = Math.sqrt(state.mouse.x ** 2 + state.mouse.y ** 2);
            materialRef.current.distort = THREE.MathUtils.lerp(
                materialRef.current.distort,
                0.3 + dist * 0.15,
                0.02
            );
            materialRef.current.speed = THREE.MathUtils.lerp(
                materialRef.current.speed,
                1.5 + dist * 0.5,
                0.02
            );
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <Sphere args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#FF9500"
                    emissive="#FF4D00"
                    emissiveIntensity={1.2}
                    speed={2}
                    distort={0.3}
                    roughness={0.1}
                    metalness={0.9}
                />
            </Sphere>
            <pointLight position={[0, 0, 0]} intensity={12} color="#FF9500" distance={10} />
        </Float>
    );
};

const InteractiveGroup = ({ children }: { children: React.ReactNode }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Mouse parallax interaction for the whole scene
        const x = (state.mouse.x * Math.PI) / 10;
        const y = (state.mouse.y * Math.PI) / 10;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.05);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y, 0.05);
    });

    return <group ref={groupRef}>{children}</group>;
};

export function VisualizerCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 18], fov: 40 }} gl={{ antialias: true }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <InteractiveGroup>
                <FloatingNodes />
                <EcosystemCore />
            </InteractiveGroup>

            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
    );
}

export default function Visualizer() {
    return (
        <section className="h-[700px] w-full bg-[#F5F5F0]/30 dark:bg-[#0A0A0A] relative overflow-hidden">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
                <h2 className="text-5xl font-bold tracking-tighter mb-4 text-[#1A1A1A] dark:text-white italic">Ecosystem Dynamics</h2>
                <p className="text-[#8B8B8B] text-[10px] uppercase tracking-[0.4em]">Live Network Telemetry</p>
            </div>

            <div className="absolute inset-0">
                <VisualizerCanvas />
            </div>

            <div className="absolute bottom-20 left-12 right-12 z-10 flex justify-between items-end pointer-events-none max-w-7xl mx-auto w-full px-6 left-1/2 -translate-x-1/2">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-pulse" />
                        <span className="text-[10px] font-mono text-[#8B8B8B] uppercase tracking-[0.2em] font-bold">Network Resilience</span>
                    </div>
                    <div className="text-4xl font-bold text-[#1A1A1A] dark:text-white tracking-tighter">99.998%</div>
                </div>

                <div className="max-w-[240px] text-right">
                    <p className="text-[10px] text-[#8B8B8B] leading-relaxed uppercase tracking-[0.2em] font-medium">
                        Visualizing the global orchestration layer. Nodes synchronize across 48,000+ decentralized compute clusters.
                    </p>
                </div>
            </div>

            {/* Aesthetic Border Blurs */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#F5F5F0]/30 dark:from-[#0A0A0A] to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#F5F5F0]/30 dark:from-[#0A0A0A] to-transparent pointer-events-none z-10" />
        </section>
    );
}
