import { Box, Flex, Heading, Image, Divider, HStack } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';


const Header: React.FC = () => {
  // Manage the active state for course outline and resources
  const [active, setActive] = useState<'courseOutline' | 'resources'>('courseOutline');
  const navigate = useNavigate();
  return (
    <Box>
      {/* Header Section */}
      <Box bg="green.300" py={4} px={2}>
        <Flex align="center">
          <FaArrowLeft 
          color='white'
          cursor="pointer"  // Change cursor to pointer to indicate clickable
          onClick={() => navigate(-1)}  // Navigate back
          />
          <Heading as="h4" color="white" fontWeight="400" fontFamily="Arial" ml={4} fontSize={['md', 'lg', 'xl']}>
            Introduction to Cybersecurity
          </Heading>
        </Flex>
      </Box>

      {/* Course Outline and Resources Section */}
      <Flex bg="#48BB78" alignItems="center" py={0}>
      {/* Course Outline button */}
      <Box textAlign="center" width="100%">
        <Box
          as="button"
          onClick={() => setActive('courseOutline')}
          display="block"
          width="100%"
        >
          <Flex gap="2" justifyContent="left" alignItems="center" width="100%" py="4" px="10">
            <FaBook color='white'/>
            <Heading
              as="h4"
              color="white"
              fontWeight="400"
              fontFamily="Arial"
              fontSize={['md', 'lg', 'xl']}
            >
              Course Outline
            </Heading>
          </Flex>
        </Box>
        {/* Render the green bar under the box */}
        {active === 'courseOutline' && (
          <Box bg="green.300" height="4px" mt={2} width="100%" borderRadius="md" />
        )}
      </Box>
    </Flex>
    </Box>
  );
};

export default Header;
