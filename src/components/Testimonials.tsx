import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Clario transformed our entire operation with their AI automation suite. We reduced manual work by 80% and scaled faster than we thought possible.',
    author: 'Sarah Chen',
    role: 'CTO, TechVentures Inc',
    company: 'Series B SaaS'
  },
  {
    quote: 'The quality and speed of delivery was exceptional. Their team understood our enterprise needs and built a system that handles millions of transactions daily.',
    author: 'Michael Rodriguez',
    role: 'VP of Engineering, FinanceCore',
    company: 'Fortune 500'
  },
  {
    quote: 'From MVP to production in record time. Clario\'s expertise in cloud architecture and DevOps saved us months of development and countless headaches.',
    author: 'Emily Thompson',
    role: 'Founder & CEO, DataFlow',
    company: 'Y Combinator S23'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from real clients building the future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="relative bg-zinc-900/50 border-white/10 hover:border-cyan-400/50 transition-all backdrop-blur-sm">
              <CardContent className="pt-6 space-y-4">
                <Quote className="w-10 h-10 text-cyan-400/20" />
                <p className="text-gray-300 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
