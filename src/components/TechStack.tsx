const technologies = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue', 'Angular'],
  'Backend': ['Node.js', 'Python', 'Go', 'Java', 'PostgreSQL', 'MongoDB'],
  'Cloud': ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  'AI/ML': ['OpenAI', 'TensorFlow', 'PyTorch', 'Anthropic Claude', 'Hugging Face', 'LangChain'],
  'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
  'Automation': ['n8n', 'Make', 'Zapier', 'Apache Airflow', 'Temporal', 'RPA']
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Modern Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade tools and frameworks for maximum performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-l-4 border-cyan-400 pl-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-zinc-900/50 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-cyan-400/50 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
