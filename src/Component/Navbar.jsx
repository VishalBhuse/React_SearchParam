import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Flex width={"50%"} m="auto">
        <Box p="4" fontSize={'20px'} fontWeight={'600'}  m="3" bg="red.400">
          <Link to="/">Home</Link>
        </Box>
        <Spacer />
        <Box p="4" fontSize={'20px'} fontWeight={'600'}  m="3" bg="green.400">
          <Link to="/products">Products</Link>
        </Box>
        <Spacer />
        <Box p="4" fontSize={'20px'} fontWeight={'600'}  m="3" bg="green.400">
          <Link to="/product">Product</Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;