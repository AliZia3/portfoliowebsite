import {
	javascript,
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
	carrent,
	jobit,
	tripguide,
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
		id: 'linkedin',
		title: 'LinkedIn',
		icon: FaLinkedin,
		href: 'https://www.linkedin.com/in/m-alizia/',
	},
	{
		id: 'github',
		title: 'GitHub',
		icon: FaGithub,
		href: 'https://github.com/AliZia3'
	},
	{
		id: 'mail',
		title: 'Mail',
		icon: HiOutlineMail,
		href: 'mailto:alizia0217@gmail.com'
	},
	{
		id: 'resume',
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
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Image Classifier",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Drive Test Availablity Finder",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Pathfinder Visualizer",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "App Runner",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Part Manager",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Recylcing System",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Image Editor",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Video Downloader",
		description: '',
		image: '',
		source_code_link: '',
	},
]

export const webProjects = [
	{
		name: "MERNstagram",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "EasyChat",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "MiniGamesWeb",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Task Tracker",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Weather",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Movie Island",
		description: '',
		image: '',
		source_code_link: '',
	},
]

export const javaProjects = [
	{
		name: "JobIt - Job Application organizer",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Island Generator",
		description: '',
		image: '',
		source_code_link: '',
	},
	{
		name: "Piraten Kapern Simulator",
		description: '',
		image: '',
		source_code_link: '',
	},
]


export const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];
