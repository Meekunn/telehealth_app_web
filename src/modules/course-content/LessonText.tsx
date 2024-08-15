import { Box } from "@chakra-ui/react";
import lessonBackground from "../../assets/lessonBackground.jpg";

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
      <Box
        height="90vh"
        px="10vw"
        position="relative"
        color="#fff"
        background="rgba(0,0,0,0.2)"
      >
        <Box
          as="h1"
          position="absolute"
          top="50%"
          translateY="-50%"
          fontSize="32px"
          fontWeight="400"
        >
          hhhhhhhhhhhhhhhdhhhhhhhhhhhh dd
        </Box>
      </Box>
      {lesson.intro && (
        <Box backgroundColor="#fff" h="100%" w="100%" py="130px" px="16px">
          {lesson.intro}
        </Box>
      )}
      {Object.keys(lesson["subHeadings"]).map((key) => {
        const subHeading = lesson["subHeadings"][key];

        const lessonSection = (
          <Box
            key={key}
            bgColor={count % 2 === 0 ? "rgb(240,240,240)" : "#fff"}
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
