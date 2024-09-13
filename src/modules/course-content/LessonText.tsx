import { Box } from "@chakra-ui/react";
// import lessonBackground from "../../assets/lessonBackground.jpg";
// import HeaderIntro from "./components/HeaderIntro";

interface prop {
  lesson: LessonContent;
}

function LessonText({
  lesson,
}: //   ...lesson
prop) {
  let count = lesson.intro ? 2 : 1;
  return (
    <Box>
      {/* <HeaderIntro headerName={lesson.header.name} intro={lesson.intro} /> */}
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
            position="relative"
          >
            <Box
              as="h2"
              fontSize="xx-large"
              fontWeight="bold"
              py="20px"
              lineHeight="40px"
            >
              {subHeading.name}
            </Box>
            <Box className="subHeading">{subHeading.content}</Box>
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
