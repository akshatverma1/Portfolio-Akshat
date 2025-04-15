import { Outlet } from "react-router-dom"
import AnimatedBackground from "./AnimatedBackground"
import SocialLinks from "./SocialLinks"

function Layout() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8">
          <Outlet />
          <footer className="fixed bottom-0 left-0 right-0 flex justify-center py-4">
            <SocialLinks />
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Layout
