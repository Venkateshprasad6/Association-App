/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Heading,
    Flex,
    GridItem,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    HStack,
    Button,
    ButtonGroup,
    Spacer,
    Tooltip,
    useColorModeValue,
} from "@chakra-ui/react";

import { AddIcon,EditIcon } from "@chakra-ui/icons";

import {useGetPracticeQuery} from "../../services/practiceformAPI";


const PracticeList = () => {
    const navigate = useNavigate();

    const [practice, setPractice] = useState([]);
    const { data: practiceData, isLoading } = useGetPracticeQuery();

    useEffect(() => {
        if (!isLoading) {
        setPractice(practiceData);
        }
    }, [isLoading, practiceData, setPractice]);


  return (
    <>
        <Box  mb={5} borderWidth='1px' borderRadius='lg' p={3} bg={"white"} color={"black"}>
            <Flex alignItems='center' gap={2}>
                <Heading as="h3" size="lg" color={useColorModeValue("gray.600", "white.900")}>
                    Practice
                </Heading>
                <Spacer />
                <Button colorScheme="blue"  onClick={() => navigate("/create_practice")}>
                    <AddIcon w={4} h={4} pr={2} />
                    Create Member
                </Button>
            </Flex>
        </Box>

      <HStack spacing="24px">
        <GridItem w="100%">
          <TableContainer p={4} style={{ borderRadius: "10px" }} borderWidth='1px' borderRadius='lg' bg={useColorModeValue("white", "gray.900")}>
            <Table>
              <TableCaption>  Practice Data</TableCaption>
              <Thead>
                <Tr>
                  <Th> Name </Th>
                  <Th> DOB </Th>
                  <Th> age </Th>
                  <Th> Company Name </Th>
                  <Th> Action </Th>
                </Tr>
              </Thead>
              <Tbody>
                { practiceData && 
                    practice.map((data, index) => {
                        return (
                        <Tr key={index}>
                            <Td> {data.name} </Td>
                            <Td>
                                {data.date_of_birth}
                            </Td>
                            <Td> {data.age} </Td>
                            <Td> {data.company} </Td>
                            <Td>
                            <ButtonGroup >
                                <Tooltip label={"Edit"}>
                                <Button
                                    colorScheme="blue"
                                    onClick={() => navigate("/create_practice")}
                                >
                                    <EditIcon />
                                </Button>
                                </Tooltip>
                            </ButtonGroup>
                            </Td>
                        </Tr>
                        );
                    })}
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
      </HStack>
    </>
  );
};

export default PracticeList;
