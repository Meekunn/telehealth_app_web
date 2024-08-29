export interface ISidebarModule {
	title: string;
	progress: number;
	items: {
		title: string;
		progress: number;
		path: string;
		subItems?: {
			title: string;
			isChecked: boolean;
			path: string;
			progress: number;
		}[];
	}[];
}

const sidebarContent: ISidebarModule[] = [
	{
		title: 'Module 1 : Introduction to Cybersecurity',
		progress: 89,
		items: [
			{
				title: '1.1. What is Cyber Security',
				progress: 0,
				path: '#',
				// subItems: [
				// 	{
				// 		title: 'Introduction',
				// 		path: '#',
				// 		progress: 14,
				// 	},
				// ],
			},
			{
				title: '1.2. The Cybersecurity Landscape',
				progress: 60,
				path: '#',
			},
		],
	},
	{
		title: 'Module 2 : Attack Techniques',
		progress: 100,
		items: [
			{
				title: '2.1. What is Cyber Security',
				progress: 100,
				path: '#',
			},
			{
				title: '2.2. The Cybersecurity Landscape',
				progress: 100,
				path: '#',
			},
		],
	},
	{
		title: 'Module 3 : Introduction to Cybersecurity',
		progress: 30,
		items: [
			{
				title: '2.1. What is Cyber Security',
				progress: 0,
				path: '#',
			},
			{
				title: '2.2. The Cybersecurity Landscape',
				progress: 60,
				path: '#',
			},
		],
	},
];

export default sidebarContent;
