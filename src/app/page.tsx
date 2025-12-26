import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProductShowcase from "@/components/ProductShowcase";
import Visualizer from "@/components/Visualizer";
import ApplicationsShowcase from "@/components/ApplicationsShowcase";
import ResearchFeed from "@/components/ResearchFeed";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/*       
      <BentoGrid />
      <Visualizer />
      <ProductShowcase />
      <ApplicationsShowcase />
      <ResearchFeed />
      */}

      {/* Footer Placeholder */}
      <footer className="py-xxl px-large border-t border-seed-mid-grey/10 bg-seed-warm-white dark:bg-seed-deep-black text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image src="/setheum.png" alt="Setheum Logo" width={32} height={32} className="rounded" />
          </div>
          <p className="text-sm text-seed-mid-grey">© Afsall Labs 2025 — Infrastructure for Intelligence</p>
          <div className="flex gap-6 mt-4 opacity-50">
            {/* <a href="#" className="text-xs uppercase tracking-widest hover:text-seed-dark-charcoal dark:hover:text-white transition-colors">Docs</a> */}
            <a href="https://github.com/afsall-labs" className="text-xs uppercase tracking-widest hover:text-seed-dark-charcoal dark:hover:text-white transition-colors">GitHub</a>
            {/* <a href="#" className="text-xs uppercase tracking-widest hover:text-seed-dark-charcoal dark:hover:text-white transition-colors">Discord</a> */}
          </div>
        </div>
      </footer>
    </main>
  );
}
