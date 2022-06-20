import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

type tGreetingProps = {
  found?: boolean;
  analyzed?: boolean;
};

const WaitForAnalyse = () => {
  return (
    <Box>
      <Heading size={"md"}>ЗНАЙШЛИ ТОВАР?</Heading>
      <Text>Ми готові проаналізувати відгуки</Text>
    </Box>
  );
};

const AnalyseReady = () => {
  return (
    <Box>
      <Heading size={"md"}>АНАЛІЗ ГОТОВИЙ!</Heading>
      <Text>Зведений відгук вже чекає на вас</Text>
    </Box>
  );
};

const NonProductPage = () => {
  return (
    <Box>
      <Heading size={"md"}>ЗНАЙШЛИ ТОВАР?</Heading>
      <Text>Ми проаналізуємо відгуки про нього</Text>
    </Box>
  );
};

export const Greeting: React.FC<tGreetingProps> = ({ found, analyzed }) => {
  return (
    <HStack
      minH="60px"
      m={2}
      px={6}
      py={2}
      shadow={"md"}
      borderWidth="1px"
      borderRadius="lg"
    >
      <Text fontSize={"40px"} mr={2}>
        {found ? "🤩" : analyzed ? "🥳" : "👀"}
      </Text>
      {analyzed ? (
        <AnalyseReady />
      ) : found ? (
        <WaitForAnalyse />
      ) : (
        <NonProductPage />
      )}
    </HStack>
  );
};
