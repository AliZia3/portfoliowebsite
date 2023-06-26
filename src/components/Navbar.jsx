import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		// Full Nav Bar
		<nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} >
			{/* Navbar Content */}
			<div className="w-full flex justify-between items-center max-w-7x1 mx-auto">

				{/* Logo */}
				<Link to="/" className="flex items-center" onClick={() => { setActive(""); window.scroll(0, 0); }} >
					<img src={logo} alt="logo" className="w-12 h-12 object-contain" />
				</Link>

				{/* Navbar Links */}
				<ul className="hidden lg:flex gap-28">
					{navLinks.map((link) => (
						<li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				{/* Burger Menu */}
				<div className="lg:hidden flex justify-end items-center">
					
					<img src={toggle ? close : menu} alt='menu' className="w-[45px] h-[28px] object-contain cursor-pointer z-10 absolute" onClick={() => setToggle(!toggle)} />
					
					{toggle ? (
						<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
						{navLinks.map((link) => (
							<li key={link.id} className={`${active === link.title ? "text-white text-5xl" : "text-secondary"} font-poppins font-medium cursor-pointer text-4xl px-4 capitalize py-6`} onClick={() => {
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
