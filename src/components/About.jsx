import React, { useRef, useEffect, useState } from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
// Framer motion also has carousel

import { styles } from "../styles";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const ServiceCard = ({ id, name, icon }) => {
	return (
		// Cards
		<Tilt className="w-[80px] lg:w-[160px]">
			<motion.div variants={fadeIn("right", "spring", 0.2 * id, 0.75)} className="green-pink-gradient p-[1px] rounded-[20px] shadow-card" >
				<div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-2 lg:py-5 px-1 lg:px-12 flex justify-evenly items-center flex-col">
					<img src={icon} alt={name} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[12px] lg:text-[16px] font-bold text-center">
						{name}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<section id='About' className="mt-16 flex flex-col items-center">
			{/* Text */}
			<motion.div variants={textVariant()} initial="hidden" whileInView="show" >
				<h2 className={styles.sectionHeadText}>About Me</h2>
			</motion.div>

			{/* Text */}
			<motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]" initial="hidden" whileInView="show" >
				With a blend of creative problem-solving and technical
				expertise, I strive to bring innovation to life through coding.
				Whether it's developing intuitive user interfaces, crafting
				efficient algorithms, or exploring cutting-edge technologies, I
				find endless fascination in the ever-evolving world of software
				engineering. Through personal projects and rigorous coursework,
				I have honed my skills in various languages, allowing me to
				transform ideas into functional projects.
				<br />
				<br />
				Currently, I'm studying <span className="text-blue-600">Software Engineering</span> at <span className="text-blue-600">McMaster University</span> and seeking internships for Summer 2024.
				<br />
				<br />
				I have <span className="text-blue-600">experience</span> with:
			</motion.p>

			{/* Cards */}
			<div className='mt-8 flex flex-wrap lg:grid lg:grid-cols-5 gap-8 justify-center'>
				{skills.map(({id, name, icon}) => (
					<ServiceCard id={id} name={name} icon={icon}/>
				))}
			</div>

			{/* Balls */}
			{/* <motion.div variants={fadeIn('', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="flex flex-wrap justify-center gap-10 mt-14 lg:grid lg:grid-cols-5">
				{skills.map(({ name, icon }) => (
					<div className={`w-28 h-28 relative flex flex-col items-center justify-center `} key={name} >
						<BallCanvas icon={icon} />
						{name}
					</div>
				))}
			</motion.div> */}
		</section>
	);
};

export default SectionWrapper(About, "about");
