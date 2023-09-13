import { motion } from "framer-motion";
import { fadeIn, zoomIn, slideIn } from "../utils/motion";
import { styles } from "../styles";
import React, { useRef, useEffect, useState } from "react";
import { background } from "../assets";
import { socialLinks } from "../constants";

const Hero = () => {

	return (
		// Entire hero section
		<section id='Hero' className="relative w-full h-screen mx-auto">

			<video className="w-full h-screen object-cover" autoPlay loop muted>
				<source type="video/mp4" src={background} />
			</video>

			<motion.div variants={zoomIn(0.8, 1)} initial="hidden" whileInView="show" className={`absolute inset-0 flex flex-col items-center justify-center gap-6`}>
				<h1 className={`${styles.heroHeadText}`}>Hey, I'm <span className="text-blue-600">Ali</span></h1>
				<div className={`${styles.heroSubText} text-white-100 flex flex-col justify-center items-center`}> 
					<p>A Third Year Software Engineering</p> 
					<p>Student at McMaster University</p> 
				</div>

				<ul className="flex gap-10">
					{socialLinks.map(({ title, icon, href, download }) => (
						<li key={title} className={'hover:scale-95 hover:opacity-80 duration-300 ease-in-out hover:text-blue-500 flex flex-col justify-center items-center'}>
							<a href={href} className='' download={download} target='_blank' rel='noreferrer' title={title}>
								{icon({ size: 40 })}
							</a>
						</li>
					))}
				</ul>
			</motion.div>

			{/* <motion.div variants={fadeIn('down', '', 0.8, 1)} initial="hidden" whileInView="show" className="absolute xs:bottom-10 bottom-14 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 ">
						<motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-white mb-1" />
					</div>
				</a>
			</motion.div> */}

		</section>
	);
};

export default Hero;