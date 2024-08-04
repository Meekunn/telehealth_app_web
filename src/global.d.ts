interface IBaseRoutes {
	path: string;
	exact?: boolean;
	component: React.LazyExoticComponent<() => JSX.Element>;
	// isAuthenticated?: boolean;
	// isProtected: boolean;
	layout?: ({ children }) => JSX.Element;
}
