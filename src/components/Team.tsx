import { Card, CardContent } from './ui/card';
import yunebImage from '../assets/yuneb2.png';
import abdImage from '../assets/abd.png';
import tahaImage from '../assets/taha.png';

const teamMembers = [
  {
    name: 'Yuneb',
    role: 'Co-Founder & Developer',
    image: yunebImage,
  },
  {
    name: 'Abdur Rehman',
    role: 'Co-Founder & Developer',
    image: abdImage,
  },
  {
    name: 'Taha Azam',
    role: 'Developer',
    image: tahaImage,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the talented individuals behind our success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group bg-zinc-900/50 border-white/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="aspect-square overflow-hidden bg-zinc-800/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-light">
                    {member.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
