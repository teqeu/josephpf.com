"use client"

import { useEffect, useState } from "react"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

type StatusState = "ok" | "loading" | "error"

type Status = {
  label: string
  url: string
  state: StatusState
  info: string
}

export default function StatusPage() {
  const [statuses, setStatuses] = useState<Status[]>([
    { label: "website", url: "https://josephpf.com", state: "loading", info: "…" },
    { label: "presence", url: "https://api.lanyard.rest", state: "loading", info: "…" },
  ])

  const check = async (url: string) => {
    try {
      const head = await fetch(url, { method: "HEAD" })
      if (head.ok) return { ok: true, info: `Up (HTTP ${head.status})` }
      throw new Error("HEAD blocked")
    } catch {
      try {
        const get = await fetch(url, { method: "GET", cache: "no-store" })
        if (get.ok) return { ok: true, info: `Up (HTTP ${get.status})` }
        return { ok: false, info: `Down (HTTP ${get.status})` }
      } catch {
        return { ok: false, info: "No response" }
      }
    }
  }

  const runChecks = async () => {
    const results = await Promise.all(
      statuses.map(async (s) => {
        const r = await check(s.url)
        return {
          ...s,
          state: r.ok ? "ok" : "error",
          info: r.info,
        }
      })
    )
    setStatuses(results)
  }

  useEffect(() => {
    runChecks()
    const id = setInterval(runChecks, 60000)
    return () => clearInterval(id)
  }, [])

  const borderClass = {
    ok: "border-green-500/40 bg-green-500/10",
    error: "border-red-500/40 bg-red-500/10",
    loading: "border-yellow-500/40 bg-yellow-500/10",
  }

  const iconClass = {
    ok: "text-green-500",
    error: "text-red-500",
    loading: "text-yellow-500",
  }

  const iconFor = (s: StatusState) =>
    s === "ok" ? CheckCircle : s === "error" ? XCircle : Loader2

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-muted/40 to-background flex flex-col items-center p-12">
      
      <header className="max-w-5xl w-full text-center space-y-6 mb-20 animate-in fade-in">
        <h1 className="text-5xl font-extrabold">system status</h1>
        <p className="text-muted-foreground text-lg">
          live overview of core services powering the platform.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={runChecks}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            refresh status
          </button>
          <button
            className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            uptime history
          </button>
        </div>
      </header>

      <main className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {statuses.map((s, i) => {
          const Icon = iconFor(s.state)

          return (
            <div
              key={i}
              className={`
                p-7 rounded-2xl border-2 
                ${borderClass[s.state]}
                backdrop-blur-lg shadow-xl 
                flex items-start gap-4 
                hover:scale-[1.03] transition-all duration-200
              `}
            >
              <Icon
                className={`
                  w-8 h-8 
                  ${iconClass[s.state]} 
                  ${s.state === "loading" ? "animate-spin" : ""}
                `}
              />
              <div>
                <h2 className="text-xl font-semibold capitalize">{s.label}</h2>
                <p className="text-sm text-muted-foreground">{s.info}</p>
              </div>
            </div>
          )
        })}
      </main>

      <footer className="text-center mt-24 opacity-60 text-sm">
        status dashboard
      </footer>
    </div>
  )
}
