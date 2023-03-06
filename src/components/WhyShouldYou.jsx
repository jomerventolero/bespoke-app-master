import React from 'react'

import styles from '../style'
import services from '../assets/aboutus/10.png'

const WhyShouldYou = () => {
  return (
    <div classname="flex flex-col">
        <img src={services} alt="services" draggable="false" className="w-screen"/>
        
        {/* DESKTOP VIEW */}
        <div className="flex flex-col justify-center">
            <div className="lg:flex flex-row gap-4 justify-center text-center font-semibold hidden">
                <h1 className={`${styles.textResTitle} text-brandBlack`}>Why should you choose to hire a</h1>
                <h1 className={`${styles.textResTitle} text-brandBlue`}>Bespoke staff?</h1>
                
            </div>
            <span className={`${styles.textResH3} text-brandBlack text-center pb-10`}>
                    Learn why choosing Bespoke as your offshore outsourcing partner makes business sense for you.
            </span>
            <div className="flex flex-col gap-4 justify-center text-justify px-[10%] leading-relaxed">
                
                <span className={`${styles.textResH3} text-brandBlack`}>
                    Unlike the majority of off shore companies that offer outsourcing services, we have an Australian office and Australian executive staff.  Therefore we can ensure that our communications with clients are of the highest quality, this is not only just in the technical sense, but also to make sure that nothing is lost in the cultural differences that exist in the outsourcing world. This is of course a great advantage to our Australian clients as we understand your business needs and can then efficiently translate as needed. Having local Australian experience has allowed us to develop our international outsourcing programs, which is always a winning situation for our client’s services and needs.
                </span>
                <span className={`${styles.textResH3} text-brandBlack`}>
                    Talk to a Bespoke staff to hire your very own Bespoke staff and learn how we can cut your business costs and improve your company’s bottom line. Our initial consultations are always free and in learning about your business we can tailor our outsourcing solutions are tailored to your specific business requirements
                </span>
                <span className={`${styles.textResH3} text-brandBlack`}>
                    Bespoke has the BPO (Business process outsourcing) experience and track record that your company can trust. In today’s ever changing and demanding market place, all businesses need to continuously adapt to market trends and focus on growth and innovation to sustain a competitive industry advantage while keeping an eye on the bottom line.
                </span>
                <span className={`${styles.textResH3} text-brandBlack`}>
                    So in summary why you should use Bespoke, it is simply because we at Bespoke believe that our offshoring services would only benefit your company and your bottom line. And we are certain that whilst there are other BPO service providers out there in the offshore Business space, there are none quite servicing their client’s business the way that Bespoke does. We offer our clients proven results, transparency, Honesty, Confidentiality, and overall trust in our services.

                </span>
            </div>
        </div>

    </div>
  )
}

export default WhyShouldYou