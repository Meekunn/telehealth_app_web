import { Box, Spinner } from '@chakra-ui/react';
// import lesson1 from "../../assets/lessonVideos/costarica.mp4";
import ReactPlayer from 'react-player/lazy';

interface Props {
	title: string;
	video?: LessonContent['video'];
}
function LessonVideo({ video }: Props) {
	return (
		<Box bg="#000" w="100%" h="90vh">
			<ReactPlayer
				controls
				playing
				width="100%"
				height="100%"
				fallback={<Spinner color="brand.primary" thickness="4px" speed="0.65s" emptyColor="#f0f0f0" size="xl" />}
				url={video?.file}
				//   config={{
				//       file: {
				//           forceVideo
				//       }
				//   }}
			/>
		</Box>
	);
}

export default LessonVideo;
