import { useState } from "react";
import {
  Box,
  Text,
  VStack,
  Checkbox,
  Radio,
  Button,
  Select,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { mails } from "./components/utilities/mailImporter";

interface LessonQuizProps {
  quizzes: LessonTextContent[string]["quizzes"];
  intro: LessonTextContent[string]["intro"];
  phishingEmail?: LessonTextContent[string]["email"];
}

function LessonQuiz({ quizzes, intro, phishingEmail }: LessonQuizProps) {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  // Handle multiple-choice/select-multiple options
  const handleOptionChange = (quizKey: string, option: string) => {
    const currentQuiz = quizzes[quizKey];
    if (currentQuiz.type === "multiple-choice") {
      setAnswers((prev) => ({ ...prev, [quizKey]: [option] }));
    } else if (currentQuiz.type === "select-multiple") {
      setAnswers((prev) => {
        const currentAnswers = prev[quizKey] || [];
        const newAnswers = (currentAnswers as string[]).includes(option)
          ? (currentAnswers as string[]).filter((item) => item !== option)
          : [...(currentAnswers as string[]), option];
        return { ...prev, [quizKey]: newAnswers };
      });
    }
  };

  const handleTextChange = (quizKey: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [quizKey]: value }));
  };

  const renderOptions = (quizKey: string) => {
    const currentQuiz = quizzes[quizKey];
    const selectedAnswers = (answers[quizKey] as string[]) || [];

    switch (currentQuiz.type) {
      case "multiple-choice":
      case "select-multiple":
        return (
          <VStack align="start">
            {currentQuiz.options &&
              Object.entries(currentQuiz.options).map(([key, option]) => {
                const isChecked = selectedAnswers.includes(key);
                return (
                  <Box
                    key={key}
                    w="100%"
                    borderWidth="1px"
                    borderRadius="md"
                    p={4}
                    // bgColor={ ? }
                    bgColor={isChecked ? "cyan.500" : "brand.white"}
                    color={isChecked ? "brand.white" : "initial"}
                    borderColor={isChecked ? "cyan.500" : "gray.200"}
                    _hover={{ cursor: "pointer" }}
                  >
                    {currentQuiz.type === "multiple-choice" ? (
                      <Radio
                        value={key}
                        userSelect="none"
                        colorScheme="brand,white"
                        isChecked={isChecked}
                        onChange={() => handleOptionChange(quizKey, key)}
                      >
                        {option.text}
                      </Radio>
                    ) : (
                      <Checkbox
                        colorScheme="brand,white"
                        isChecked={isChecked}
                        onChange={() => handleOptionChange(quizKey, key)}
                      >
                        {option.text}
                      </Checkbox>
                    )}
                  </Box>
                );
              })}
          </VStack>
        );
      case "dropdown":
        return (
          <Box
            w="100%"
            borderWidth="1px"
            borderRadius="md"
            p={4}
            bgColor="brand.white"
            borderColor="gray.200"
            _hover={{ cursor: "pointer", borderColor: "cyan.500" }}
            // _focus={{ borderColor: "cyan.500" }}
          >
            <Select
              // placeholder="Select an option"
              value={answers[quizKey] || ""}
              onChange={(e) =>
                setAnswers({ ...answers, [quizKey]: e.target.value })
              }
              variant="unstyled"
              sx={{
                "& option:first-child": {
                  marginTop: "16px",
                },
                "& option:last-child": {
                  marginBottom: "16px",
                },
                "& option": {
                  // height
                  position: "relative",
                  padding: "16px",
                  background: "brand.white",
                  color: "black",
                },
                "& option:hover": {
                  color: "brand.white",
                  background: "cyan.500",
                },
                "& option:checked": {
                  background: "cyan:500",
                  color: "brand.white",
                },
              }}
            >
              <option defaultChecked value="" disabled>
                Select an option
              </option>
              {currentQuiz.answerField?.options?.map((option) => (
                <option
                  key={option}
                  value={option}
                  // style={{ pad }}
                  // _hover={{ cursor: "pointer" }}
                >
                  {option}
                </option>
              ))}
            </Select>
          </Box>
        );
      case "fill-in-the-blank":
        return (
          <Box
            w="100%"
            borderWidth="1px"
            borderRadius="md"
            p={4}
            bgColor="brand.white"
            borderColor="gray.200"
            _hover={{ borderColor: "cyan.500", cursor: "pointer" }}
          >
            <Input
              placeholder="Type your answer"
              value={(answers[quizKey] as string) || ""}
              onChange={(e) => handleTextChange(quizKey, e.target.value)}
              borderColor="transparent"
              _focusVisible={{ borderColor: "transparent" }}
            />
          </Box>
        );
      default:
        return null;
    }
  };

  const [message, setMessage] = useState("");

  const sendPhishingEmail = async () => {
    // e.preventDefault();
    if (phishingEmail) {
      try {
        const emailContent = mails[phishingEmail.body];
        const response = await axios.post(
          "http://localhost:3000/send-phishing-email",
          {
            recipient: phishingEmail.recipient,
            subject: phishingEmail.subject,
            body: emailContent,
          }
        );
        setMessage(response.data.message);
      } catch (error) {
        setMessage("Error sending email");
      }
    }
    console.log(message);
  };

  const handleSubmit = () => {
    console.log("Submitted answers:", answers);
    // Implement your submission logic here
    sendPhishingEmail();
  };
  return (
    <Box width="100%" height="100%">
      {Object.keys(quizzes).map((quizKey, index) => {
        const currentQuiz = quizzes[quizKey];
        return (
          <Box key={quizKey} py="130px" px="16px" bgColor="brand.white">
            <Text
              as="h3"
              pt="20px"
              pb="10px"
              lineHeight="40px"
              fontSize="xx-large"
              fontWeight="bold"
            >{`Question ${index + 1}`}</Text>
            <Text py="20px" mb={4}>
              {currentQuiz.question}
            </Text>
            {currentQuiz.instruction && (
              <Text fontSize="md" mb={4}>
                {currentQuiz.instruction}
              </Text>
            )}
            <FormControl>
              <FormLabel>{currentQuiz.question}</FormLabel>
              {renderOptions(quizKey)}
            </FormControl>
          </Box>
        );
      })}

      {/* Submit Button */}
      <Box py="64px" px="8px" bgColor="#f0f0f0">
        <Text textAlign="center" p="15px" w="80%" m="auto">
          Click "Submit" if you are happy with your answers above
        </Text>
        <Box w="80%" h="100%" m="auto">
          <Button
            w="100%"
            h="100%"
            py={5}
            color="brand.white"
            bg="green.400"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LessonQuiz;
