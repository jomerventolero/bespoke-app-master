import React from 'react'
import whydofreightforwarding from '../assets/whydofreightforwarding.png'
import styles from '../style'

const Resources = () => {
  return (
    <section id="resources">
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <img src={ whydofreightforwarding } alt="whydofreightforwarding" className="p-[40px]"/>
          <h1 className={`absolute top-[15%] lg:hidden font-poppins font-semibold text-left p-4 justify-end ${styles.textResTitle}`}>WHY DO FREIGHT FORWARDING COMPANIES USE BPO SERVICES</h1>
        </div>
      </div>
    </section>
  )
}

export default Resources