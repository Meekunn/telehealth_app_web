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
				<IconButton
					colorScheme="blue"
					aria-label="Toggle Sidebar"
					variant={'ghost'}
					color={'black'}
					fontSize="2rem"
					icon={<IoMenu />}
					onClick={onOpen}
					position="absolute"
					top={5}
					right={15}
					zIndex={'9999'}
					display={isOpen ? 'none' : 'flex'}
				/>

				{children}
			</Box>
		</Box>
	);
};

export default Navigation;
