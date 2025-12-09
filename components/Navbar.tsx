"use client"
import { useState } from "react"
import { Github, Instagram, Mail, Youtube, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/teqeu", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/yourhandle", label: "Instagram" },
  { icon: Mail, href: "mailto:you@example.com", label: "Email" },
  { icon: Youtube, href: "https://youtube.com/channel/yourchannel", label: "YouTube" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const glassStyle =
    "backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl transition-all duration-300"

  return (
    <nav className={`w-full flex justify-center`}>
      {/* Centered container to limit width */}
      <div className={`flex items-center justify-between px-4 py-3 w-full max-w-4xl ${glassStyle}`}>
        {/* Left: Logo / Avatar */}
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-white/20">
            <AvatarImage src="/profile.jpg" alt="Profile" />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <span className="text-white font-bold text-lg">Joseph</span>
        </div>

        {/* Middle: Navigation Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-gray-200 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4 text-gray-200" />
            </a>
          ))}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2 p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-5 w-5 text-gray-200" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-4 right-4 bg-white/10 border border-white/20 rounded-3xl p-4 flex flex-col gap-3 md:hidden backdrop-blur-3xl max-w-4xl mx-auto">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block text-white font-medium hover:text-gray-200 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
