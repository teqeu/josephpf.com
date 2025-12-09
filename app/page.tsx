import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"
import { BottomBanner } from "@/components/bottom-banner"
import { Starfield } from "@/components/starfield"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Starfield />

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8">
          <Sidebar />
          <MainContent />
        </div>
      </div>

      <BottomBanner />
    </main>
  )
}
