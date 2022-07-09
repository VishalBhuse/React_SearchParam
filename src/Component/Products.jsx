import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Stack,
  Center,
  Input,
} from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const [prod, setprod] = useState([]);
  const [searchparam, setsearchparam] = useSearchParams();
  const [page, setpage] = useState( Number(searchparam.get("page")) || 1);
  const [text, settext] = useState( searchparam.get('q') || '');

  useEffect(() => {
    setsearchparam({
      page,
      q:text
    })
    fetch(`http://localhost:8080/products?_page=${page}&_limit=1`)
      .then((res) => res.json())
      .then((res) => {
        setprod(res);
      });
  }, [page,text]);

  return (
    <div>
      <Box
      width={'50%'}
      margin={'auto'}
      >
      <Input placeholder='small size' size='sm' 
      value={text}
      onChange={(e)=>settext(e.target.value)}
      />
      </Box>
      <Box
        height={"480px"}
        backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0G1xOkCeeIi25BqEU6LK0h8NxKlNrQeMrA&usqp=CAU')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"100% 100%"}
      >

        <TableContainer
          width={"50%"}
          m="auto"
          mt={"50px"}
          border={"2px solid green"}
          fontSize={"20px"}
        >
          <Table variant="striped" colorScheme="orange">
            <Thead>
              <Tr>
                <Th fontSize={"20px"}>Index</Th>
                <Th fontSize={"20px"}>Name</Th>
                <Th fontSize={"20px"}>Prices</Th>
                <Th fontSize={"20px"}>Link</Th>
              </Tr>
            </Thead>
            <Tbody>
              {prod.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.id + 1}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.price}</Td>
                    <Td>
                      <Link
                        to={"/product/" + item.id}
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        More Details
                      </Link>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>

        <Center mt={"20px"}>
          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="teal"
              disabled={page == 1}
              onClick={() => setpage(1)}
            >
              Prev
            </Button>
            <Button
              disabled={page == 4}
              colorScheme="teal"
              onClick={() => setpage(page=>page+1)}
            >
              Next
            </Button>
          </Stack>
        </Center>
      </Box>
    </div>
  );
};

export default Products;
