"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductProps {
    title: string;
    tagline: string;
    description: string;
    image: string;
    features: string[];
    metrics: { label: string; value: string }[];
    color: string;
    reversed?: boolean;
}

const ProductSection = ({ title, tagline, description, image, features, metrics, color, reversed }: ProductProps) => {
    return (
        <section className="py-xxl px-large overflow-hidden bg-white dark:bg-seed-deep-black">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-xl">
                <div className={`flex-1 ${reversed ? 'lg:order-2' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: color }}
                            />
                            <span className="text-xs uppercase tracking-[0.3em] text-seed-mid-grey font-medium">{tagline}</span>
                        </div>
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 text-seed-dark-charcoal dark:text-white">{title}</h2>
                        <p className="text-xl text-seed-mid-grey leading-relaxed mb-10 max-w-xl">
                            {description}
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            {metrics.map((m, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-bold text-seed-dark-charcoal dark:text-white mb-1">{m.value}</div>
                                    <div className="text-xs uppercase tracking-widest text-seed-mid-grey font-medium">{m.label}</div>
                                </div>
                            ))}
                        </div>

                        <ul className="space-y-4">
                            {features.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-seed-dark-charcoal dark:text-white/80">
                                    <div className="w-1 h-1 rounded-full bg-seed-mid-grey/40" />
                                    <span className="text-sm font-medium">{f}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className={`flex-1 relative ${reversed ? 'lg:order-1' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: reversed ? -5 : 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="relative aspect-square w-full max-w-[600px] mx-auto"
                    >
                        <div
                            className="absolute inset-0 rounded-full opacity-[0.03] blur-3xl pointer-events-none"
                            style={{ backgroundColor: color }}
                        />
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function ProductShowcase() {
    const products = [
        {
            title: "Seed 1.8",
            tagline: "The Agent Foundation",
            description: "A general-purpose Agent model capable of efficiently and accurately completing tasks in complex environments through reasoning and tool-use.",
            image: "/seed-1-8.png",
            color: "var(--product-ceaph)",
            metrics: [
                { label: "Logic Score", value: "98.2" },
                { label: "Action Accuracy", value: "96%" }
            ],
            features: [
                "Advanced multi-step reasoning",
                "Autonomous tool orchestration",
                "Context window of 128k tokens",
                "Zero-shot generalization"
            ]
        },
        {
            title: "Setheum",
            tagline: "Decentralized Compute",
            description: "The global layer for AI orchestration. Connect your hardware to the decentralized compute network and power the next generation of intelligence.",
            image: "/seed-1-5.png",
            color: "var(--product-setheum)",
            reversed: true,
            metrics: [
                { label: "Network TPS", value: "2.1M" },
                { label: "Nodes", value: "48k+" }
            ],
            features: [
                "Peer-to-peer GPU marketplace",
                "Verifiable compute proofs",
                "Instant settlement in SETH",
                "Elastic scaling"
            ]
        }
    ];

    return (
        <div className="border-t border-seed-mid-grey/5">
            {products.map((p, i) => (
                <ProductSection key={i} {...p} />
            ))}
        </div>
    );
}
