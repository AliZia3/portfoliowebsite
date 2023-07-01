import React, { useEffect, useRef, useState } from 'react';
import { socialLinks } from '../constants'

const Links = () => {
	// const [isContactInView, setIsContactInView] = useState(false);
  	// const contactRef = useRef(null);

  	// useEffect(() => {
    // 	const observer = new IntersectionObserver(([entry]) => {
    //   		setIsContactInView(entry.isIntersecting);
    // 	});

    // 	if (contactRef.current) {
    //   		observer.observe(contactRef.current);
    // 	}

    // 	return () => {
    //   		if (contactRef.current) {
    //     		observer.unobserve(contactRef.current);
    //   		}
    // 	};
  	// }, []);


	return (
		<>
      		<div className={`hidden lg:flex flex-col top-[35%] left-0 fixed z-10`}>
				<ul>
					{socialLinks.map(({ id, title, icon, href, download }) => (
						<li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'}>
							<a href={href} className='flex justify-between items-center w-full' download={download} target='_blank' rel='noreferrer'>
								{title} {icon({ size: 30 })}
							</a>
						</li>
					))}
				</ul>
      		</div>
			
    	</>
	)
}

export default Links