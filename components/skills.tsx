import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Sass", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    category: "Styling & Design",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "CSS Animations", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Principles", level: 85 },
      { name: "Figma", level: 80 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Webpack / Vite", level: 75 },
      { name: "Performance Optimization", level: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground mb-12">Technologies and tools I use to bring ideas to life</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass-card p-6 space-y-6">
                <h3 className="text-xl font-bold text-card-foreground">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
