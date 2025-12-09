"use client"
import { useEffect, useState } from "react"
import { Github, Instagram, Mail, Youtube } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const socialLinks = [
  { icon: Github, href: "https://github.com/teqeu", label: "GitHub" },
]

interface DiscordPresence {
  discord_user: { username: string; discriminator: string; avatar: string | null }
  spotify?: { song: string; artist: string; album_art_url: string }
  activities: Array<{ name: string; details?: string; state?: string; large_image?: string; small_image?: string }>
  discord_status: string
}

function parseDiscordImage(url?: string) {
  if (!url) return null
  if (url.startsWith("mp:external/")) {
    // mp:external/<hash>/https/<actual-url>
    const parts = url.split("/https/")
    if (parts.length === 2) {
      return "https://" + parts[1]
    }
  }
  return url
}

export function Sidebar() {
  const [discord, setDiscord] = useState<DiscordPresence | null>(null)

  useEffect(() => {
    const fetchDiscord = async () => {
      try {
        const res = await fetch("https://api.lanyard.rest/v1/users/1270223423594954777")
        const data = await res.json()
        setDiscord(data.data)
      } catch (err) {
        console.error("Failed to fetch Discord status:", err)
      }
    }

    fetchDiscord()
    const interval = setInterval(fetchDiscord, 30_000)
    return () => clearInterval(interval)
  }, [])

  const glassCard =
    "backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl shadow-xl transition-all duration-400 hover:scale-105"

  return (
    <aside className="flex flex-col gap-6">
      {/* Profile Card */}
      <Card className={`${glassCard} p-6 flex flex-col gap-4`}>
        <div className="flex items-start gap-4">
          <div className="relative">
            <Avatar className="h-20 w-20 border-2 border-white/20">
              {discord?.discord_user.avatar ? (
                <AvatarImage
                  src={`https://cdn.discordapp.com/avatars/${discord.discord_user.id}/${discord.discord_user.avatar}.png`}
                  alt="Discord Avatar"
                />
              ) : (
                <AvatarFallback>{discord ? discord.discord_user.username[0] : "YN"}</AvatarFallback>
              )}
            </Avatar>
            <span
              className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white/20 ${
                discord
                  ? discord.discord_status === "online"
                    ? "bg-green-400"
                    : discord.discord_status === "dnd"
                    ? "bg-red-500"
                    : discord.discord_status === "idle"
                    ? "bg-yellow-400"
                    : "bg-gray-400"
                  : "bg-gray-400"
              }`}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-white">{discord ? discord.discord_user.username : "toku"}</h1>
            <p className="text-sm text-gray-200 leading-relaxed">
              Developer · Web Designer · UI Designer
            </p>
          </div>
        </div>

        {discord && (
          <p className="text-xs text-gray-200/70">
            Status: <span className="capitalize">{discord.discord_status.replace("_", " ")}</span>
          </p>
        )}

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5 text-gray-200" />
            </a>
          ))}
        </div>
      </Card>

      {/* Activities */}
      {discord?.activities.length > 0 && (
        <Card className={`${glassCard} p-4 flex flex-col gap-4`}>
          <h2 className="text-lg font-bold text-white">Activities</h2>
          <div className="flex flex-col gap-3">
            {discord.activities.map((act, i) => (
              <Card
                key={i}
                className="flex items-center gap-3 p-3 bg-white/10 border border-white/20 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                {/* Large image */}
                {act.large_image && (
                  <img
                    src={parseDiscordImage(act.large_image)!}
                    alt={act.name}
                    className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
                  />
                )}

                {/* Text info */}
                <div className="flex flex-col flex-1">
                  <p className="text-sm font-medium text-white">{act.name}</p>
                  {act.details && <p className="text-xs text-gray-200/70">{act.details}</p>}
                  {act.state && <p className="text-xs text-gray-200/70">{act.state}</p>}
                </div>

                {/* Small image */}
                {act.small_image && (
                  <img
                    src={parseDiscordImage(act.small_image)!}
                    alt="icon"
                    className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                  />
                )}
              </Card>
            ))}
          </div>
        </Card>
      )}
    </aside>
  )
}
