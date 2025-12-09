import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Music, Globe, MapPin, Server, Code, Rocket } from "lucide-react";

export function MainContent() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const projects = [
  {
    title: "screensharex.ac",
    description: "Advanced cheat detection system with detailed confidence assessments. The most reliable screenshare service for server administrators.",
    image: "/screensharex.png",
    tags: ["Node.js", "TypeScript", "Discord.js"],
    liveUrl: "https://screensharex.ac",
  },
  ];

  const glassCard =
    "backdrop-blur-3xl bg-white/5 border border-white/10 rounded-3xl shadow-xl transition-all duration-400 ease-in-out p-6 hover:scale-105 hover:shadow-2xl";

  const badgeClass =
    "text-xs px-2 py-1 bg-white/5 text-gray-100/60 rounded-full transition-all duration-300 hover:bg-white/10";

  return (
    <div className="space-y-8">
      {/* Intro Card */}
      <Card className={`${glassCard} flex flex-col gap-4`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="h-3 w-3 rounded-full bg-red-300/50" />
          <span className="h-3 w-3 rounded-full bg-yellow-300/50" />
          <span className="h-3 w-3 rounded-full bg-green-300/50" />
        </div>

        <pre className="font-mono text-sm text-gray-100/50 mb-4">
          <code>{`$ const skills = [
  "Web Development",
  "React & Next.js",
  "UI/UX Design",
  "Modern CSS"
];`}</code>
        </pre>

        <div className="flex flex-wrap gap-3">
          <Button className="bg-gray-100/5 hover:bg-gray-100/10 text-gray-50/60 flex items-center gap-2 transition-all duration-300">
            <Rocket className="w-4 h-4" /> Projects
          </Button>
          <Button
            variant="outline"
            className="border border-gray-50/10 text-gray-50/50 hover:bg-white/5 flex items-center gap-2 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" /> GitHub
          </Button>
          <Button
            variant="outline"
            className="border border-gray-50/10 text-gray-50/50 hover:bg-white/5 flex items-center gap-2 transition-all duration-300"
          >
            Contact
          </Button>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-100/50 mt-4">
          <Music className="w-4 h-4 text-gray-200/50" />
          <span>
            Now Playing: <span className="font-medium text-gray-50/60">Your Favorite Song</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-100/50">
          <span>Local Time: {currentTime}</span>
          <span className="h-2 w-2 bg-green-300/50 rounded-full animate-pulse" />
        </div>

        <div className="p-3 bg-white/5 text-gray-50/60 rounded-lg text-sm font-medium border border-white/10">
          Open to new projects!
        </div>
      </Card>

      {/* Info Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Card className={`${glassCard} flex items-center gap-3`}>
          <Globe className="w-6 h-6 text-gray-200/50" />
          <div>
            <p className="text-xs text-gray-100/40">Country</p>
            <p className="text-sm font-semibold text-gray-50/60">Your Country</p>
          </div>
        </Card>
        <Card className={`${glassCard} flex items-center gap-3`}>
          <MapPin className="w-6 h-6 text-gray-200/50" />
          <div>
            <p className="text-xs text-gray-100/40">City</p>
            <p className="text-sm font-semibold text-gray-50/60">Your City</p>
          </div>
        </Card>
      </div>

      {/* Projects */}
      <Card className={`${glassCard} space-y-4`}>
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-50/70">
          <Server className="w-5 h-5 text-gray-200/50" /> Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <Card key={idx} className={`${glassCard} flex flex-col justify-between gap-3`}>
              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2 text-gray-50/70">
                  <Code className="w-4 h-4 text-gray-200/50" /> {project.title}
                </h3>
                <p className="text-sm text-gray-100/50 mb-2">{project.description}</p>

                {project.website && (
                  <div className="mb-2">
                    <p className="text-xs text-gray-100/40">Website:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.website.map((lang, i) => (
                        <span key={i} className={badgeClass}>{lang}</span>
                      ))}
                    </div>
                  </div>
                )}

                {project.bot && (
                  <div className="mb-2">
                    <p className="text-xs text-gray-100/40">Bot:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.bot.map((lang, i) => (
                        <span key={i} className={badgeClass}>{lang}</span>
                      ))}
                    </div>
                  </div>
                )}

                {project.tech && (
                  <div className="mb-2">
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={badgeClass}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-2">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1 text-gray-50/50 border-white/10 hover:bg-white/5 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3" /> Live
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1 text-gray-50/50 border-white/10 hover:bg-white/5 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3" /> GitHub
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
