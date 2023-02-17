import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/logo.png'

export default function App() {

  return (
      <FloatingWhatsApp phoneNumber="639760976171" accountName='BeSpoke' statusMessage='Typically replies within 1 hour' avatar={ logo } />
  )
}