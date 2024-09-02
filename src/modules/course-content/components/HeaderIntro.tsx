import { Box } from "@chakra-ui/react";

interface props {
  headerText: string;
  intro?: JSX.Element;
}

function HeaderIntro({ headerText, intro }: props) {
  return (
    <Box>
      <Box
        height="75vh"
        px="10vw"
        position="relative"
        color="brand.white"
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
          {headerText}
        </Box>
      </Box>
      {intro && (
        <Box bgColor="brand.white" h="100%" w="100%" py="130px" px="16px">
          {intro}
        </Box>
      )}
    </Box>
  );
}

export default HeaderIntro;
