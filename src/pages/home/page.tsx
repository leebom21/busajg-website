import Navbar from "@/pages/home/components/Navbar";
import Hero from "@/pages/home/components/Hero";
import MarqueeStrip from "@/pages/home/components/MarqueeStrip";
import About from "@/pages/home/components/About";
import Services from "@/pages/home/components/Services";
import Process from "@/pages/home/components/Process";
import Gallery from "@/pages/home/components/Gallery";
import FAQ from "@/pages/home/components/FAQ";
import Contact from "@/pages/home/components/Contact";
import Footer from "@/pages/home/components/Footer";

export default function Home() {
  return (
  <main className="w-full min-w-0 bg-background-50 text-foreground-900">      
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <Services />
      <Process />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />

      {/* Floating call button */}
      <a
        href="tel:010-3778-9007"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 h-14 pl-4 pr-6 rounded-full bg-primary-500 hover:bg-primary-400 text-foreground-950 font-black shadow-[0_10px_30px_-8px_oklch(var(--primary-500)/0.6)] cursor-pointer whitespace-nowrap transition-colors"
      >
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-foreground-950 text-primary-500">
          <i className="ri-phone-fill w-5 h-5 flex items-center justify-center text-xl"></i>
        </div>
        010-3778-9007
      </a>
    </main>
  );
}