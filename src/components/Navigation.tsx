import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Our Edge', href: '#why-us' },
    { name: 'Methodology', href: '#process' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-6 md:px-12 py-6 md:py-8">
        <div className="flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <a href="/" className="text-lg md:text-xl font-bold text-white hover:text-cyan-400 transition-colors">
            Clario<span className="text-cyan-400">Systems</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-light text-white/80 hover:text-white transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Button
            size="sm"
            className="hidden md:flex rounded-full border border-white/30 bg-transparent hover:bg-white/5 text-white font-light px-6 py-5 tracking-wide backdrop-blur-sm transition-all"
            variant="outline"
          >
            Start a Project
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 py-6 px-6 rounded-2xl bg-black/90 backdrop-blur-md border border-white/10 pointer-events-auto">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="block text-sm font-light text-white/80 hover:text-white transition-colors tracking-wide py-2"
                >
                  {item.name}
                </a>
              ))}
              <Button
                size="sm"
                className="w-full rounded-full border border-white/30 bg-transparent hover:bg-white/5 text-white font-light px-6 py-5 tracking-wide mt-4"
                variant="outline"
              >
                Start a Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
