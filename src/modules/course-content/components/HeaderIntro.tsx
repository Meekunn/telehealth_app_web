import { Box, Image, VStack } from "@chakra-ui/react";
import { images } from "../../../resuables/utilities/imageImporter";
interface props {
  text?: boolean;
  quiz?: boolean;
  headerName: string;
  headerId: string;
  intro?: {
    image?: string;
    texts: {
      [children: string]: {
        type: string;
        content: string;
      };
    };
  };
}

function HeaderIntro({
  text = false,
  quiz = false,
  headerName,
  headerId,
  intro,
}: props) {
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
          w="80%"
          position="absolute"
          top="50%"
          translateY="-50%"
          fontSize="32px"
          fontWeight="bolder"
          lineHeight="40px"
        >
          {headerId}.0
          {"  "}
          {quiz ? "Quiz" : headerName}
        </Box>
      </Box>
      {text && intro && (
        <Box bgColor="brand.white" h="100%" w="100%" py="130px" px="16px">
          <VStack>
            {intro.image && (
              <Box mb="20px">
                <Image
                  src={images[intro.image]}
                  alt={intro.image.split(".")[0]}
                />
              </Box>
            )}
            <Box py="20px">
              {Object.entries(intro.texts).map(([key, textData]) => {
                const { type, content } = textData;
                return (
                  <Box
                    as={type as keyof JSX.IntrinsicElements}
                    key={key}
                    my="16px"
                  >
                    {content}
                  </Box>
                );
              })}
            </Box>
          </VStack>
        </Box>
      )}
    </Box>
  );
}

export default HeaderIntro;
