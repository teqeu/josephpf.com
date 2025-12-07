"use client"

import { useEffect, useState, useRef } from "react"

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState("")
  const [activeSection, setActiveSection] = useState("about")
  const [discord, setDiscord] = useState(null)
  const wsRef = useRef(null)
  const intervalRef = useRef(null)
  const DISCORD_ID = "1270223423594954777"
  const titles = ["developer", "designer", "full-stack engineer"]
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const currentTitle = titles[titleIndex]
  const speed = isDeleting ? 50 : 150
  useEffect(() => {

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        setDisplayText(currentTitle.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTitleIndex((i) => (i + 1) % titles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, titleIndex])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      )
    }
    updateTime()
    intervalRef.current = setInterval(updateTime, 1000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Lanyard REST + WebSocket
  useEffect(() => {
    let mounted = true

    const fetchPresence = async () => {
      if (!DISCORD_ID) return
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
        if (!res.ok) return
        const json = await res.json()
        if (mounted) setDiscord(json?.data ?? null)
      } catch { }
    }

    fetchPresence()

    try {
      const ws = new WebSocket("wss://api.lanyard.rest/socket")
      wsRef.current = ws

      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            op: 2,
            d: { subscribe_to_ids: [DISCORD_ID] },
          })
        )
      }

      ws.onmessage = (event) => {
        let packet
        try {
          packet = JSON.parse(event.data)
        } catch {
          return
        }

        if (packet?.op === 1) {
          try {
            ws.send(JSON.stringify({ op: 3 }))
          } catch { }
          return
        }

        if (packet?.t === "INIT_STATE") {
          const users = packet?.d?.users
          if (users && users[DISCORD_ID]) {
            setDiscord(users[DISCORD_ID])
          }
        }

        if (packet?.t === "PRESENCE_UPDATE") {
          setDiscord(packet.d ?? null)
        }
      }
    } catch { }

    return () => {
      mounted = false
      try {
        if (wsRef.current) {
          wsRef.current.onopen = null
          wsRef.current.onmessage = null
          wsRef.current.onerror = null
          wsRef.current.onclose = null
          wsRef.current.close()
          wsRef.current = null
        }
      } catch { }

      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [DISCORD_ID])

  const sections = ["about", "work", "skills", "contact"]

  const getAvatarURL = (user) => {
    if (!user) return ""
    const id = user.id ?? user.user?.id ?? ""
    const avatar = user.avatar ?? user.user?.avatar ?? null
    const discrim = user.discriminator ?? user.user?.discriminator ?? "0"

    if (avatar) {
      const animated = avatar.startsWith("a_")
      const ext = animated ? "gif" : "png"
      return `https://cdn.discordapp.com/avatars/${id}/${avatar}.${ext}`
    }

    const idx = Number(discrim) ? Number(discrim) % 5 : 0
    return `https://cdn.discordapp.com/embed/avatars/${idx}.png`
  }

  const discordUser = discord?.discord_user ?? discord?.user ?? null
  const presenceStatus = discord?.discord_status ?? "offline"
  const activities = Array.isArray(discord?.activities)
    ? discord.activities
    : []

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <header className="glass sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <div className="text-sm text-muted-foreground">{currentTime}</div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
          {/* SIDEBAR — DISCORD CARD REMOVED */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start glass p-6 rounded-xl">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-primary">joseph</h1>
              <p className="text-lg text-muted-foreground">
                {displayText}
                <span className="animate-blink">|</span>
              </p>
            </div>

            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${activeSection === section
                      ? "glass border-primary/40 text-primary shadow-lg shadow-primary/10"
                      : "text-muted-foreground hover:text-foreground border border-transparent hover:glass"
                    }`}
                >
                  <span className="text-primary mr-2">{">"}</span>
                  {section}
                </button>
              ))}
            </nav>

            <div className="pt-8 space-y-2">
              <a href="https://github.com/teqeu" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <span>→</span>
                <span>github</span>
              </a>
              <a href="https://discord.com/users/1270223423594954777" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <span>→</span>
                <span>discord</span>
              </a>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="space-y-12">
            {/* ABOUT SECTION */}
            {activeSection === "about" && (
              <section className="space-y-8 animate-in fade-in duration-500">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <span className="text-primary">$</span>
                    <span>about</span>
                  </h2>

                  <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                    <p>Full-stack developer applying my skills at Screensharex.ac while continuously learning backend technologies like Golang and Rust.</p>
                    <p>I explore new technologies, contribute to open-source, and craft tools that improve workflows.</p>
                  </div>
                </div>

                {/* DISCORD CARD MOVED HERE */}
                <div className="glass rounded-xl p-6 bg-card space-y-4">
                  <h3 className="text-sm uppercase tracking-wide text-muted-foreground">discord</h3>

                  {discord ? (
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <img
                          src={getAvatarURL(discordUser)}
                          alt="avatar"
                          className="w-10 h-10 rounded-full border border-border"
                        />

                        <div className="text-foreground font-medium">
                          {discordUser?.username ?? "Unknown"}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${presenceStatus === "online"
                              ? "bg-green-500"
                              : presenceStatus === "idle"
                                ? "bg-yellow-500"
                                : presenceStatus === "dnd"
                                  ? "bg-red-500"
                                  : "bg-muted"
                            }`}
                        />
                        <span className="text-foreground">{presenceStatus}</span>
                      </div>

                      {activities.length > 0 && (
                        <div className="pt-2 space-y-1">
                          {activities.map((act, i) => (
                            <div key={i} className="text-muted-foreground text-sm">
                              {act?.name ?? act?.details ?? "Activity"}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-muted-foreground text-sm">Fetching…</div>
                  )}
                </div>
              </section>
            )}

            {/* WORK SECTION */}
            {activeSection === "work" && (
              <section className="space-y-8 animate-in fade-in duration-500">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <span className="text-primary">$</span>
                  <span>projects</span>
                </h2>

                <div className="grid gap-6">
                  {[
                    {
                      title: "Screensharex.ac",
                      description: "Advanced cheat detection system with detailed confidence assessments. The most reliable screenshare service for server administrators.",
                      tech: ["Next.js", "TypeScript", "MySQL", "Node.js"],
                      link: "https://screensharex.ac",
                    }
                  ].map((project, idx) => (
                    <div key={idx} className="glass glass-hover rounded-xl p-6 bg-card group">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                            <span className="text-sm">→</span>
                          </a>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SKILLS SECTION */}
            {activeSection === "skills" && (
              <section className="space-y-8 animate-in fade-in duration-500">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <span className="text-primary">$</span>
                  <span>skills</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-xl p-6 space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-primary font-semibold">Frontend</h3>
                    <div className="space-y-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((s) => (
                        <div key={s} className="flex items-center gap-3">
                          <span className="text-primary">▸</span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6 space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-primary font-semibold">Backend</h3>
                    <div className="space-y-2">
                      {["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"].map((s) => (
                        <div key={s} className="flex items-center gap-3">
                          <span className="text-primary">▸</span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6 space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-primary font-semibold">Tools</h3>
                    <div className="space-y-2">
                      {["Git", "Docker", "VS Code", "Figma", "Vercel"].map((s) => (
                        <div key={s} className="flex items-center gap-3">
                          <span className="text-primary">▸</span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6 space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-accent font-semibold">Learning</h3>
                    <div className="space-y-2">
                      {["Rust", "Golang"].map((s) => (
                        <div key={s} className="flex items-center gap-3">
                          <span className="text-accent">▸</span>
                          <span className="text-muted-foreground">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* contact*/}
            {activeSection === "contact" && (
              <section className="space-y-8 animate-in fade-in duration-500">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <span className="text-primary">$</span>
                  <span>contact</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">I'm always open to new opportunities and collaborations.</p>

                  <div className="glass rounded-xl p-6 bg-card space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-4">
                        <div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <span className="text-muted-foreground mt-1">→</span>
                        <div>
                          <div className="text-sm text-muted-foreground">Location</div>
                          <div>Tampa, FL</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <span className="text-muted-foreground mt-1">→</span>
                        <div>
                          <div className="text-sm text-muted-foreground">Availability</div>
                          <div>Open to new opportunities</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://discord.com/users/1270223423594954777"
                      className="inline-flex items-center gap-2 px-6 py-3 glass-hover rounded-xl bg-primary/20 border-primary/40 text-primary font-semibold hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <span>Get in touch</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      <footer className="glass mt-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} joseph · full-stack dev
          </div>
        </div>
      </footer>
    </div>
  )
}
