
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: <Github size={18} />, href: "https://github.com" },
    { name: "Twitter", icon: <Twitter size={18} />, href: "https://twitter.com" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "https://linkedin.com" },
    { name: "Email", icon: <Mail size={18} />, href: "mailto:hello@example.com" },
  ];

  return (
    <footer className="py-8 bg-navy-dark border-t border-slate-dark">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-green transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className="text-slate-dark text-sm">
            Designed & Built by John Doe
          </p>
          <p className="text-slate-dark text-xs mt-1">
            &copy; {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
