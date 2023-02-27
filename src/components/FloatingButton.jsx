import React from 'react'
import { HiOutlineMail } from 'react-icons'

const FloatingButton = () => {
  return (
    <div>
        <button className="fixed z-90 bottom-20 right-8">
            <HiOutlineMail/>
        </button>
    </div>
  )
}

export default FloatingButton