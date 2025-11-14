import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent blur-3xl" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Build Something Extraordinary?
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Let's discuss how we can accelerate your vision with cutting-edge software and AI solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="group rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8">
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/5 hover:border-white/50 px-8">
            View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
