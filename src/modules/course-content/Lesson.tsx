// import React from "react";
import LessonText from './LessonText';
import { Box } from '@chakra-ui/react';
import LessonVideo from './LessonVideo';
import LessonQuiz from './LessonQuiz';
import { images } from '../../resuables/utilities/imageImporter';
import HeaderIntro from './components/HeaderIntro';

interface props {
	video?: boolean;
	text?: boolean;
	quiz?: boolean;
	lesson: LessonContent;
}

function Lesson({ video = false, text = false, quiz = false, lesson }: props) {
	// demo lesson content data for props testing
	// console.log(images[lesson.header.image]);
	return (
		<>
			{video ? (
				<LessonVideo video={lesson.video} title={lesson.header.name} />
			) : (
				<Box
					width="100%"
					height="100%"
					backgroundImage={`url(${images[lesson.header.image]})`}
					backgroundAttachment="fixed"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				>
					<HeaderIntro headerName={lesson.header.name} headerId={lesson.header.id} intro={lesson.intro} text={text} quiz={quiz} />

					{text && <LessonText lesson={lesson} />}
					{quiz && <LessonQuiz phishingEmail={lesson.email} intro={lesson.intro} quizzes={lesson.quizzes} />}
				</Box>
			)}
		</>
	);
}

export default Lesson;
