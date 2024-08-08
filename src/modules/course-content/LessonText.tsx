import { Box } from "@chakra-ui/react";

function LessonText({
  lesson,
}: //   ...lesson
LessonTextContent) {
  return (
    <Box>
      <Box>
        <Box as="h1"></Box>
      </Box>
      {lesson.intro && <>{lesson.intro}</>}
      {Object.keys(lesson["subHeadings"]).map((key) => {
        const subHeading = lesson["subHeadings"][key];
        return (
          <Box key={key}>
            <Box as="h2">{subHeading.name}</Box>
            <>{subHeading.content}</>
          </Box>
        );
      })}
    </Box>
  );
}

export default LessonText;
