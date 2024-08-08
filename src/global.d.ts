interface IBaseRoutes {
	path: string;
	exact?: boolean;
	component: React.LazyExoticComponent<() => JSX.Element>;
	// isAuthenticated?: boolean;
	// isProtected: boolean;
	layout?: ({ children }) => JSX.Element;
}


interface LessonTextContent {
	[lesson: string]: {
		name: string;
		intro?: React.LazyExoticComponent<() => React.ReactNode> | React.ReactElement;
		subHeadings: {
			[subHeading: string]: {
				name: string;
				content: React.LazyExoticComponent<() => React.ReactNode>| React.ReactElement;
			}
		}
	}
}