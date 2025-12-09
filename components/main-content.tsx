"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Music,
  Server,
  Code,
  Rocket,
  Briefcase,
  GraduationCap,
  Star,
} from "lucide-react"
import { motion } from "framer-motion"

const skills = ["Web Development", "React & Next.js", "UI/UX Design", "Modern CSS"]

const projects = [
  {
    title: "screensharex.ac",
    description:
      "Advanced cheat detection system with detailed confidence assessments. The most reliable screenshare service for server administrators.",
    tags: ["Node.js", "TypeScript", "Discord.js"],
    liveUrl: "https://screensharex.ac",
    year: "2023",
    image: "/screensharex.png",
  },
  {
    title: "Portfolio Redesign",
    description:
      "Revamped my personal portfolio using Next.js, Tailwind, and Framer Motion for smooth animations.",
    tags: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    liveUrl: "#",
    year: "2022",
    image: "/projects/portfolio.jpg",
  },
  {
    title: "UI Component Library",
    description:
      "Built a reusable UI component library for React projects with customizable components.",
    tags: ["React", "TypeScript", "Storybook"],
    liveUrl: "#",
    year: "2021",
    image: "/projects/ui-library.jpg",
  },
]

const timelineEvents = [
  {
    type: "work",
    title: "First Interests",
    description:
      "Started getting interested in frontend development with HTML, CSS, and JavaScript.",
    year: "2020",
    icon: <Briefcase />,
  },
  {
    type: "education",
    title: "Computer Science Course",
    description:
      "Completed a high school CS class focusing on web development. Ranked #1 in the final project.",
    year: "2021",
    icon: <GraduationCap />,
  },
  {
    type: "award",
    title: "High School Dropout",
    description:
      "Left 10th grade to pursue web development full-time with parental support.",
    year: "2022",
    icon: <Star />,
  },
  {
    type: "freelance",
    title: "Freelance Web Developer",
    description: "Built websites for small businesses and startups.",
    year: "2023",
    icon: <Briefcase />,
  },
  {
    type: "bootcamp",
    title: "Current Day",
    description:
      "Continuing to learn and grow as a web developer, focusing on modern frameworks and best practices.",
    year: "2025",
    icon: <GraduationCap />,
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
    "backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 transition-all duration-400 ease-in-out"

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

          {/* Skill Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {[
              { title: "Frontend Development", description: "React, Next.js, TailwindCSS, Framer Motion", icon: <Code /> },
              { title: "Backend Development", description: "Node.js, Express, MongoDB, REST APIs", icon: <Briefcase /> },
              { title: "UI/UX Design", description: "Figma, Adobe XD, Prototyping, Accessibility", icon: <Star /> },
              { title: "DevOps & Deployment", description: "Docker, Vercel, Netlify, CI/CD pipelines", icon: <Rocket /> },
              { title: "Testing & QA", description: "Jest, React Testing Library, Cypress", icon: <Server /> },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md"
              >
                <Card className="backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col gap-4 h-64 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 text-white text-xl">
                    {skill.icon}
                    <h3 className="font-bold text-lg">{skill.title}</h3>
                  </div>
                  <p className="text-white/80 text-base">{skill.description}</p>
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
                <Card className={`${glassCard} flex flex-col gap-4`}>
                  <div className="flex items-center gap-4 text-white text-lg">
                    {event.icon}
                    <h3 className="font-bold text-xl">{event.title}</h3>
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
              variant="outline"
              className="border border-white/20 text-white text-lg hover:bg-white/10 flex items-center gap-3 px-6 py-3"
            >
              <ExternalLink className="w-5 h-5" /> GitHub
            </Button>
          </div>
        </motion.div>

        {/* Footer / Time + Music */}
        <motion.div className="flex flex-col items-center gap-4 text-sm text-gray-100 mt-20 py-10">
          <span className="text-base">Local Time: {currentTime}</span>
          <span className="flex items-center gap-3 text-base">
            <Music className="w-5 h-5" /> Now Playing: Your Favorite Song
          </span>
        </motion.div>

      </div>
    </div>
  )
}
