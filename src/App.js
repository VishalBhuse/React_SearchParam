import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import Products from "./Component/Products";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="*"
          element={
            <>
              <Box
                bg="tomato"
                w="100%"
                p={4}
                color="white"
                height={"85vh"}
                display="grid"
                placeItems={"center"}
              >
                <Heading>404 | Page Not Found</Heading>
                <Text>
                  You just hit a route that doesn't exist... the sadness.😢
                </Text>
                <Link to="/">
                  <Button colorScheme="teal" size="lg">
                    🏠 Home
                  </Button>
                </Link>
              </Box>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
