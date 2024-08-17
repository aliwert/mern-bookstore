import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useBookStore } from "../store/book";
import { useToast } from "@chakra-ui/react";

const Create = () => {
  const [newBook, setNewBook] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const { createBook } = useBookStore();
  const handleAddBook = async () => {
    const { error, message } = await createBook(newBook);
    if (!error) {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={7}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={7}>
          Create A New Book
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.700")}
          p={5}
          rounded={"lg"}
        >
          <VStack spacing={3}>
            <Input
              placeholder="Book Name"
              name="name"
              value={newBook.name}
              onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
            />
            <Input
              placeholder="Book Price"
              name="price"
              type="number"
              value={newBook.price}
              onChange={(e) =>
                setNewBook({ ...newBook, price: e.target.value })
              }
            />
            <Input
              placeholder="Book Image Url"
              name="image"
              image
              value={newBook.image}
              onChange={(e) =>
                setNewBook({ ...newBook, image: e.target.value })
              }
            />
            <Button colorScheme="blue" onClick={handleAddBook} w={"full"}>
              Add Book
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Create;
