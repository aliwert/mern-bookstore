import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { TiPlusOutline } from "react-icons/ti";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          bgGradient="linear(to-r, teal.500, cyan.600, purple.500)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          <Link to={"/"}>BookStore 📚</Link>
        </Text>

        <HStack spacing={3} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <TiPlusOutline fontSize={"24px"} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMdMoon /> : <FaSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
