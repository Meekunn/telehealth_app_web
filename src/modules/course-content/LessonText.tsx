import { Box } from "@chakra-ui/react";
import lessonBackground from "../../assets/lessonBackground.jpg";
import HeaderIntro from "./components/HeaderIntro";

function LessonText({
  lesson,
}: //   ...lesson
LessonTextContent) {
  let count = lesson.intro ? 2 : 1;
  return (
    <Box
      width="100%"
      height="100%"
      backgroundImage={`url(${lessonBackground})`}
      backgroundAttachment="fixed"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <HeaderIntro headerText={lesson.name} intro={lesson.intro} />
      {/* {lesson.intro && (
        <Box bgColor="brand.white" h="100%" w="100%" py="130px" px="16px">
          {lesson.intro}
        </Box>
      )} */}
      {Object.keys(lesson["subHeadings"]).map((key) => {
        const subHeading = lesson["subHeadings"][key];

        const lessonSection = (
          <Box
            key={key}
            h="100%"
            w="100%"
            py="130px"
            px="16px"
            bgColor={count % 2 === 0 ? "#f0f0f0" : "brand.white"}
          >
            <Box as="h2">{subHeading.name}</Box>
            <>{subHeading.content}</>
          </Box>
        );
        count++;
        return (
          <>
            <Box h={subHeading.breakBefore ? "30vh" : "100%"}></Box>
            {lessonSection}
            <Box h={subHeading.breakAfter ? "30vh" : "100%"}></Box>
          </>
        );
      })}
    </Box>
  );
}

export default LessonText;
