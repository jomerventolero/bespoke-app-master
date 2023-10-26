import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import datatheft from '../assets/datatheft.png'
import fim from '../assets/wazuh-fim-module.jpg'
import wazuhdash from '../assets/wazuh-dash.jpg'
import wazuhsca from '../assets/wazuh-sca.jpg'
import wazuhlog from '../assets/wazuh-unauthorized-usb-drive-event.webp'
import { SuperSEO } from 'react-super-seo'

const DataSecurity = () => {
  return (
    <>
        <Navbar />
        <SuperSEO
          title="Bespoke | Data Security 🔐"
          description="How Bespoke Detect Data Theft."
          url="https://www.mybespokestaff.com/datasecurity"
        />
        <div className="flex flex-col justify-center items-center mt-40">
            <motion.h1 
                initial={{ opacity: 0, x: -100}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    type: "fadeIn",
                    duration: 0.8,
                    delay: 0.5
                }}
                viewport={{ once: true }}
                className='text-[30px] text-brandBlack font-poppins font-bold'>Data Security</motion.h1>
            <motion.div
                initial={{ opacity: 0, x: -100}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    type: "fadeIn",
                    duration: 0.8,
                    delay: 0.5
                }}
                viewport={{ once: true }}
                className="font-poppins font-medium"
            >
                Detecting Data Theft with Wazuh
            </motion.div>
            <motion.img 
                initial={{ opacity: 0, y: -100}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: "fadeIn",
                    duration: 0.8,
                    delay: 0.5
                }}
                viewport={{ once: true }}
                src={datatheft} alt="datatheft" draggable="false" className="w-[300px]"/>
            <motion.div
                initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: "fadeIn",
                    duration: 0.8,
                    delay: 0.5
                }}
                viewport={{ once: true }}
                className="flex flex-col px-10 font-poppins font-light  pb-20"
            >
                <p className="px-5 pb-5 text-justify">
                    Data theft involves the unauthorized acquisition of data residing within business databases, endpoints, and servers. This pilfered information encompasses items such as credentials, credit card details, personally identifiable information, medical records, software code, and proprietary technologies. Data theft is a peril that can manifest both within and beyond an organization's boundaries.
                    Malignant actors may purloin data from either organizations or individuals with the intention of selling it to other malicious parties. Data theft poses a significant threat to numerous entities since it can lead to issues like identity theft, harm to reputation, and financial setbacks.
                </p>
                <motion.h1
                    initial={{ opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="font-poppins font-bold text-2xl pt-5"
                >
                    How Bespoke Detect Data Theft: Utilizing <span className="text-blue-700">Wazuh</span> for Data Theft Detection at Bespoke Enterprise Solutions Inc.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 100}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="px-5 py-5 text-justify"
                >
                    Wazuh, an enterprise-ready security solution, plays a pivotal role in enhancing security measures at Bespoke Enterprise Solutions Inc. Its open-source nature, combined with an array of features, enables our organization to detect and respond to data theft effectively.<br/><br/>
                    Wazuh serves as a comprehensive tool that unifies SIEM (Security Information and Event Management) and XDR (Extended Detection and Response) protection, covering various workloads within our infrastructure.<br/><br/>
                    One of its core strengths lies in providing a centralized dashboard for threat detection and security monitoring. This dashboard seamlessly spans virtualized, on-premises, cloud-based, and containerized environments, allowing us to maintain a holistic view of our security landscape.<br/><br/>
                    Wazuh extends several capabilities that empower our organization to take proactive steps in averting, identifying, and addressing security threats. Below, we shed light on key features and functionalities of Wazuh that are instrumental in safeguarding your data against theft.
                </motion.p>
                
                <motion.h1
                    initial={{ opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="font-poppins font-bold text-2xl pt-5 pb-5"
                >
                    File Integrity Monitoring (FIM) and Data Theft Detection
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 100}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="px-5 py-5 text-justify"
                >
                    Within the security framework of Wazuh, the File Integrity Monitoring (FIM) module plays a critical role in safeguarding data integrity. This module continually observes the files and directories on an endpoint, promptly raising alerts when it detects file creation, modification, or deletion activities.
                    <br/><br/>
                    Wazuh's FIM module goes a step further by preserving cryptographic checksums and other file attributes, as well as monitoring changes to Windows registry keys. This meticulous record-keeping allows us to identify any alterations to these values with precision. Monitoring takes place at regular intervals or even in near real-time, ensuring swift response to any unauthorized changes.
                    <br/><br/>
                    Malicious actors often employ malware to pilfer data from endpoints, with these harmful programs creating or downloading malicious files onto the compromised systems. Wazuh's FIM module excels in detecting these nefarious activities when such files are created or downloaded on the affected endpoints.
                    <br/><br/>
                    As an example, the Wazuh FIM module successfully identifies instances of files being generated and downloaded by the STRRAT malware, underscoring its efficacy in data theft prevention. You can observe this detection in Figure below.
                </motion.p>
                <img src={fim} alt="Wazuh File Integrity Monitoring (FIM) and Data Theft Detection" draggable="false"/>
                <motion.h1
                    initial={{ opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="font-poppins font-bold text-2xl pt-5 pb-5"
                >
                    Identifying Vulnerabilities with <span className="text-blue-700">Wazuh</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 100}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="px-5 py-5 text-justify"
                >
                    The core function of vulnerability detection is to pinpoint security frailties within both the operating system and the applications residing on the monitored endpoints. Wazuh employs its dedicated Vulnerability Detector module to carry out this crucial task.
                    <br/><br/>
                    To enable this process, Wazuh creates a comprehensive vulnerability database, drawing information from widely accessible Common Vulnerabilities and Exposures (CVE) repositories. This database acts as a central resource for cross-referencing with the inventory data of applications collected from the monitored endpoints. Through this meticulous comparison, the Vulnerability Detector module can successfully flag any software that exhibits vulnerabilities.
                    <br/><br/>
                    By doing so, the Wazuh Vulnerability Detector module unveils unpatched vulnerabilities on the endpoints, which could potentially serve as entry points for malicious actors seeking to compromise data security. This proactive approach aids in safeguarding against data theft and other security threats.
                </motion.p>
                <img src={wazuhdash} alt="Wazuh File Integrity Monitoring (FIM) and Data Theft Detection" draggable="false"/>
                <motion.h1
                    initial={{ opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="font-poppins font-bold text-2xl pt-5 pb-5"
                >
                    Security Configuration Assessment <span className="text-blue-700">(SCA)</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 100}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="px-5 py-5 text-justify"
                >
                    Security Configuration Assessment (SCA) is an essential process that involves the thorough examination of monitored endpoints to identify misconfigurations that could potentially render these endpoints vulnerable to cyber attacks.
                    <br/><br/>
                    SCA, as facilitated by Wazuh, continuously enhances the configuration posture of systems by adhering to recognized standards such as the Center for Internet Security (CIS), NIST, PCI-DSS, HIPAA, and various others.
                    <br/><br/>
                    Wazuh's SCA module conducts routine scans on monitored endpoints with the primary goal of unveiling potential exposures of sensitive data or configuration inaccuracies. These scans meticulously evaluate the configurations of both the endpoints and the applications running on them. Policy files, containing rules designed for testing against the actual configurations, guide this assessment process.
                    <br/><br/>
                    Through these scans, Wazuh's SCA module identifies various issues, including unnecessary services, default credentials, insecure protocols, and open ports on monitored endpoints. These findings are invaluable in preventing malicious actors from exploiting vulnerabilities to compromise data security.
                </motion.p>
                <img src={wazuhsca} alt="Wazuh File Integrity Monitoring (FIM) and Data Theft Detection" draggable="false"/>
                <motion.h1
                    initial={{ opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="font-poppins font-bold text-2xl pt-5 pb-5"
                >
                    Analyzing Log Data for <span className="text-blue-700">Enhanced Security</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 100}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "fadeIn",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                    className="px-5 py-5 text-justify"
                >
                    Log data analysis is an integral procedure that involves scrutinizing the logs produced by various devices to uncover potential cyber threats and pinpoint security vulnerabilities and risks.
                    <br/><br/>
                    Wazuh plays a pivotal role in this process by gathering security logs originating from multiple endpoints and employing decoders and rules to conduct a thorough analysis.
                    <br/><br/>
                    One area of particular concern is the misuse of USB drives by disgruntled employees or malicious actors to pilfer sensitive data from an organization's endpoints. Wazuh addresses this threat by actively collecting and scrutinizing event logs generated when a USB drive is inserted into an endpoint.
                    <br/><br/>
                    In a recent blog post, Wazuh showcases its capabilities in detecting both authorized and unauthorized USB drives through the utilization of a constant database (CDB) list containing authorized USB drives. This exemplifies how Wazuh's log data analysis aids in bolstering security measures and guarding against data theft and other potential risks.
                </motion.p>
                <img src={wazuhlog} alt="Wazuh File Integrity Monitoring (FIM) and Data Theft Detection" draggable="false"/>
            </motion.div>
        </div>
    </>
  )
}

export default DataSecurity 