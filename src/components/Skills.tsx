
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillsData = {
  frontend: [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "Tailwind CSS", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "Python", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 65 },
    { name: "GraphQL", level: 60 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Docker", level: 70 },
    { name: "Jest", level: 75 },
    { name: "CI/CD", level: 65 },
    { name: "AWS", level: 60 },
    { name: "Figma", level: 70 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="mb-4"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm text-white">{name}</span>
        {isVisible && <span className="text-xs text-green">{level}%</span>}
      </div>
      <div className="h-2 bg-navy-dark rounded-full overflow-hidden">
        <div 
          className="h-full bg-green transition-all duration-1000 ease-out" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-navy-dark">
      <div className="container mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in-up">Skills & Expertise</h2>
        
        <Card className="bg-navy-light border border-slate-dark mt-10 overflow-hidden">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-navy">
              <TabsTrigger value="frontend" className="data-[state=active]:text-green">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:text-green">Backend</TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:text-green">Tools</TabsTrigger>
            </TabsList>
            
            <div className="p-6">
              <TabsContent value="frontend" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skillsData.frontend.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="backend" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skillsData.backend.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tools" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skillsData.tools.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
