import React from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import styles from './style'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {

  return (
    <div className="bg-white">
      <div className={`${styles.flexCenter}`}>
          <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
