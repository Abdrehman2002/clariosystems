import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery',
    description: 'Deep dive into your business goals, technical needs, and success metrics'
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Crafting the optimal architecture, tech stack, and development roadmap'
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Agile sprints with continuous feedback, testing, and refinement'
  },
  {
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'Seamless deployment with ongoing optimization and support'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How We Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven process that delivers results, on time and on budget
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/10 flex items-center justify-center relative">
                    <Icon className="w-8 h-8 text-cyan-400" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/10 -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
