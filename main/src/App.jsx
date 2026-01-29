import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import { Reproduction } from './components/gallery/Reproduction'
import Banner from './components/banner'
import Team from './components/our-team'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Reproduction />
      <Banner />
      <Team />
      <Footer />
    </div>
  )
}

export default App