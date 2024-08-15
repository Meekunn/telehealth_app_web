import React from "react";
import LessonText from "./LessonText";
import { Box } from "@chakra-ui/react";
// const IntroComponent = React.lazy(() => import("./components/Intro"));

// const ContentComponent = React.lazy(
//   () => import("./components/SubHeadingContent")
// );

function Lesson() {
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
      <LessonText lesson={lessonContent[3]} />
    </Box>
  );
}

export default Lesson;
