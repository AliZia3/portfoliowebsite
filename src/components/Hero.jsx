import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import React from "react";
import { background } from "../assets";
import { socialLinks } from "../constants";

const Hero = () => {
	return (
		// Entire hero section
		<section className="relative w-full h-screen mx-auto" id="hero">

			<video className="w-full h-screen object-cover" autoPlay loop muted>
				<source type="video/mp4" src={background} />
			</video>

			<div className={`absolute inset-0 flex flex-col items-center justify-center gap-6`}>
				<h1 className={`${styles.heroHeadText}`}>Hey, I'm <span className="text-sky-500">Ali</span></h1>
				<div className={`${styles.heroSubText} text-white-100 flex flex-col justify-center items-center`}> 
					<p>A Third Year Software Engineering</p> 
					<p>Student at McMaster University</p> 
				</div>

				<ul className="flex gap-10">
					{socialLinks.map(({ id, icon, href, download }) => (
						<li key={id} className={'hover:scale-95 hover:opacity-80 duration-300 ease-in-out hover:text-blue-500'}>
							<a href={href} className='' download={download} target='_blank' rel='noreferrer'>
								{icon({ size: 40 })}
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className="absolute xs:bottom-10 bottom-14 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 ">
						<motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-white mb-1" />
					</div>
				</a>
			</div>

		</section>
	);
};

export default Hero;