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
		title: 'Module 1 : Introduction to Phishing',
		progress: 89,
		items: [
			{
				title: '1.1. Introduction to Phishing',
				progress: 0,
				path: '/lessons/introToPhishing',
			},
			{
				title: '1.2. Quiz',
				progress: 60,
				path: '/lessons/introToPhishing/quiz',
			},
		],
	},
	{
		title: 'Module 2 : Social Engineering',
		progress: 100,
		items: [
			{
				title: '2.1. What is Social Engineering',
				progress: 100,
				path: '/lessons/socialEngineering',
			},
			{
				title: '2.2. Quiz',
				progress: 100,
				path: '/lessons/socialEngineering/quiz',
			},
		],
	},
	{
		title: 'Module 3 : Password Security',
		progress: 30,
		items: [
			{
				title: '3.1. Importance to Password Security',
				progress: 0,
				path: '/lessons/passwordSecurity',
			},
			{
				title: '3.2. Quiz',
				progress: 60,
				path: '/lessons/passwordSecurity/quiz',
			},
		],
	},
];

export default sidebarContent;
