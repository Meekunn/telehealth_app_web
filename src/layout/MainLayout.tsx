import Navigation from '../resuables/Navigation';

const SuperAdminLayout = ({ children }: { children?: React.ReactNode }) => {

	return (
		<>
			
			<Navigation>{children}</Navigation>
		</>
	);
};

export default SuperAdminLayout;
