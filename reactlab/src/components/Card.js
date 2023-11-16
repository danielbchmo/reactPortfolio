import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack align="start" spacing={2} mt={4}>
        <Heading color="black" as="h2" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack justify="space-between" mt={4}>
        <Text color="blue.500" fontWeight="bold">
          Learn More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </Box>
  );
};

export default Card;
