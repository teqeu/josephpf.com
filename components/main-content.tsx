"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Code,
  Rocket,
  Briefcase,
  GraduationCap,
  Star,
  Github,
  ArrowDownUp
} from "lucide-react"
import { motion } from "framer-motion"

const skills = ["Web Development", "React & Next.js", "UI/UX Design", "Modern CSS"]

const timelineEvents = [
  {
    type: "work",
    title: "First Interests",
    description:
      "Started getting interested in frontend development with HTML, CSS, and JavaScript.",
    year: "2020",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "Computer Science Course",
    description:
      "Completed a high school CS class focusing on web development. Ranked #1 in the final project.",
    year: "2021",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    type: "award",
    title: "Self-Taught Web Developer",
    description:
      "Started learning web development independently and built several projects from scratch.",
    year: "2022",
    icon: <Star className="w-5 h-5" />,
  },
  {
    type: "freelance",
    title: "Freelance Web Developer",
    description: "Built websites for small businesses and startups.",
    year: "2023",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "bootcamp",
    title: "Current Day",
    description:
      "Continuing to learn and grow as a web developer, focusing on modern frameworks and best practices.",
    year: "2025",
    icon: <GraduationCap className="w-5 h-5" />,
  },
]

export function MainContent() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  const badgeClass =
    "text-sm px-3 py-1 bg-white/15 text-gray-100 rounded-full font-medium transition-all duration-300 hover:bg-white/20"

  const glassCard =
    "backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl shadow-2xl p-8 transition-all duration-300 hover:bg-white/10"

  const iconWrap =
    "h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xl border border-white/30"

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl space-y-48 px-6 md:px-12">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8 mt-32"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white">Hi, I’m Joseph</h1>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto">
            I build modern web experiences with React, Next.js, and a focus on UI/UX design.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {skills.map((skill, i) => (
              <span key={i} className={badgeClass}>{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-20 py-20"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Skills & Expertise</h2>

          {/* Coding Languages */}
          <div className="space-y-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Coding Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["JavaScript", "TypeScript", "Python", "HTML", "CSS", "Rust", "Go"].map((lang, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-2 bg-white/15 text-gray-100 rounded-full font-medium transition-all duration-300 hover:bg-white/20 min-w-[90px] text-center"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

{/* Skill*/}
<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
  {[
    { title: "Frontend Development", items: ["React", "Next.js", "TailwindCSS", "Framer Motion"], icon: <Code className="w-6 h-6" /> },
    { title: "Backend Development", items: ["Node.js", "Express", "MongoDB", "REST APIs"], icon: <Briefcase className="w-6 h-6" /> },
    { title: "DevOps & Deployment", items: ["Docker", "Vercel", "Netlify", "CI/CD pipelines"], icon: <Rocket className="w-6 h-6" /> },
    { title: "UI/UX Design", items: ["Figma", "Adobe XD", "Prototyping", "Responsive Design"], icon: <Star className="w-6 h-6" /> },
  ].map((skill, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col gap-4 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center gap-4 flex-nowrap">
          <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xl border border-white/30">
            {skill.icon}
          </div>
          <h3 className="font-bold text-lg text-white whitespace-nowrap flex-shrink-0">{skill.title}</h3>
        </div>
        <ul className="text-white/80 text-base list-disc list-inside space-y-1 mt-2">
          {skill.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Card>
    </motion.div>
  ))}
</div>
        </motion.div>

{/* Projects Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="space-y-16 py-20"
>
  <h2 className="text-3xl font-bold text-white mb-10 text-center">Projects</h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: "ScreenshareX.ac",
        description:
          "Advanced cheat detection system with detailed confidence assessments. The most reliable screenshare service for server administrators.",
        tags: ["Node.js", "TypeScript", "Discord.js"],
        year: "2023",
        liveUrl: "https://screensharex.ac",
      },
      {
        title: "Grim",
        description: "Modern, aesthetic Discord bot with a focus on utility and moderation features.",
        tags: ["Discord.py", "Next.js", "Typescript"],
        year: "2024",
        liveUrl: "#",
      },
    ].map((project, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <Card className="backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-all duration-300 h-full">
          {/* Title + Year */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-white">{project.title}</h3>
            <span className="text-gray-400 text-sm">{project.year}</span>
          </div>

          {/* Description */}
          <p className="text-white/80 text-base">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 bg-white/15 text-gray-100 rounded-full font-medium transition-all duration-300 hover:bg-white/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Live Link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
            >
              View <ArrowDownUp className="w-4 h-4" />
            </a>
          )}
        </Card>
      </motion.div>
    ))}
  </div>
</motion.div>

        {/* Timeline Section */}
        <div className="relative py-20">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-white/20 transform -translate-x-1/2" />
          {timelineEvents.map((event, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -200 : 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative w-full md:w-1/2 ${isLeft ? "md:left-0 md:pr-12" : "md:left-1/2 md:pl-12 md:mt-12"}`}
              >
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <span className="h-6 w-6 rounded-full bg-white border-2 border-white/40 animate-pulse" />
                </div>
                <Card className={glassCard}>
                  <div className="flex items-center gap-4 text-white text-lg whitespace-nowrap">
                    <div className={iconWrap}>{event.icon}</div>
                    <h3 className="font-bold text-xl flex-shrink-0">{event.title}</h3>
                  </div>
                  <p className="text-gray-200 text-base">{event.description}</p>
                  <span className="text-gray-400 text-sm mt-1">{event.year}</span>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Contact / CTA */}
        <motion.div className="text-center space-y-8 mt-32 py-20">
          <h2 className="text-3xl font-bold text-white">Let’s work together!</h2>
          <p className="text-gray-300 text-lg">I’m open to new projects and collaborations.</p>
          <div className="flex justify-center gap-6 flex-wrap mt-4">
            <Button className="bg-white/15 hover:bg-white/20 text-white text-lg flex items-center gap-3 px-6 py-3">
              <Rocket className="w-5 h-5" /> Projects
            </Button>

            <Button
              asChild
              variant="outline"
              className="border border-white/20 text-white text-lg hover:bg-white/10 flex items-center gap-3 px-6 py-3"
            >
              <a
                href="https://github.com/teqeu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div className="flex flex-col items-center gap-4 text-sm text-gray-100 mt-20 py-10">
          <span className="text-base">Local Time: {currentTime}</span>
        </motion.div>

      </div>
    </div>
  )
}
