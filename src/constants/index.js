import {
	javascript,
	drivetest,
	recycling,
	imageclassifier,
	plwinpredictor,
	MERNchat,
	MERNstagram,
	minigamesweb,
	weather,
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
		title: 'LinkedIn',
		icon: FaLinkedin,
		href: 'https://www.linkedin.com/in/m-alizia/',
	},
	{
		title: 'GitHub',
		icon: FaGithub,
		href: 'https://github.com/AliZia3'
	},
	{
		title: 'Mail',
		icon: HiOutlineMail,
		href: 'mailto:alizia0217@gmail.com'
	},
	{
		title: 'Resume',
		icon: HiDocumentDownload,
		href: '/Ali Zia Resume.pdf',
		download: true,
	}
];

export const skills = [
	{
		name: "Python",
		icon: python,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React",
		icon: reactjs,
	},
	{
		name: "Node.js",
		icon: nodejs,
	},
	{
		name: "MySQL",
		icon: mysql,
	},
	{
		name: "Git",
		icon: git,
	},
	{
		name: "JUnit",
		icon: junit,
	},
	{
		name: "HTML",
		icon: html,
	},
	{
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
			"Incoming Member !!!",
			// "",
			// "",
			// "",
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
		points: [
			"Incoming Member !!!", 
			// "", 
			// "", 
			// "",
		],
	},
];

export const pythonProjects = [
	{
		name: "Premier League Win Predictor",
		description: 'A program that utilizes historical match data and statistical analysis to predict and provide insights into the potential outcome of Premier League matches.',
		image: plwinpredictor,
		source_code_link: 'https://github.com/AliZia3/Premier-League-Win-Predictor/tree/main',
		demo_link: '/PL-Win-Predictor.zip',
		tags: ['Python', 'Pandas', 'SciKit-Learn', 'FastAPI']
	},
	{
		name: "Image Classifier",
		description: 'A program that employs machine learning techniques to categorize and classify images based on their visual features, enabling automated analysis of large image datasets.',
		image: imageclassifier,
		source_code_link: '',
		demo_link: '',
		tags: ['Python', 'Pandas', 'Keras', 'TensorFlow'],
	},

	{
		name: "Recycling System",
		description: 'A system designed to streamline recycling operations. Uses onboard sensors to sort recyclable containers according to mass and material type.',
		image: recycling,
		source_code_link: 'https://github.com/AliZia3/Recycling-System',
		demo_link: 'https://www.quanser.com/blog/one-of-a-kind-course-for-first-year-engineering-students/',
		tags: ['Python', 'Quanser', "Raspberry Pi"]
	},

	// {
	// 	name: "DriveTest Availablity Finder",
	// 	description: 'A program that automates the process of checking for available dates for driving tests, allowing users to quickly find and secure a suitable appointment.',
	// 	image: drivetest,
	// 	source_code_link: '',
	// 	demo_link: '',
	// 	tags: ['Python', 'Selenium']
	// },
	// {
	// 	name: "Parking Spot Image Classifier",
	// 	description: '',
	// 	image: '',
	// 	source_code_link: '',
	// },
	// {
	// 	name: "Face Blurrer",
	// 	description: '',
	// 	image: '',
	// 	source_code_link: '',
	// },
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
		name: "Weather",
		description: 'A web application that provides real-time weather information and forecasts for specified locations, allowing users to stay updated on current weather conditions.',
		image: weather,
		source_code_link: 'https://github.com/AliZia3/WorldWeatherWeb',
		demo_link: 'https://worldweatherweb.netlify.app',
		tags: ['HTML', 'CSS', 'JavaScript', 'APIs']
	},
	// {
	// 	name: "MERNChat",
	// 	description: 'A full-stack chat application that allows real-time communication between users, providing features such as private messaging, group chats, and media sharing.',
	// 	image: MERNchat,
	// 	source_code_link: '',
	// 	demo_link: '',
	// 	tags: ['MongoDB', 'Express', 'React', 'Node.js']
	// },
	{
		name: "MiniGamesWeb",
		description: 'A web-based platform hosting a collection of mini-games, offering users an enjoyable and interactive experience with various casual games accessible from a single website.',
		image: minigamesweb,
		source_code_link: 'https://github.com/AliZia3/MiniGamesWeb',
		demo_link: 'https://minigamesweb.netlify.app',
		tags: ['HTML', 'CSS', 'JavaScript']
	},
	// {
	// 	name: "Task Tracker",
	// 	description: 'A simple yet effective tool for managing tasks and tracking progress, enabling users to create, organize, and prioritize tasks, set deadlines, and monitor their completion status.',
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
	// {
	// 	name: "JobIt",
	// 	description: 'A tool to streamline the job application process by providing features for tracking job listings, storing application details, and managing interview schedules/follow-ups.',
	// 	image: MERNchat,
	// 	source_code_link: '',
	// 	demo_link: '',
	// 	tags: ['Java', 'MySQL']
	// },
	{
		name: "Island Generator",
		description: 'An application that generates unique and customizable islands in the form of an svg file from user-defined parameters. Users can specify island shape, terrain, lakes and more.',
		image: islandgenerator,
		source_code_link: 'https://github.com/AliZia3/Island-Generation',
		demo_link: '/Island-Generation.zip',
		tags: ['Java', 'JUnit', 'Maven']
	},
	{
		name: "Piraten Kapern Simulator",
		description: 'A simulation inspired by the board game Piraten Kapern. Incorporates multiple player strategies based on user-defined parameters.',
		image: piratenkapern,
		source_code_link: 'https://github.com/AliZia3/Piraten-Kapern',
		demo_link: '/Piraten-Kapern.zip',
		tags: ['Java', 'Maven']
	},
]


// export const technologies = [
// 	{
// 		name: "HTML 5",
// 		icon: html,
// 	},
// 	{
// 		name: "CSS 3",
// 		icon: css,
// 	},
// 	{
// 		name: "JavaScript",
// 		icon: javascript,
// 	},
// 	{
// 		name: "TypeScript",
// 		icon: typescript,
// 	},
// 	{
// 		name: "React JS",
// 		icon: reactjs,
// 	},
// 	{
// 		name: "Redux Toolkit",
// 		icon: redux,
// 	},
// 	{
// 		name: "Tailwind CSS",
// 		icon: tailwind,
// 	},
// 	{
// 		name: "Node JS",
// 		icon: nodejs,
// 	},
// 	{
// 		name: "MongoDB",
// 		icon: mongodb,
// 	},
// 	{
// 		name: "Three JS",
// 		icon: threejs,
// 	},
// 	{
// 		name: "git",
// 		icon: git,
// 	},
// 	{
// 		name: "figma",
// 		icon: figma,
// 	},
// 	{
// 		name: "docker",
// 		icon: docker,
// 	},
// ];