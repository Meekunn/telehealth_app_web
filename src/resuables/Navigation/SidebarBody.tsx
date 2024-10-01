import { Stack } from '@chakra-ui/react';
import { useState } from 'react';
import SidebarItems from './SidebarItems';
import items from './sidebarContent';
interface ISidebarBody {
	onClose: () => void;
}

function SidebarBody({ onClose }: ISidebarBody) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<Stack w="full" h="full">
			{items.map((item, index) => (
				<SidebarItems
					key={index}
					items={item.items}
					progress={item.progress}
					title={item.title}
					isOpen={openIndex === index}
					onToggle={() => handleToggle(index)}
					onClose={onClose}
				/>
			))}
		</Stack>
	);
}

export default SidebarBody;
