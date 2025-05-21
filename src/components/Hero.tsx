
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto">
        <p className="text-green mb-5 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          John Doe.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          I build things for the web.
        </h2>
        <p className="text-slate max-w-xl mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          I'm a software developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button className="bg-transparent border border-green text-green hover:bg-green/10 px-8 py-6 text-lg">
            Check out my work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
