import { Box, VStack, Text, Progress, IconButton, Flex, Heading, Icon, CircularProgress } from '@chakra-ui/react';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import { GoCheckCircleFill } from 'react-icons/go';
import { PiCaretCircleRightLight } from 'react-icons/pi';
import { ISidebarModule } from './sidebarContent';

interface ICourseModule extends ISidebarModule {
	isOpen: boolean;
	onToggle: () => void;
}

const SidebarItems = ({ title, progress, items, isOpen, onToggle }: ICourseModule) => {
	return (
		<Box
			bg={isOpen ? 'green.50' : 'transparent'}
			_hover={{ bg: 'green.50' }}
			py={4}
			px={4}
			borderBottomWidth="1px"
			borderColor="gray.100"
		>
			<VStack justifyContent="space-between" cursor="pointer">
				<Flex align={'center'} justify="space-between" w="full">
					<Heading as="h2" fontSize="lg" w={'80%'}>
						{title}
					</Heading>
					<IconButton
						icon={isOpen ? <RxCaretUp /> : <RxCaretDown />}
						aria-label="Toggle submenu"
						size="xl"
						variant="solid"
						bg={isOpen ? 'green.400' : 'transparent'}
						color={isOpen ? 'white' : 'green.400'}
						fontSize={'3xl'}
						onClick={onToggle}
					/>
				</Flex>
				<Flex w="full" justify="space-between" align="center">
					<Progress value={progress} size="xs" width="85%" colorScheme="green" borderRadius="10px" />
					<Text fontSize="sm">{progress}%</Text>
				</Flex>
			</VStack>
			{isOpen && (
				<VStack align="start" mt={4} bg={'transparent'} gap={4}>
					{items.map((item, index) => (
						<>
							<Flex
								key={index}
								align="center"
								gap={4}
								transition="0.25 all ease-in-out"
								_hover={{ bg: 'green.100', '& > p': { fontWeight: 'extrabold' } }}
								w="full"
								p={2}
								pl={6}
							>
								{item.progress === 0 ? (
									<Icon as={PiCaretCircleRightLight} color="green.400" w="23px" h="23px" />
								) : item.progress === 100 ? (
									<Icon as={GoCheckCircleFill} color="green.400" w="23px" h="23px" />
								) : (
									<CircularProgress value={item.progress} size="20px" color="green.400" thickness="10px" />
								)}
								<Text fontSize={'sm'}>{item.title}</Text>
							</Flex>
						</>
					))}
				</VStack>
			)}
		</Box>
	);
};

export default SidebarItems;
