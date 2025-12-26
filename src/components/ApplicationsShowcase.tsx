"use client";

import { motion } from "framer-motion";

const apps = [
    { name: "VS Code", icon: "VS", color: "#007ACC" },
    { name: "Postman", icon: "PM", color: "#FF6C37" },
    { name: "Docker", icon: "DK", color: "#2496ED" },
    { name: "Figma", icon: "FG", color: "#F24E1E" },
    { name: "Slack", icon: "SL", color: "#4A154B" },
    { name: "Discord", icon: "DS", color: "#5865F2" },
    { name: "GitHub", icon: "GH", color: "#181717" },
    { name: "Vercel", icon: "VC", color: "#000000" },
];

export default function ApplicationsShowcase() {
    return (
        <section className="py-xxl px-large bg-white dark:bg-seed-deep-black overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-xl">
                <h2 className="text-4xl font-bold tracking-tighter mb-4">Integrated Everywhere</h2>
                <p className="text-seed-mid-grey">Native integrations for your favorite developer tools.</p>
            </div>

            <div className="relative flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                {apps.map((app, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="group relative flex flex-col items-center"
                    >
                        <div
                            className="w-16 h-16 rounded-2xl bg-seed-light-grey dark:bg-seed-dark-charcoal dark:border dark:border-white/5 flex items-center justify-center text-xl font-bold transition-shadow hover:shadow-xl cursor-help"
                            style={{ color: app.color }}
                        >
                            {app.icon}
                        </div>

                        <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-seed-dark-charcoal text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full pointer-events-none whitespace-nowrap">
                            {app.name}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-xl text-center">
                <button className="text-sm font-medium text-seed-mid-grey hover:text-seed-dark-charcoal dark:hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto uppercase tracking-widest">
                    View all 40+ integrations
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                        <path d="M4 2L8 6L4 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
