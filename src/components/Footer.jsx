import React from 'react'
import { styles } from '../styles'
import { socialLinks } from '../constants'
import { logo } from '../assets'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'

const Footer = () => {
	return (
		// bg-slate-600
		<footer id='footer' className={`${styles.paddingX} bg-primary w-full sm:h-[68px] p-5 flex items-center justify-between`}>
			
			<motion.div variants={slideIn('left', 'spring', 0.05, 1)} initial="hidden" whileInView="show" className='w-full flex flex-col gap-7 sm:flex-row justify-between items-center max-w-7x1'>
				
				<ul className="flex gap-10">
					{socialLinks.map(({id,icon, href, download}) => (
						<li key={id} className={'hover:scale-95 hover:opacity-80 duration-300 ease-in-out hover:text-blue-500'}>
							<a href={href} className='' download={download} target='_blank' rel='noreferrer'>
								{icon({ size: 40 })}
							</a>
						</li>
					))}
				</ul>
					
				<div className='flex items-center gap-4'>
					<img src={logo} alt="logo" className="w-12 h-12 object-contain" /> 
					<p className='text-[22px]'>© Ali Zia 2022</p> 
				</div>
			</motion.div>
		</footer>
		
	)
}

export default Footer