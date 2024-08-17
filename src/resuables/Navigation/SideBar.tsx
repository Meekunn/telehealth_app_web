import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
} from '@chakra-ui/react';
import Sidebar from '../sidebar/sidebar';

interface ISideNavBar {
	isOpen: boolean;
	onClose: () => void;
}

const SideBarNav = ({ isOpen, onClose }: ISideNavBar) => {
	return (
		<Drawer isOpen={isOpen} placement="left" onClose={onClose} size={'full'}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>
					{/* Adding the side bar */}
				<Sidebar/>  
				</DrawerHeader>

				<DrawerBody></DrawerBody>

				<DrawerFooter></DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default SideBarNav;
