import React from "react";
import LessonText from "./LessonText";
import { Box } from "@chakra-ui/react";
import LessonVideo from "./LessonVideo";
import LessonQuiz from "./LessonQuiz";
// const IntroComponent = React.lazy(() => import("./components/Intro"));

// const ContentComponent = React.lazy(
//   () => import("./components/SubHeadingContent")
// );
interface props {
  video?: boolean;
  text?: boolean;
  quiz?: boolean;
}

function Lesson({ video = false, text = false, quiz = false }: props) {
  // demo lesson content data for props testing
  const lessonContent: LessonTextContent = {
    "3": {
      name: "Security Vulnerability and Exploits",
      intro: (
        <React.Suspense fallback={<div>Loading...</div>}>
          {/* <IntroComponent /> */}
          <Box></Box>
        </React.Suspense>
      ),
      subHeadings: {
        "1": {
          name: "Introduction",
          content: (
            <React.Suspense fallback={<div>Loading...</div>}>
              {/* <ContentComponent /> */}
              <Box></Box>
            </React.Suspense>
          ),
        },
        "2": {
          name: "Introduction",
          content: (
            <React.Suspense fallback={<div>Loading...</div>}>
              {/* <ContentComponent /> */}
              <Box></Box>
            </React.Suspense>
          ),
        },
      },
    },
  };
  return (
    <Box>
      {text && <LessonText lesson={lessonContent[3]} />}
      {video && <LessonVideo />}
      {quiz && <LessonQuiz />}
    </Box>
  );
}

export default Lesson;
