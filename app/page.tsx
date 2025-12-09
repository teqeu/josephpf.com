import { Navbar } from "@/components/Navbar"
import { MainContent } from "@/components/main-content"
import { BottomBanner } from "@/components/bottom-banner"
import { Starfield } from "@/components/starfield"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Effects */}
      <Starfield />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="relative z-10 flex justify-center px-4 py-8 lg:py-12">
        <div className="w-full max-w-5xl">
          <MainContent />
        </div>
      </div>

      {/* Footer / Bottom Banner */}
      <BottomBanner />
    </main>
  )
}
