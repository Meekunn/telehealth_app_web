import { Box, IconButton, useDisclosure } from '@chakra-ui/react';
import { IoMenu } from 'react-icons/io5';
import SideBarNav from './SideBar';

type NavigationProps = {
	children: React.ReactNode;
};

const Navigation = ({ children }: NavigationProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box w="full" h="full">
			<SideBarNav isOpen={isOpen} onClose={onClose} />
			<Box w="full" h="full">
				{/* Add MainPage Header Here and remove IconButton */}
				<IconButton colorScheme="blue" aria-label="Toggle Sidebar" icon={<IoMenu />} onClick={onOpen} />

				{children}
			</Box>
		</Box>
	);
};

export default Navigation;
