import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">
          Event Tickets
        </Heading>
        <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid">
          My Tickets
        </Button>
      </Flex>
      <Box p={4} bg={useColorModeValue("gray.100", "gray.700")} borderRadius="lg" mb={6}>
        <Flex alignItems="center">
          <Input placeholder="Search events" mr={2} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" px={8}>
            Search
          </Button>
        </Flex>
      </Box>
      <Stack spacing={4}>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Stack>
    </Container>
  );
};

const events = [
  {
    name: "Concert of the Year",
    date: "2023-10-05",
    location: "Madison Square Garden, NY",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25jZXJ0fGVufDB8fHx8MTcxMzQ4ODkwM3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Tech Conference 2023",
    date: "2023-11-15",
    location: "Silicon Valley, CA",
    image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZXxlbnwwfHx8fDE3MTM0ODg5MDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Food Festival",
    date: "2023-09-20",
    location: "Central Park, NY",
    image: "https://images.unsplash.com/photo-1505426101273-b50e6f3ff9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmVzdGl2YWx8ZW58MHx8fHwxNzEzNDg4OTA0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const EventCard = ({ event }) => {
  return (
    <Flex bg={useColorModeValue("white", "gray.800")} p={4} borderRadius="lg" alignItems="center">
      <Image src={event.image} alt={event.name} boxSize="100px" borderRadius="full" mr={4} />
      <Box flex="1">
        <Heading as="h3" size="md">
          {event.name}
        </Heading>
        <Text>
          <FaCalendarAlt /> {event.date}
        </Text>
        <Text>
          <FaMapMarkerAlt /> {event.location}
        </Text>
      </Box>
      <Button leftIcon={<FaTicketAlt />} colorScheme="pink" variant="solid">
        Buy Tickets
      </Button>
    </Flex>
  );
};

export default Index;
