import MainLayout from '../layout/MainLayout';
import React from 'react';

const routes: IBaseRoutes[] = [
	{
		path: '/*',
		exact: true,
		component: React.lazy(() => import('../modules/main')),
		layout: MainLayout,
	},
];

export default routes;
