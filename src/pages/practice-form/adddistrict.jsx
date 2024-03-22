import  React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {addDistricts} from "../../features/practiceSlice";      

import {
  Box,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Link,
  Flex,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const AddDistricts = () => {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        dispatch(addDistricts(data));
    };

    return (
        <>
        <Box bg="white" p={3} mb={5} style={{ borderRadius: "10px" }}>
        <Flex alignItems='center' gap={2}>
            <Link to="/chit">
            <ArrowBackIcon w={6} h={6} />
            </Link>
            <Heading as="h3" size="lg" color="gray.600">
             Add Participants
            </Heading>
        </Flex>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={4} color="black" bg="white" style={{ borderRadius: "10px" }}>
            <Stack spacing={4}>

            <FormControl isInvalid={errors.name}>
                <FormLabel color="gray.600"> Name </FormLabel>
                <Input
                type="text"
                placeholder="name"
                {...register("name", {
                    required: "Enter name",
                })}
                />
                <FormErrorMessage>
                {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl> 

            <FormControl isInvalid={errors.address}>
                <FormLabel color="gray.600"> Address </FormLabel>
                <Textarea
                type="text"
                placeholder="Address"
                {...register("address", {
                    required: "Enter Address",
                })}
                />
                <FormErrorMessage>
                {errors.address && errors.address.message}
                </FormErrorMessage>
            </FormControl>   

            <Button type="submit" colorScheme="blue">
                Next
            </Button>
            </Stack>
        </Box>
        </form>

        </>
    );
};

export default AddDistricts;
