import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardTutorials from '../components/CardTutorials'

import { tutorialsList } from '../configs/tutorials'

const OnboardingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-4">
        <Navbar />
        <h1 className="primary text-3xl font-semibold pt-36">On Boarding Tutorials</h1>
            <div className="grid grid-cols-2 gap-4 justify-center items-center py-4">
                
                {tutorialsList.map((tutorial, index) => (
                    <CardTutorials key={index} {...tutorial} />
                ))}
            </div>
        <Footer />
    </div>
  )
}

export default OnboardingPage