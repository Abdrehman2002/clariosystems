import { Code, Globe, Cloud, Link, Smartphone, Palette, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Enterprise-grade web apps, mobile solutions, and SaaS platforms built with precision. From MVPs to scalable systems that handle millions of users.',
    features: ['Web Applications', 'Mobile Apps (iOS/Android)', 'Desktop Software', 'Enterprise Solutions']
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Stunning, high-performance websites that convert. From corporate presence to e-commerce platforms with seamless CMS integration.',
    features: ['Corporate Sites', 'Landing Pages', 'E-commerce', 'CMS Development']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Solutions',
    description: 'Scalable cloud infrastructure and automated deployment pipelines. Migrate, optimize, and monitor with confidence across AWS, GCP, and Azure.',
    features: ['Cloud Migration', 'CI/CD Pipelines', 'Auto-Scaling', 'Docker & Kubernetes']
  },
  {
    icon: Link,
    title: 'API Development & Integrations',
    description: 'Robust APIs and seamless third-party integrations. Connect your systems with payments, CRMs, ERPs, and custom webhooks that just work.',
    features: ['Custom APIs', 'Payment Integration', 'CRM/ERP Connectors', 'Webhook Automation']
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that users love. Built with Swift, Kotlin, Flutter, or React Native for maximum reach.',
    features: ['Native Apps', 'Cross-Platform', 'Mobile UX Design', 'App Store Deployment']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that drives engagement. From wireframes to complete design systems, we craft interfaces that feel intuitive and modern.',
    features: ['Wireframes & Prototypes', 'User Journey Mapping', 'Design Systems', 'Product Redesigns']
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems that learn and adapt. AI chatbots, voice agents, predictive analytics, and custom ML models trained for your specific needs.',
    features: ['AI Chatbots', 'Voice Agents', 'Predictive Analytics', 'Custom ML Models']
  },
  {
    icon: Zap,
    title: 'Automation Services',
    description: 'Transform workflows with intelligent automation. From CRM automation to data pipelines, eliminate manual work and accelerate business processes.',
    features: ['Workflow Automation', 'CRM Automation', 'Data Pipelines', 'AI-Powered Processes']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Comprehensive Software Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-stack expertise to bring your vision to life with cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group bg-zinc-900/50 border-white/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
