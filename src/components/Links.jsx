import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Links = () => {
	const socialLinks = [
		{
			id: 'linkedin',
			content: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: 'https://www.linkedin.com/in/m-alizia/',
			style: 'rounded-tr-md'
		},
		{
			id: 'github',
			content: (
				<>
					GitHub <FaGithub size={30} />
				</>
			),
			href: 'https://github.com/AliZia3'
		},
		{
			id: 'resume',
			content: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: '/resume.pdf',
			style: 'rounded-br-md',
			download: true,
		}
	]

	return (
		<div className='hidden lg:flex flex-col top-[45%] left-0 fixed'>
			<ul>
				{socialLinks.map(({ id, content, href, style, download }) => (
					<li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " + style}>
						<a href={href} className='flex justify-between items-center w-full' download={download} target='_blank' rel='noreferrer'>
							{content}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Links