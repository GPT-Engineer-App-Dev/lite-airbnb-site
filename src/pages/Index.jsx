import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaUserCircle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="white" p={4} boxShadow="md" justifyContent="space-between" alignItems="center">
        <Image src="/logo.png" alt="Logo" boxSize="50px" />
        <HStack spacing={8}>
          <Text cursor="pointer">Home</Text>
          <Text cursor="pointer">Explore</Text>
          <Text cursor="pointer">Become a Host</Text>
          <Text cursor="pointer">Help</Text>
        </HStack>
        <IconButton aria-label="User Profile" icon={<FaUserCircle />} size="lg" variant="ghost" />
      </Flex>

      {/* Hero Section */}
      <Box position="relative" height="60vh" bgImage="url('/hero.jpg')" bgSize="cover" bgPosition="center">
        <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="blackAlpha.600" display="flex" justifyContent="center" alignItems="center">
          <VStack spacing={4} color="white">
            <Heading as="h1" size="2xl">Find Your Next Stay</Heading>
            <InputGroup maxW="600px">
              <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
              <Input type="text" placeholder="Search for location" bg="white" color="black" />
            </InputGroup>
          </VStack>
        </Box>
      </Box>

      {/* Featured Listings */}
      <Container maxW="container.xl" py={8}>
        <Heading as="h2" size="xl" mb={6}>Featured Listings</Heading>
        <Flex wrap="wrap" spacing={4} justifyContent="space-between">
          {[1, 2, 3, 4].map((item) => (
            <Box key={item} width="45%" mb={8} boxShadow="md" borderRadius="md" overflow="hidden">
              <Image src={`/listing${item}.jpg`} alt={`Listing ${item}`} />
              <Box p={4}>
                <Heading as="h3" size="md">Beautiful Apartment {item}</Heading>
                <Text mt={2}>$100/night</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={8}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" wrap="wrap">
            <VStack align="start" spacing={2}>
              <Text cursor="pointer">About</Text>
              <Text cursor="pointer">Careers</Text>
              <Text cursor="pointer">Privacy</Text>
              <Text cursor="pointer">Terms</Text>
            </VStack>
            <HStack spacing={4}>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} variant="ghost" color="white" />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} variant="ghost" color="white" />
              <IconButton aria-label="Instagram" icon={<FaInstagram />} variant="ghost" color="white" />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;