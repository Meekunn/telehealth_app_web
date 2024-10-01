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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

interface LessonQuizProps {
  quizzes: Record<string, any>;
  intro: string;
}

function LessonQuiz({ quizzes, intro }: LessonQuizProps) {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [grade, setGrade] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>("");

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
              Object.entries(currentQuiz.options).map(
                ([key, option]: [string, any]) => {
                  const isChecked = selectedAnswers.includes(key);
                  return (
                    <Box
                      key={key}
                      w="100%"
                      borderWidth="1px"
                      borderRadius="md"
                      p={4}
                      bgColor={isChecked ? "cyan.500" : "brand.white"}
                      color={isChecked ? "brand.white" : "initial"}
                      borderColor={isChecked ? "cyan.500" : "gray.200"}
                      _hover={{ cursor: "pointer" }}
                    >
                      {currentQuiz.type === "multiple-choice" ? (
                        <Radio
                          value={key}
                          userSelect="none"
                          colorScheme="brand.white"
                          isChecked={isChecked}
                          onChange={() => handleOptionChange(quizKey, key)}
                        >
                          {option.text}
                        </Radio>
                      ) : (
                        <Checkbox
                          colorScheme="brand.white"
                          isChecked={isChecked}
                          onChange={() => handleOptionChange(quizKey, key)}
                        >
                          {option.text}
                        </Checkbox>
                      )}
                    </Box>
                  );
                }
              )}
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
          >
            <Select
              value={answers[quizKey] || ""}
              onChange={(e) =>
                setAnswers({ ...answers, [quizKey]: e.target.value })
              }
              variant="unstyled"
            >
              <option defaultChecked value="" disabled>
                Select an option
              </option>
              {currentQuiz.answerField?.options?.map((option: string) => (
                <option key={option} value={option}>
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
          >
            <Input
              placeholder="Type your answer"
              value={(answers[quizKey] as string) || ""}
              onChange={(e) => handleTextChange(quizKey, e.target.value)}
            />
          </Box>
        );
      default:
        return null;
    }
  };

  const allQuestionsAnswered = () => {
    return Object.keys(quizzes).every((quizKey) => {
      return answers[quizKey] && answers[quizKey].length > 0;
    });
  };

  const calculateGrade = () => {
    let totalQuestions = 0;
    let correctAnswers = 0;

    Object.keys(quizzes).forEach((quizKey) => {
      const currentQuiz = quizzes[quizKey];
      const userAnswers = answers[quizKey];
      const correct = currentQuiz.correctAnswers;

      // For multiple-choice and select-multiple, check if answers are arrays
      if (
        currentQuiz.type === "multiple-choice" ||
        currentQuiz.type === "select-multiple"
      ) {
        totalQuestions += 1;

        if (Array.isArray(userAnswers) && Array.isArray(correct)) {
          // Sort and compare if both are arrays
          if (
            JSON.stringify(userAnswers.sort()) ===
            JSON.stringify(correct.sort())
          ) {
            correctAnswers += 1;
          }
        } else if (
          typeof userAnswers === "string" &&
          typeof correct[0] === "string"
        ) {
          // Compare directly if both are strings
          if (userAnswers === correct[0]) {
            correctAnswers += 1;
          }
        }
      } else if (
        currentQuiz.type === "fill-in-the-blank" ||
        currentQuiz.type === "dropdown"
      ) {
        totalQuestions += 1;
        // Compare directly for fill-in-the-blank or dropdown questions
        if (typeof userAnswers === "string" && userAnswers === correct[0]) {
          correctAnswers += 1;
        }
      }
    });

    // Calculate grade percentage
    const percentage = (correctAnswers / totalQuestions) * 100;
    setGrade(percentage);
  };

  const handleSubmit = () => {
    if (!allQuestionsAnswered()) {
      setError("Please answer all questions before submitting.");
      return;
    }

    setError("");
    calculateGrade();
    setIsSubmitted(true);
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
            >
              {`Question ${index + 1}`}
            </Text>
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

      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}

      {isSubmitted && grade !== null && (
        <Box py="32px" px="16px">
          <Alert status="success">
            <AlertIcon />
            You scored: {grade.toFixed(2)}%
          </Alert>
        </Box>
      )}

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
            isDisabled={!allQuestionsAnswered()}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LessonQuiz;
