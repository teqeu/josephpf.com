import { Github, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 josephpf - this website is <span className="text-foreground">opensource</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/teqeu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
