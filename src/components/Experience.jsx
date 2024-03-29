import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			// contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentStyle={{ background: "#151030", color: "#fff" }}
			contentArrowStyle={{ borderRight: "8px solid white" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img src={experience.icon} alt={experience.company_name} className="w-[100%] h-[100%] rounded-full"/>
				</div>
			}
		>
			
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
			</div>
			
			<ul className="mt-5 list-disc ml-5 space-y-4">
				{experience.points.map((point, index) => (
					<li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
						{point}
					</li>
				))}

			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<div id='Experience' className="flex flex-col justify-center items-center">
			<motion.div variants={textVariant()} initial="hidden" whileInView="show" >
				<h2 className={styles.sectionHeadText}>Work Experience</h2>
			</motion.div>

			<motion.div variants={fadeIn('', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="mt-20 flex flex-col">
					<VerticalTimeline>
						{experiences.map((experience, index) => (
							<ExperienceCard key={index} experience={experience} />
						))}
					</VerticalTimeline>
			</motion.div>
		</div>


	);
};

export default SectionWrapper(Experience, "experience");
