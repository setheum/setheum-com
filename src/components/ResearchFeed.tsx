"use client";

import { motion } from "framer-motion";

const articles = [
    {
        tag: "Research",
        date: "Dec 12, 2025",
        title: "Seed 1.8: Scaling Agent Reasoning with Distributed Compute",
        description: "Our latest work on orchestrating complex tasks across Setheum's GPU network."
    },
    {
        tag: "Engineering",
        date: "Dec 08, 2025",
        title: "Zero-Knowledge Proofs for Verifiable AI Interference",
        description: "Guaranteeing model integrity on decentralized hardware."
    },
    {
        tag: "Product",
        date: "Dec 01, 2025",
        title: "Building the Canvas: The Design Philosophy Behind Ceaph",
        description: "How spatial design and cognitive clarity drive our user interfaces."
    }
];

export default function ResearchFeed() {
    return (
        <section className="py-xxl px-large bg-seed-light-grey/10 dark:bg-seed-deep-black border-t border-seed-mid-grey/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-xl">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight mb-2">Research & Insights</h2>
                        <p className="text-seed-mid-grey">Pioneering the future of decentralized intelligence.</p>
                    </div>
                    <button className="px-6 py-2 border border-seed-mid-grey/20 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-white dark:hover:bg-seed-dark-charcoal transition-colors">
                        All Articles
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((art, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="p-8 rounded-[32px] bg-white dark:bg-seed-dark-charcoal/50 border border-seed-mid-grey/10 group cursor-pointer"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[10px] uppercase tracking-widest text-seed-mid-grey font-medium">{art.date}</span>
                                <div className="w-1 h-1 rounded-full bg-seed-mid-grey/30" />
                                <span className="text-[10px] uppercase tracking-widest text-seed-dark-charcoal dark:text-white font-bold">{art.tag}</span>
                            </div>

                            <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-product-ceaph transition-colors">{art.title}</h3>
                            <p className="text-sm text-seed-mid-grey leading-relaxed mb-8">
                                {art.description}
                            </p>

                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                Read Paper
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                                    <path d="M1 6H11M11 6L6 1M11 6L6 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
