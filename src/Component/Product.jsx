import {
  Box,
  Button,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [showp, setshowp] = useState([]);

  const getdata = async () => {
    let res = await fetch("http://localhost:8080/products");
    let data = await res.json();
    setshowp(data[id]);
    console.log(data[id]);
  };

  useEffect(() => {
    getdata();
  }, [id]);

  return (
    <div>
      <>
        <VStack
          m="30px"
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          fontSize="20px"
          fontWeight={"600"}
          align="center"
        >
          <Box w={"300px"} p="20px" bg="yellow.200">
            <h2>Product ID: {showp.id + 1}</h2>
          </Box>
          <Box w={"300px"} p="20px" bg="tomato">
            <h2>Product Name: {showp.name}</h2>
          </Box>
          <Box w={"300px"} p="20px" bg="pink.100">
            <h2>Product Prices: {showp.price}</h2>
          </Box>
          <Link to="/">
            <Button colorScheme="teal" size="lg">
              🏠 Home
            </Button>
          </Link>
        </VStack>
      </>
    </div>
  );
};

export default Product;
