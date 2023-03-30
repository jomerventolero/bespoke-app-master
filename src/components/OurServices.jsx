import React from 'react'
import outsource from '../assets/outsource.png'
import services from '../assets/services.png'
import styles from '../style'

const OurServices = () => {
  return (
    <section id="ourservices">
        <div>
            <div>
                <img src={ outsource } alt="outsource"/>
            </div>
            <div className="flex justify-center pb-8">
                <h1 className={`text-brandBlue ${styles.textResH4} 
                font-poppins font-semibold pl-4 py-4`}>BPO services commonly used by</h1>
                <h1 className={`text-brandBlack ${styles.textResH4} 
                font-poppins font-semibold pl-4 py-4`}>Freight Forwarders</h1>
            </div>
            <div className={`${styles.textResH4} flex justify-center px-[15%] pb-4`}>
                <p>One of the main elements of how & why Freight Forwarding companies use BPO services lies in what BPO companies offer their clients. Listed below are some of the business processes that Bespoke can help you manage:</p>
            </div>
            <div className="flex flex-row">
               
                <div className="flex flex-col pl-[15%]">
                    
                    <h1 className={`${styles.textResH4} text-brandBlue font-semibold pb-6`}>Data Entry</h1>
                    <p className={`text-justify pb-6 ${styles.textResP}`}>Data entry is one of the key features of how & why freight forwarders use BPO services. Because these companies heavily rely on accurate records, data entry cannot be overlooked. Be it entry into the companies EDI systems or invoices to contracts, a Bespoke will efficiently and effectively enter company data.</p>
                    <h1 className={`${styles.textResH4} text-brandBlue font-semibold pb-6`}>Invoice Processing</h1>
                    <p className={`text-justify ${styles.textResP} pb-6 leading-relaxed`}>Invoice processing is another instrumental element for freight forwarding companies, and it is not easy to accomplish quickly and efficiently. With a BPO company, we can accurately and quickly handle invoice processing from receipt to payment.</p>
                    <h1 className={`${styles.textResH4} text-brandBlue font-semibold pb-6`}>Freight Bill Processing</h1>
                    
                </div>
                <div className="flex flex-col justify-items-start pl-8 pr-[15%]">
                    <img src={ services } alt="services" className="w-[2000px] h-[530px] md:block hidden"/>
                </div>
            </div>
            <div className="px-[15%]">
                <p className={`text-justify ${styles.textResP} pb-6 leading-relaxed`}>Freight bill processing refers to accounts payable services for transportation invoices. A BPO company can act as the first line of response between freight payment providers and your organization.</p>
                <h1 className={`${styles.textResH4} text-brandBlue font-semibold pb-6`}>Accounting</h1>
                <p className={`text-justify ${styles.textResP} pb-6 leading-relaxed`}>Like any other industry, accurate accounting is crucial. Part of how & why freight forwarding companies use Bespoke's services is the financial calculating that can be time consuming and tedious. Bespoke takes care of your accounting functions so that you do not have to waste any time that could be more valuable used in other areas.</p>
                <h1 className={`${styles.textResH4} text-brandBlue font-semibold pb-6`}>Document Indexing</h1>
                <p className={`text-justify ${styles.textResP} pb-6 leading-relaxed`}>When it comes to the freight forwarding industry, organized data is imperative to get work done in a timely manner. Indexing documents is second nature to BPO companies, which means that you will quickly have all your documents properly stored on a database that is secure and easy to access.</p>
                <h1 className={`${styles.textResH4} text-brandBlue font-semibold pb-6`}>Data Management</h1>
                <p className={`text-justify ${styles.textResP} pb-6 leading-relaxed`}>In addition to data entry, Bespoke can also manage your company’s data. One of the main aspects of how & why freight forwarding companies use BPO services is to effectively carry out data-related services. Data management involves executing all necessary data-related processes.</p>
                <p className={`text-justify ${styles.textResP} pb-6 leading-relaxed`}>Aside from this list, a freight forwarding BPO company can take on any additional tasks or jobs that you might need help with. If you have a particular project that needs to be expertly handled, Bespoke company can ensure that it is properly completed from start to finish.</p>
            </div>
        </div>
    </section>
  )
}

export default OurServices