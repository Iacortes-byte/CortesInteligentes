import HeroSection from "@/components/HeroSection"
import ViralVideosSection from "@/components/ViralVideosSection"
import DramaticSection from "@/components/DramaticSection"
import TeachersSection from "@/components/TeachersSection"
import Footer from "@/components/Footer"
import PopupModal from "@/components/PopupModal"

export default function Home() {
  return (
    <>
      <PopupModal />
      <main className="min-h-screen bg-slate-900">
        <HeroSection />
        <ViralVideosSection />
        <DramaticSection />
        <TeachersSection />
        <Footer />
      </main>
    </>
  )
}
