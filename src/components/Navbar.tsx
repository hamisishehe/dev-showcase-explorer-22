
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    setMounted(true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#" 
          className={`text-white text-2xl font-bold transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="text-green">DEV</span>FOLIO
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <span className="text-green mr-1">{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button 
            className={`bg-transparent border border-green text-green hover:bg-green/10 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-white focus:outline-none transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green">
              <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation with animation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-navy-light p-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link py-2 opacity-0 animate-fade-in-up"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <span className="text-green mr-1">{index + 1}.</span> {link.name}
              </a>
            ))}
            <Button 
              className="bg-transparent border border-green text-green hover:bg-green/10 w-full opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${navLinks.length * 100}ms`, animationFillMode: 'forwards' }}
            >
              Resume
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
