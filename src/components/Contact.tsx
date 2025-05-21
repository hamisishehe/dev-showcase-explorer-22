
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in-up">Get In Touch</h2>
        
        <div className="mt-10 max-w-2xl mx-auto">
          <p className="text-slate mb-8 text-center">
            Have a question or want to work together? Feel free to send me a message!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute top-3 left-3 text-slate h-5 w-5" />
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 bg-navy-light border-slate-dark focus:border-green"
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-slate h-5 w-5" />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 bg-navy-light border-slate-dark focus:border-green"
              />
            </div>
            
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="h-40 bg-navy-light border-slate-dark focus:border-green"
            />
            
            <Button 
              type="submit" 
              className="w-full bg-green text-navy hover:bg-green/90 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
