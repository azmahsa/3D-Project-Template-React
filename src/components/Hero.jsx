import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { styles } from "../styles";
import hero from "../assets/hero.png"
const Hero = () => {
  

  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div
      className={`absolute inset-0 mt-[110px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col   `}
    >
      <div className="flex flex-row  ">
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        <div className='w-1 sm:h-72 h-40 violet-gradient' />
      </div>

      <div >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#915EFF]'>Adrian</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop 3D visuals, user <br className='sm:block hidden' />
          interfaces and web applications
        </p>
      </div>
      </div>
      <div className="flex sm:mt-[-130px] justify-center ">
      <img className="" src={hero} alt="/" />
      </div> 
    </div>
   
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-2 h-2 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
    </div>
  </section>
  );
};

export default Hero;
