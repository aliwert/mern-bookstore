import { Button, useColorMode } from "@chakra-ui/react";
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
          bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          <Link to={"/"}>
            Welcome To BookStore <span>📚</span>
          </Link>
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
