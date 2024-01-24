import { motion } from 'framer-motion'
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    {!isOpen  && (
        <motion.div
            initial={{ opacity: 0.5, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="fixed top-6 left-4 bg-gray-900 rounded-xl lg:w-4/12 h-[50px] flex gap-4 px-2 justify-between z-50 w-3/4 shadow drop-shadow-xl bg-opacity-90 backdrop-blur-sm"
        >
            <a href="/" className="self-center text-white text-sm font-roboto">BESPOKE</a>
            <div className="flex flex-row gap-4">
                <span className="hidden text-white font-roboto self-center text-sm lg:flex flex-row gap-4">M E N U </span>
                <motion.div className="self-center"
                    initial={{ opacity: 0 }}
                    whileInView={{  opacity: 1 }}
                >
                    <img src="/src/assets/Icons/icon_menu.png" alt="menu" width={20} height={20} className="self-center cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}/>
                </motion.div>
            </div>
        </motion.div>
    )}
    {isOpen && (
    <>
        <motion.div
            className="fixed top-4 left-4 bg-gray-900 rounded-xl md:w-4/12 h-[50px] flex gap-4 px-2 justify-between z-50 w-3/4 bg-opacity-90 backdrop-blur-sm"
        >
            <a href="/" className="self-center"><Image src="/logo.png" alt="logo" width={100} height={200} className="self-center"/></a>
            <div className="flex flex-row gap-4">
                <span className="text-white font-roboto self-center text-sm lg:flex flex-row gap-4 hidden">M E N U </span>
                <motion.div 
                    className="text-white self-center cursor-pointer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <AiOutlineCloseCircle alt="close" width={64} height={64} onClick={() => {setIsOpen(!isOpen)}}/>
                </motion.div>
            </div>
        </motion.div>
        <div
            className="grid md:grid-cols-3 gap-5 z-30 "
        >
            <motion.a
                href="/services"
                className="fixed flex flex-col justify-between top-20 left-4 w-40 h-40 bg-gray-900 rounded-xl hover:bg-slate-700 transition-colors duration-300 ease-in-out p-5 cursor-pointer bg-opacity-90 backdrop-blur-sm z-50"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <span className="text-white font-roboto font-semibold">01</span>
                <span className="text-white font-roboto font-semibold text-sm">S E R V I C E S</span>
            </motion.a>
            <motion.a
                href="/cargo-insurance"
                className="fixed flex flex-col justify-between top-20 left-48 w-40 h-40 bg-gray-900 rounded-xl hover:bg-slate-700 transition-colors duration-300 ease-in-out p-5 cursor-pointer bg-opacity-90 backdrop-blur-sm z-50"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <span className="text-white font-roboto font-semibold">02</span>
                <span className="text-white font-roboto font-semibold text-sm">C A R G O <br/> I N S U R A N C E</span>
            </motion.a>
            <motion.a
                href="/tools-resources"
                className="fixed flex flex-col justify-between top-64 left-4 md:top-20 md:left-[23rem] w-40 h-40 bg-gray-900 rounded-xl hover:bg-slate-700 transition-colors duration-300 ease-in-out p-5 cursor-pointer bg-opacity-90 backdrop-blur-sm z-50"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <span className="text-white font-roboto font-semibold">03</span>
                <span className="text-white font-roboto font-semibold text-sm">T O O L S <br/> & <br/> R E S O U R C E S</span>
            </motion.a>
            <motion.a
                href="/about"
                className="fixed flex flex-col justify-between top-64 left-48 md:top-64 md:left-4 w-40 h-40 bg-gray-900 rounded-xl hover:bg-slate-700 transition-colors duration-300 ease-in-out p-5 cursor-pointer bg-opacity-90 backdrop-blur-sm z-50"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
            >
                <span className="text-white font-roboto font-semibold">04</span>
                <span className="text-white font-roboto font-semibold text-sm">A B O U T</span>
            </motion.a>
            <motion.a
                href="/contact"
                className="fixed flex flex-col justify-between top-[27rem] left-4 md:top-64 md:left-48 w-40 h-40 bg-gray-900 rounded-xl hover:bg-slate-700 transition-colors duration-300 ease-in-out p-5 cursor-pointer bg-opacity-90 backdrop-blur-sm z-50"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
            >
                <span className="text-white font-roboto font-semibold">05</span>
                <span className="text-white font-roboto font-semibold text-sm">C O N T A C T</span>
            </motion.a>
        </div>
    </>
    )}
    </>
  )
}

export default FloatingNavbar