import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			if(window.scrollY < 20){
				setActive('')
			}
		};
		
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	useEffect(() => {
		const aboutSection = document.getElementById("About");
		const experienceSection = document.getElementById("Experience");
		const projectsSection = document.getElementById("Projects");
		const contactSection = document.getElementById("Contact");
		const sections = [aboutSection, experienceSection, projectsSection, contactSection]

		const observer = new IntersectionObserver(([entry])=>{
			if (entry.isIntersecting){
				setActive(entry.target.id)
			}
		},{
			threshold: 0.2,
		})

		sections.forEach(section=>{
			observer.observe(section)
		})
	
	  	return () => {
			sections.forEach(section=>{
				observer.unobserve(section)
			})
	  	}
	}, [])


	return (
		// Full Nav Bar
		<nav className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 ${scrolled ? "bg-primary" : ''} duration-300`} >
			{/* Navbar Content */}
			<div className="w-full flex justify-between items-center max-w-7x1 mx-auto">

				{/* Logo */}
				<Link to="/" className="flex items-center z-20" onClick={() => { setActive(""); window.scroll(0, 0); {toggle ? setToggle(!toggle) : ''} }} >
					<img src={logo} alt="logo" className="w-12 h-12 object-contain" />
				</Link>

				{/* Navbar Links */}
				<ul className="hidden lg:flex gap-x-24">
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`} className={`${active === link.title ? "text-white border-b-2" : "text-secondary border-b-0"} border-blue-600 hover:text-blue-600 hover:scale-90 hover:opacity-80 ease-in-out text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)} >{link.title}</a>
						</li>
					))}
				</ul>

				{/* Burger Menu */}
				<div className="lg:hidden flex justify-end items-center">

					<img src={toggle ? close : menu} alt='menu' className="w-[45px] h-[28px] object-contain cursor-pointer z-10 absolute" onClick={() => setToggle(!toggle)} />

					{toggle ? (
						<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, rgb(5, 13, 48), rgb(3, 10, 38))' }}>
							{navLinks.map((link) => (
								<li key={link.id} className={`font-poppins font-medium cursor-pointer text-3xl px-4 capitalize py-6`}>
									<a href={`#${link.id}`} className={`${active === link.title ? "text-white text-4xl" : "text-secondary"}`} onClick={() => { setActive(link.title); setToggle(!toggle); }} >{link.title}</a>
								</li>
							))}
						</ul>
					) : ""}
				</div>

			</div>
		</nav>
	);
};

export default Navbar;
