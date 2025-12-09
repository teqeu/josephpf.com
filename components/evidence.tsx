"use client"

import { Card } from "@/components/ui/card"
import { Code2, Palette, Zap, Users } from "lucide-react"

const evidenceItems = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following industry best practices and modern standards.",
    metric: "10,000+ lines",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Creating cohesive design systems with reusable components and consistent styling.",
    metric: "50+ components",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing websites for speed with lazy loading, code splitting, and efficient rendering.",
    metric: "95+ Lighthouse",
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Designing intuitive interfaces that prioritize accessibility and user satisfaction.",
    metric: "100% accessible",
  },
]

export function Evidence() {
  return (
    <section id="evidence" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Evidence of Excellence</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Proven track record of delivering high-quality web solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evidenceItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="glass-card p-6 space-y-4 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  <div className="text-2xl font-bold text-accent">{item.metric}</div>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Code Sample</h3>
            <div className="bg-muted/50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-card-foreground">
                <code>{`// Modern React Component with TypeScript
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick 
}) => {
  return (
    <button
      className={\`btn btn-\${variant} transition-all\`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
