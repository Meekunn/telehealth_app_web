export const navigateBackToRoot = (path: string) => {
	return `/${path.split('/')[1]}`;
};
