import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Outlet';
import { mainPaths } from '../../routes/paths';
import MainPage from './MainPage';
import Sidebar from '../../resuables/sidebar/sidebar';

function SuperAdminRoutes() {
	const location = useLocation();
	return (
		<Routes>
			<Route path={mainPaths.BASE} element={<Dashboard />}>
				<Route path={mainPaths.BASE} element={<Navigate to={mainPaths.MODULE} replace />} />
				<Route path={mainPaths.MODULE} element={<MainPage />} />
				<Route path={mainPaths.MODULE} element={<Sidebar/>} />

				<Route path="*" element={<Navigate to="/404" replace state={{ from: location.pathname }} />} />
			</Route>
		</Routes>
	);
}

export default SuperAdminRoutes;
