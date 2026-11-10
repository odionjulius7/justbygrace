import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-[#E8DCC4] selection:text-[#1F1B18]">
      {/* Background ambient subtle glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#EBD8B8]/30 blur-3xl opacity-70" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-[#F3E7D3]/40 blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#DFCEB1]/20 blur-3xl opacity-50" />
      </div>

      <Navbar />

      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  )
}
