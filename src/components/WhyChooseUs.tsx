import { Shield, Zap, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Enterprise Reliability',
    description: 'Battle-tested solutions with 99.9% uptime and security built-in from day one'
  },
  {
    icon: Zap,
    title: 'AI-First Approach',
    description: 'Leverage cutting-edge AI and automation to stay ahead of the competition'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Senior engineers and designers focused on your success, not just delivery'
  },
  {
    icon: TrendingUp,
    title: 'Business Impact',
    description: 'Solutions designed to scale revenue, reduce costs, and accelerate growth'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose Clario Systems
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium software engineering with measurable business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="space-y-4 text-center group">
                <div className="w-16 h-16 mx-auto rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
