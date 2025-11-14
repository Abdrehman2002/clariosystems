import Spline from '@splinetool/react-spline';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Suspense, lazy } from 'react';

// Lazy load Spline for better performance
const SplineScene = lazy(() => import('@splinetool/react-spline').then(module => ({ default: module.default })));

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Mobile Background - Optimized */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10 pointer-events-none" />

      {/* Spline 3D Background - Desktop only with GPU acceleration */}
      <div
        className="spline-container hidden md:block absolute inset-0 w-full h-full scale-[1.7]"
      >
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <SplineScene scene="https://prod.spline.design/81b-Kk4hgQuuPmKy/scene.splinecode" />
        </Suspense>
      </div>

      {/* Hero Content */}
      <div className="relative md:absolute inset-0 pointer-events-none">
        <div className="container mx-auto h-full flex flex-col justify-between pt-24 pb-8 md:py-8 px-6 md:px-12">
          {/* Right side content - Desktop only */}
          <div className="hidden md:flex justify-end items-start pt-20 md:pt-32">
            <div className="max-w-xs text-right">
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
                From concept to launch: designing and deploying experiences that captivate users and convert leads
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col flex-1 justify-center md:justify-end md:flex-row md:items-end gap-8 md:gap-8 md:pb-12">
            {/* Headline and Tags */}
            <div className="flex-1 space-y-6 md:space-y-8">
              {/* Mobile Badge */}
              <div className="md:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 w-fit">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-xs font-semibold text-cyan-300">Transforming Ideas into Reality</span>
              </div>

              <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight md:leading-[0.95]">
                <span className="block">Your Vision, <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">AI-Powered.</span></span>
                <span className="block">and Realized.</span>
              </h1>

              {/* Mobile tagline */}
              <p className="md:hidden text-base text-white/70 font-light leading-relaxed max-w-sm">
                From concept to launch: designing and deploying experiences that captivate users and convert leads
              </p>

              {/* Service Tags - Enhanced for Mobile */}
              <div className="flex flex-wrap items-center gap-2 md:gap-6 text-[10px] sm:text-xs md:text-sm font-medium md:font-light md:tracking-widest">
                <span className="px-4 py-2 md:px-0 md:py-0 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 md:bg-transparent rounded-full border border-cyan-400/20 md:border-0 text-cyan-300 md:text-white/70 shadow-sm">AI Development</span>
                <span className="hidden md:inline text-white/30">|</span>
                <span className="px-4 py-2 md:px-0 md:py-0 bg-gradient-to-r from-purple-500/10 to-purple-500/5 md:bg-transparent rounded-full border border-purple-400/20 md:border-0 text-purple-300 md:text-white/70 shadow-sm">LLM Engineering</span>
                <span className="hidden md:inline text-white/30">|</span>
                <span className="px-4 py-2 md:px-0 md:py-0 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 md:bg-transparent rounded-full border border-cyan-400/20 md:border-0 text-cyan-300 md:text-white/70 shadow-sm">Full-Stack</span>
                <span className="hidden md:inline text-white/30">|</span>
                <span className="px-4 py-2 md:px-0 md:py-0 bg-gradient-to-r from-purple-500/10 to-purple-500/5 md:bg-transparent rounded-full border border-purple-400/20 md:border-0 text-purple-300 md:text-white/70 shadow-sm">UI/UX</span>
                <span className="hidden md:inline text-white/30">|</span>
                <span className="px-4 py-2 md:px-0 md:py-0 bg-gradient-to-r from-indigo-500/10 to-indigo-500/5 md:bg-transparent rounded-full border border-indigo-400/20 md:border-0 text-indigo-300 md:text-white/70 shadow-sm">3D Web</span>
              </div>

              {/* Mobile Stats - Enhanced */}
              <div className="md:hidden grid grid-cols-3 gap-3 pt-3">
                <div className="text-center p-4 rounded-2xl bg-black/40 border border-cyan-400/30">
                  <div className="text-3xl font-black bg-gradient-to-br from-cyan-400 to-cyan-300 bg-clip-text text-transparent">50+</div>
                  <div className="text-[11px] text-cyan-300/80 mt-1.5 font-medium">Projects</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-black/40 border border-purple-400/30">
                  <div className="text-3xl font-black bg-gradient-to-br from-purple-400 to-purple-300 bg-clip-text text-transparent">30+</div>
                  <div className="text-[11px] text-purple-300/80 mt-1.5 font-medium">Clients</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-black/40 border border-indigo-400/30">
                  <div className="text-3xl font-black bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">24/7</div>
                  <div className="text-[11px] text-indigo-300/80 mt-1.5 font-medium">Support</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col gap-3 pointer-events-auto md:items-center">
              <Button
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-purple-500 hover:from-cyan-300 hover:via-cyan-400 hover:to-purple-400 text-black px-8 py-6 text-base font-bold transition-colors shadow-xl shadow-cyan-500/30 border-0"
              >
                Start a Project
                <Plus className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full border-white/40 bg-white/10 md:bg-transparent text-white hover:bg-white/20 hover:border-white/60 px-8 py-6 text-base font-semibold transition-colors backdrop-blur-sm"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
