import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ }) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
			{/* Full Card */}
			<Tilt options={{ max: 45, scale: 1, speed: 450 }} className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full`} >

			</Tilt>
		</motion.div>
	);
};

const Projects = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<motion.div variants={textVariant()} initial="hidden" whileInView="show" >
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					// <ProjectCard />
					<></>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Projects, "projects");
