import React, { useEffect, useRef } from "react";
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
		};
		
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);


	return (
		// Full Nav Bar
		<nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : ''} duration-300`} >
			{/* Navbar Content */}
			<div className="w-full flex justify-between items-center max-w-7x1 mx-auto">

				{/* Logo */}
				<Link to="/" className="flex items-center z-20" onClick={() => { setActive(""); window.scroll(0, 0); setToggle(!toggle) }} >
					<img src={logo} alt="logo" className="w-12 h-12 object-contain" />
				</Link>

				{/* Navbar Links */}
				<ul className="hidden lg:flex gap-x-24">
					{navLinks.map((link) => (
						<li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-blue-500 hover:scale-95 hover:opacity-80 duration-300 ease-in-out text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				{/* Burger Menu */}
				<div className="lg:hidden flex justify-end items-center">

					<img src={toggle ? close : menu} alt='menu' className="w-[45px] h-[28px] object-contain cursor-pointer z-10 absolute" onClick={() => setToggle(!toggle)} />

					{toggle ? (
						<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, rgb(3, 0, 10), rgb(8, 20, 77))' }}>
							{navLinks.map((link) => (
								<li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-3xl px-4 capitalize py-6`} onClick={() => {
									setActive(link.title)
									setToggle(!toggle)
								}}>
									<a href={`#${link.id}`}>{link.title}</a>
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
