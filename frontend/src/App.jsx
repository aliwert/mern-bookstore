import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.300", "gray900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Box>
  );
}

export default App;
