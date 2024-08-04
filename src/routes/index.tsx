import { Fragment } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import ErrorPage from './ErrorPage';

const renderRoutes = ({ component: Component, ...route }: IBaseRoutes) => {
	const Layout = (route.layout ? route.layout : Fragment) as React.ElementType;
	return (
		<Route
			key={route.path}
			path={route.path}
			element={
				<Layout>
					{/* <Suspense fallback={<Loader />}> */}
					<Component />
					{/* </Suspense> */}
				</Layout>
			}
		/>
	);
};

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				{routes?.map((v: IBaseRoutes) => renderRoutes(v))}
				<Route
					path="404"
					//element={<div>No match</div>}
					element={<ErrorPage />}
				/>
				<Route path="*" element={<div>No match</div>} />
			</Routes>
		</Router>
	);
}
