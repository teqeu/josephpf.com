import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function BottomBanner() {
  return (
    <div className="relative z-10 container mx-auto px-4 pb-12">
      <Card className="overflow-hidden bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-50/80">
              Ready for new projects
            </h2>
            <p className="text-lg text-gray-100/50 mb-6">letsCreateTogether</p>

            <div className="space-y-3">
              <p className="text-sm text-gray-100/50">Contact Me</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://discord.com/users/1270223423594954777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-50/80 hover:text-primary transition-colors"
                >
                  <svg className="h-4 w-4 text-gray-200/50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>@prelap</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 md:h-auto">
            <img
              src="/screensharex.png"
              alt="Banner artwork"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
