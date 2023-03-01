import React from 'react'
import whydofreightforwarding from '../assets/whydofreightforwarding.png'
import styles from '../style'

const Resources = () => {
  return (
    <section id="resources">
      <div className="flex flex-col pt-[8%]">
        <div className="flex flex-col">
          <img src={ whydofreightforwarding } alt="whydofreightforwarding" className="xs:block hidden p-[40px]"/>
          <h1 className={`lg:hidden font-poppins font-semibold text-left p-4 px-[6%] justify-end ${styles.textResTitle}`}>WHY DO FREIGHT FORWARDING COMPANIES USE BPO SERVICES</h1>
        </div>
      </div>
    </section>
  )
}

export default Resources