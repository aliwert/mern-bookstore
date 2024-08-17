import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useEffect } from "react";
import { useBookStore } from "../store/book";
const Home = () => {
  const { fetchBooks, books } = useBookStore();
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={7}>
        <Text
          fontSize={"4xl"}
          fontweight={"bold"}
          bgGradient={"linear(to-r, teal.500, cyan.600, purple.500)"}
          bgclip={"text"}
          textalign={"center"}
        >
          Welcome to Bookstore
        </Text>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </SimpleGrid>

        {books.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No books found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a book
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Home;
