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
		intro?: JSX.Element;
		subHeadings: {
			[subHeading: string]: {
				name: string;
				content: React.LazyExoticComponent<() => React.ReactNode> | React.ReactElement;
				breakAfter?: JSX.Element | string | boolean;
				breakBefore?: JSX.Element | string | boolean;
			}
		}
	}
}