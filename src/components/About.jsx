import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { skills } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { BallCanvas } from "./canvas";

const ServiceCard = ({ id, name, icon }) => {
	return (
		// Cards
		<Tilt className="xs:w-[180px] w-full">
			<motion.div variants={fadeIn("right", "spring", 0.2 * id, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
				<div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col'>
					<img src={icon} alt={name} className='w-16 h-16 object-contain' />
					<h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
				</div>
			</motion.div>
		</Tilt>
	)
}

const About = () => {
	return (
		<div className='mt-1 flex flex-col items-center'>
			{/* Text */}
			<motion.div variants={textVariant()}>
				<h2 className={styles.sectionHeadText}>About Me</h2>
			</motion.div>

			{/* Text */}
			<motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
				With a blend of creative problem-solving and technical expertise, I strive to bring innovation to life through coding. 
				Whether it's developing intuitive user interfaces, crafting efficient algorithms, or exploring
				cutting-edge technologies, I find endless fascination in the ever-evolving world of software engineering.
				Through personal projects and rigorous coursework, I have honed my skills in various languages, allowing me to
				transform ideas into functional projects. 
			</motion.p>

			{/* Cards */}
			{/* <div className='mt-20 flex flex-wrap gap-10 justify-center'>
				{skills.map(({id, name, icon}) => (
					<ServiceCard id={id} name={name} icon={icon}/>
				))}
			</div> */}

			{/* Balls */}
			<div className="flex flex-wrap justify-center gap-10 mt-10 sm:grid sm:grid-cols-5 ">
				{skills.map(({name, icon}) => (
					<div className={`w-28 h-28 relative flex flex-col items-center justify-center `} key={name} >
						<BallCanvas icon={icon} />
						{name}
					</div>
				))}
			</div>
		</div>
	)
}

export default SectionWrapper(About, "about")