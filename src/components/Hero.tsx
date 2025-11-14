import Spline from '@splinetool/react-spline';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Suspense } from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Spline 3D Background - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 w-full h-full scale-[1.7]" style={{ willChange: 'transform' }}>
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Spline scene="https://prod.spline.design/81b-Kk4hgQuuPmKy/scene.splinecode" />
        </Suspense>
      </div>

      {/* Hero Content - pointer-events-none to allow Spline interaction on desktop */}
      <div className="absolute inset-0 md:pointer-events-none">
        <div className="container mx-auto h-full flex flex-col justify-between py-8 px-6 md:px-12">
          {/* Right side content - Hidden on mobile */}
          <div className="hidden md:flex justify-end items-start pt-20 md:pt-32">
            <div className="max-w-xs text-right">
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
                From concept to launch: designing and deploying experiences that captivate users and convert leads
              </p>
            </div>
          </div>

          {/* Bottom content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 h-full md:h-auto justify-center md:justify-end">
            {/* Left side - Headline and Tags */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-8 md:mb-12">
               Your Vision, AI-Powered.<br />
                and Realized.
              </h1>

              {/* Service Tags */}
              <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm font-light tracking-widest text-white/70">
                <span>AI Development</span>
                <span className="text-white/30">|</span>
                <span>LLM Engineering</span>
                <span className="text-white/30">|</span>
                <span>Full-Stack</span>
                <span className="text-white/30">|</span>
                <span>UI/UX</span>
                <span className="text-white/30">|</span>
                <span>3D Web</span>
              </div>
            </div>

            {/* Right side - CTA Buttons - Re-enable pointer events for buttons */}
            <div className="flex flex-wrap gap-4 items-center md:pointer-events-auto">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/5 hover:border-white/50 px-8 py-6 text-sm md:text-base font-normal transition-all"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                className="rounded-full bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-6 text-sm md:text-base font-semibold group transition-all shadow-lg shadow-cyan-500/20"
              >
                Start a Project
                <Plus className="ml-2 w-5 h-5 group-hover:rotate-90 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
