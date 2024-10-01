import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
} from '@chakra-ui/react';
import SidebarBody from './SidebarBody';
import Header from './Header';

interface ISideNavBar {
	isOpen: boolean;
	onClose: () => void;
}

const SideBarNav = ({ isOpen, onClose }: ISideNavBar) => {
	return (
		<Drawer isOpen={isOpen} placement="left" onClose={onClose} size={'full'}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton color={'white'} />
				<DrawerHeader m={0} p={0}>
					<Header />
				</DrawerHeader>

				<DrawerBody m={0} p={0}>
					<SidebarBody onClose={onClose} />
				</DrawerBody>

				<DrawerFooter></DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default SideBarNav;
