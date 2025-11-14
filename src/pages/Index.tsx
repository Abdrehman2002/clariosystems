import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { lazy, Suspense } from 'react';

// Lazy load sections below the fold
const Services = lazy(() => import('@/components/Services'));
const Team = lazy(() => import('@/components/Team'));
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const Process = lazy(() => import('@/components/Process'));
const TechStack = lazy(() => import('@/components/TechStack'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const CTABanner = lazy(() => import('@/components/CTABanner'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading placeholder component
const SectionLoader = () => (
  <div className="w-full py-24 bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTABanner />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
