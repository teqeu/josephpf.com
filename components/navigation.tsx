"use client"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
            <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center font-bold text-sm">
              D
            </div>
            <span className="text-sm font-medium">joseph</span>
          </a>

          {/* Center Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
          </div>

          {/* Profile/Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-xs font-bold text-white">YN</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
