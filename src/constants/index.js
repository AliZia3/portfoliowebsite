import {
	javascript,
	drivetest,
	imageclassifier,
	plwinpredictor,
	MERNchat,
	MERNstagram,
	minigamesweb,
	islandgenerator,
	piratenkapern,
	python,
	java,
	junit,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	mysql,
	git,
	figma,
	docker,
	ite,
	mmrt,
	ramacentre,
	threejs,
	FaGithub,
	FaLinkedin,
	BiSolidFileDoc,
	HiOutlineMail,
	HiDocumentDownload,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

export const socialLinks = [
	{
		id: 1,
		title: 'LinkedIn',
		icon: FaLinkedin,
		href: 'https://www.linkedin.com/in/m-alizia/',
	},
	{
		id: 2,
		title: 'GitHub',
		icon: FaGithub,
		href: 'https://github.com/AliZia3'
	},
	{
		id: 3,
		title: 'Mail',
		icon: HiOutlineMail,
		href: 'mailto:alizia0217@gmail.com'
	},
	{
		id: 4,
		title: 'Resume',
		icon: HiDocumentDownload,
		href: '/resume.pdf',
		download: true,
	}
];

export const skills = [
	{
		id:1,
		name: "Python",
		icon: python,
	},
	{
		id:2,
		name: "Java",
		icon: java,
	},
	{
		id:3,
		name: "JavaScript",
		icon: javascript,
	},
	{
		id:4,
		name: "React",
		icon: reactjs,
	},
	{
		id:5,
		name: "Node.js",
		icon: nodejs,
	},
	{
		id:6,
		name: "MySQL",
		icon: mysql,
	},
	{
		id:7,
		name: "Git",
		icon: git,
	},
	{
		id:8,
		name: "JUnit",
		icon: junit,
	},
	{
		id:9,
		name: "HTML",
		icon: html,
	},
	{
		id:10,
		name: "CSS",
		icon: css,
	},
];

export const experiences = [
	{
		title: "Repair Technician",
		company_name: "Rama Centre",
		icon: ramacentre,
		iconBg: "#383E56",
		date: "May 2022 - August 2022",
		points: [
			"Managed 10+ repairs daily and achieved a 100% satisfaction rate in repair efficiency and on-time completion",
			"Effectively identified and resolved a wide range of technical issues, reducing rework time by 35%",
			"Proactively identified and resolved potential issues in repair execution, boosting repair success rates by 85%",
			"Maintained efficient documentation of repair processes, providing valuable data for analysis and improvement, resulting in a 15% reduction in recurring repair issues",
		],
	},
	{
		title: "Outreach Sub-Team",
		company_name: "McMaster Mars Rover Team",
		icon: mmrt,
		iconBg: "#E6DEDD",
		date: "June 2023 - Present",
		points: [
			"",
			"",
			"",
			"",
			// "Collaborated with the administration team to streamline communication processes, resulting in a 20% increase in efficiency and timely decision-making",
			// "Successfully expanded the team's network within the McMaster community by organizing information sessions and workshops, leading to a 30% increase in team membership",
			// "Implemented cost-effective logistics strategies for events, such as the Ontario Rover Rally, resulting in a 15% reduction in expenses while maintaining high-quality experiences for participants",
			// "Proficiently utilized Microsoft 365, Google, and other event organizing platforms to ensure smooth coordination and seamless execution of team activities and events.",
		],
	},
	{
		title: "Vice President of Events",
		company_name:
			"Institute of Transportation Engineers McMaster Student Chapter",
		icon: ite,
		iconBg: "#E6DEDD",
		date: "June 2023 - Present",
		points: ["", "", "", ""],
	},
];

export const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

export const pythonProjects = [
	{
		name: "Premier League Win Predictor",
		description: 'A program that utilizes historical match data and statistical analysis to predict and provide insights into the potential outcome of Premier League matches.',
		image: plwinpredictor,
		source_code_link: '',
		demo_link: '',
		tags: ['Python', 'Pandas', 'SciKit-Learn', 'FastAPI']
	},
	{
		name: "Image Classifier",
		description: 'A program that employs machine learning techniques to categorize and classify images based on their visual features, enabling automated analysis  of large image datasets.',
		image: imageclassifier,
		source_code_link: '',
		demo_link: '',
		tags: ['Python', 'Pandas', 'Keras', 'TensorFlow'],
	},
	{
		name: "DriveTest Availablity Finder",
		description: 'A program that automates the process of checking for available dates for driving tests, allowing users to quickly find and secure a suitable appointment.',
		image: drivetest,
		source_code_link: '',
		demo_link: '',
		tags: ['Python', 'Selenium']
	},
	// {
	// 	name: "Pathfinder Visualizer",
	// 	description: 'A graphical tool that visually demonstrates popular pathfinding algorithms, enabling users to observe and analyze the process of finding optimal paths in a dynamic and interactive manner.',
	// 	image: '',
	// 	source_code_link: '',
	// },
	// {
	// 	name: "App Runner",
	// 	description: 'A versatile Python program that facilitates the execution and management of other applications or scripts, providing a convenient way to automate workflows or perform batch operations.',
	// 	image: '',
	// 	source_code_link: '',
	// },
	// {
	// 	name: "Part Manager",
	// 	description: 'A project aimed at efficiently organizing and managing inventories of parts or components, helping users keep track of stock levels, locations, and other relevant information.',
	// 	image: '',
	// 	source_code_link: '',
	// },
	// {
	// 	name: "Recylcing System",
	// 	description: 'An integrated system designed to streamline recycling operations, encompassing features such as waste sorting, recycling bin tracking, and analytics to promote effective recycling practices.',
	// 	image: '',
	// 	source_code_link: '',
	// },
	// {
	// 	name: "Image Editor",
	// 	description: 'A feature-rich Python application that empowers users to edit and enhance images, offering functionalities such as cropping, resizing, applying filters, adjusting colors, and adding text or annotations.',
	// 	image: '',
	// 	source_code_link: '',
	// },
	// {
	// 	name: "Video Downloader",
	// 	description: 'A user-friendly program that enables users to download videos from popular platforms like YouTube or Vimeo, allowing offline access to their favorite content.',
	// 	image: '',
	// 	source_code_link: '',
	// },
]

export const webProjects = [
	{
		name: "MERNstagram",
		description: 'A full-stack web application designed to resemble a social media app for connecting with other users. Users can create profiles, upload photos, follow other users and more.',
		image: MERNstagram,
		source_code_link: '',
		demo_link: '',
		tags: ['MongoDB', 'Express', 'React', 'Node.js']
	},
	{
		name: "MERNChat",
		description: 'A full-stack chat application that allows real-time communication between users, providing features such as private messaging, group chats, and media sharing.',
		image: MERNchat,
		source_code_link: '',
		demo_link: '',
		tags: ['MongoDB', 'Express', 'React', 'Node.js']
	},
	{
		name: "MiniGamesWeb",
		description: 'A web-based platform hosting a collection of mini-games, offering users an enjoyable and interactive experience with various casual games accessible from a single website.',
		image: minigamesweb,
		source_code_link: '',
		demo_link: '',
		tags: ['HTML', 'CSS', 'JavaScript']
	},
	// {
	// 	name: "Task Tracker",
	// 	description: 'A simple yet effective tool for managing tasks and tracking progress, enabling users to create, organize, and prioritize tasks, set deadlines, and monitor their completion status.',
	// 	image: '',
	// 	source_code_link: '',
	// },
	// {
	// 	name: "Weather",
	// 	description: 'A web application that provides real-time weather information and forecasts for specified locations, allowing users to stay updated on current weather conditions.',
	// 	image: '',
	// 	source_code_link: '',
	// },
	// {
	// 	name: "Movie Island",
	// 	description: 'A platform for movie enthusiasts, offering features like browsing movie information, searching for movies, and providing user reviews and ratings.',
	// 	image: '',
	// 	source_code_link: '',
	// },
]

export const javaProjects = [
	{
		name: "JobIt",
		description: 'A tool to streamline the job application process by providing features for tracking job listings, storing application details, and managing interview schedules/follow-ups.',
		image: MERNchat,
		source_code_link: '',
		demo_link: '',
		tags: ['Java', 'MySQL']
	},
	{
		name: "Island Generator",
		description: 'An application that generates unique and customizable islands in the form of an svg file from user-defined parameters. Users can specfiy island shape, terrain, lakes and more.',
		image: islandgenerator,
		source_code_link: '',
		demo_link: '',
		tags: ['Java', 'JUnit', 'Maven']
	},
	{
		name: "Piraten Kapern Simulator",
		description: 'A simulation inspired by the board game Piraten Kapern. Incorporates multiple player strategies based on user-defined parameters.',
		image: piratenkapern,
		source_code_link: '',
		demo_link: '',
		tags: ['Java', 'Maven']
	},
]


// export const projects = [
// 	{
// 		name: "Car Rent",
// 		description:
// 			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
// 		tags: [
// 			{
// 				name: "react",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "mongodb",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "tailwind",
// 				color: "pink-text-gradient",
// 			},
// 		],
// 		image: carrent,
// 		source_code_link: "https://github.com/",
// 	},
// 	{
// 		name: "Job IT",
// 		description:
// 			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
// 		tags: [
// 			{
// 				name: "react",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "restapi",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "scss",
// 				color: "pink-text-gradient",
// 			},
// 		],
// 		image: jobit,
// 		source_code_link: "https://github.com/",
// 	},
// 	{
// 		name: "Trip Guide",
// 		description:
// 			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
// 		tags: [
// 			{
// 				name: "nextjs",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "supabase",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "css",
// 				color: "pink-text-gradient",
// 			},
// 		],
// 		image: tripguide,
// 		source_code_link: "https://github.com/",
// 	},
// ];
