import React, { useEffect, useRef, useState } from "react";
import { socialLinks } from "../constants";
import { motion } from "framer-motion";
import { slideIn, slideOut } from "../utils/motion";

const Links = () => {
	const [heroIsIntersecting, setIsHeroInteresecting] = useState(true);

	useEffect(() => {
		const heroSection = document.getElementById("Hero");
		const footerSection = document.getElementById('Footer')
		const sections = [heroSection, footerSection]

		const observer = new IntersectionObserver(([entry]) => {
				setIsHeroInteresecting(entry.isIntersecting);
			},
			{
				threshold: 0.2,
			}
		);

		sections.forEach(section=>{
			observer.observe(section)
		})

		return () => {
			sections.forEach(section=>{
				observer.unobserve(section)
			})
		};
	}, []);

	return (
		// <motion.div variants={slideIn('left', 'spring', 0.05, 1)} initial="hidden" whileInView="show" className={`${heroIsIntersecting ? 'hidden' : 'lg:flex'}  flex-col top-[35%] left-0 fixed z-10`}>
		// 	<ul>
		// 		{socialLinks.map(({ id, title, icon, href, download }) => (
		// 			<li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'}>
		// 				<a href={href} className='flex justify-between items-center w-full' download={download} target='_blank' rel='noreferrer'>
		// 					{title} {icon({ size: 30 })}
		// 				</a>
		// 			</li>
		// 		))}
		// 	</ul>
		// </motion.div>

		<motion.div variants={heroIsIntersecting ? slideOut("left", "spring", 0.05, 0.5) : slideIn("left", "spring", 0.05, 0.5)} initial="hidden" whileInView="show" className={`hidden lg:flex flex-col top-[35%] left-0 fixed z-10`} >
			<ul>
				{socialLinks.map(({ id, title, icon, href, download }) => (
					<li key={id} className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" } >
						<a href={href} className="flex justify-between items-center w-full" download={download} target="_blank" rel="noreferrer" >
							{title} {icon({ size: 30 })}
						</a>
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default Links;
