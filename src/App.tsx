import React from 'react'
import { MainLayout } from './layouts/MainLayout'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { StoryTimeline } from './components/StoryTimeline'
import { EventDetails } from './components/EventDetails'
import { MediaSlider } from './components/MediaSlider'
import { WeddingSupport } from './components/WeddingSupport'
import { FAQSection } from './components/FAQSection'

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Countdown />
      <StoryTimeline />
      <EventDetails />
      <MediaSlider />
      <WeddingSupport />
      <FAQSection />
    </MainLayout>
  )
}

export default App
