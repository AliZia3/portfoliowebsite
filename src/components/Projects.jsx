import React, { useState, useEffect } from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, laptop } from "../assets";
import { SectionWrapper } from "../hoc";
import { pythonProjects, javaProjects, webProjects } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";


const ProjectCard = ({ index, name, description, image, source_code_link, demo_link, tags }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<motion.div variants={fadeIn("", "spring", index * 0.15, 0.75)} initial="hidden" whileInView="show" >
			{/* Full Card */}
			<div 
				// options={{ max: 45, scale: 1, speed: 450 }} 
				className={`bg-tertiary p-5 rounded-2xl md:w-[360px] h-full`}
				onMouseEnter={()=>setHovered(true)} 
				onMouseLeave={()=>setHovered(false)} 
			>
				
				{/* Card Image */}
				<div className="relative h-[180px]">
					{/* Main Image */}
					<img src={image} alt={name} className={`${hovered ? 'opacity-5' : ''} w-full h-full rounded-2xl duration-200`} />
					
					{/* Links when hovered */}
					<div className={`absolute inset-0 flex justify-around items-center`} >
						<motion.div variants={fadeIn('left', 'tween', 0, 0.2)} initial="hidden" whileInView="show" onClick={() => window.open(source_code_link, "_blank")} className={`${hovered ? 'black-gradient rounded-full flex justify-center items-center cursor-pointer' : 'hidden'}`} >
							<img src={github} alt="github" className="w-16 h-16" />
						</motion.div>

						<motion.div variants={fadeIn('right', 'tween', 0, 0.2)} initial="hidden" whileInView="show" onClick={() => window.open(demo_link, "_blank")} className={`${hovered ? 'black-gradient rounded-full flex justify-center items-center cursor-pointer' : 'hidden'}`} >
							<img src={laptop} alt="demo" className="w-16 h-16 " />
						</motion.div>
					</div>
				</div>

				{/* Description */}
				<div className="mt-5 flex flex-col items-center">
					<h3 className="text-white font-bold text-[20px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				{/* Tech Tags */}
				<div className="mt-5 flex flex-wrap justify-center items-center gap-5 w-full">
					{tags.map((tag, index) => (
						<p key={index} className="bg-blue-800 p-2 rounded-xl text-[11px]"> {tag}</p>
					))}
					
					{/* <p className="bg-indigo-900 p-2 rounded-full" >MongoDB</p> */}
				</div>

			</div>
		</motion.div>
	);
};

const Projects = () => {
	const [active, setActive] = useState('python')
	const [projectType, setProjectType] = useState([]);

	useEffect(() => {
		if (active === 'python') {
		  setProjectType(pythonProjects);
		} else if (active === 'java') {
		  setProjectType(javaProjects);
		} else if (active === 'web') {
		  setProjectType(webProjects);
		}
	  }, [active]);


	return (
		<div id='Projects' className="flex flex-col justify-center items-center mb-20">
			<motion.div variants={textVariant()} initial="hidden" whileInView="show" >
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>

			{/* w-48 h-16 */}
			<div className="bg-slate-600 flex rounded-full overflow-hidden mt-14">
				<button onClick={()=>setActive('python')} className={`${active === 'python' ? 'bg-blue-800' : 'hover:opacity-60'} w-28 h-14 sm:w-48 rounded-full hover:bg-blue-800 duration-200`}>Python</button>
				<button onClick={()=>setActive('java')} className={`${active === 'java' ? 'bg-blue-800' : 'hover:opacity-60'} w-28 h-14 sm:w-48 rounded-full hover:bg-blue-800 duration-200`}>Java</button>
				<button onClick={()=>setActive('web')} className={`${active === 'web' ? 'bg-blue-800' : 'hover:opacity-60'} w-28 h-14 sm:w-48 rounded-full hover:bg-blue-800 duration-200`}>Web</button>
			</div>

			<div className="mt-20 flex flex-wrap gap-8 justify-center">
				{projectType.map((project, index) => (
					<ProjectCard key={project.name} {...project} index={index} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Projects, "projects");