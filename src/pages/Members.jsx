import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

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
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { Select } from "chakra-react-select";

const states = [
  {
    value: "AL",
    label: "Alabama",
  },
  {
    value: "AK",
    label: "Alaska",
  },
  {
    value: "AZ",
    label: "Arizona",
  }
]


const Members = ({ values }) => {

  const [companyName, setCompanyName] = useState([])

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { company : {company:{name},id},...others } = data;
    console.log( id, name, others );
  };

  async function getCompany(){
    let api = await fetch('https://jsonplaceholder.typicode.com/users')
    let apijson = await api.json()
    setCompanyName(apijson)
  }

  useEffect(() => { 
    getCompany()
    },[]
  )

  return (
    <>
    <Box bg="white" p={3} mb={5} style={{ borderRadius: "10px" }}>
      <Flex alignItems='center' gap={2}>
        <Link to="/chit">
          <ArrowBackIcon w={6} h={6} />
        </Link>
        <Heading as="h3" size="lg" color="gray.600">
            MEM
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
              placeholder="Name"
              {...register("name", {
                required: "Enter Name",
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.date_of_birth}>
            <FormLabel color="gray.600"> Start Date</FormLabel>
            <Input
              type="date"
              {...register("date_of_birth", {
                required: "Enter Date Of Birth",
              })}
            />
            <FormErrorMessage>
              {errors.date_of_birth && errors.date_of_birth.message}
            </FormErrorMessage>
          </FormControl>    

          <FormControl isInvalid={errors.age}>
            <FormLabel color="gray.600"> Age </FormLabel>
            <Input
              type="number"
              placeholder="No.of Months"
              {...register("age", {
                required: "Please Enter Number of months",
              })}
            />
            <FormErrorMessage>
              {errors.age && errors.age.message}
            </FormErrorMessage>
          </FormControl>      

          <Controller
            control={control}
            name="member"
            rules={{
              required: "Please Enter Cliamed member.",
            }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error}>
                <FormLabel color="gray.600"> State </FormLabel>
                <Select
                  name={name}
                  ref={ref}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  onBlur={onBlur}
                  value={value}
                  options={states}
                  getOptionLabel={(e) => e.label}
                  getOptionValue={(e) => e.value}
                  placeholder="Select State"
                  closeMenuOnSelect={true}
                />
                <FormErrorMessage>
                  {error && error.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />


          <Controller
            control={control}
            name="company"
            rules={{
              required: "Select Company",
            }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error}>
                <FormLabel color="gray.600"> State </FormLabel>
                <Select
                  name={name}
                  ref={ref}
                  onChange={(e) => {
                    onChange(e);
                    // onChange({xxx:e.company.name,yyy:e.id,});
                  }}
                  onBlur={onBlur}
                  value={value}
                  options={companyName}
                  getOptionLabel={(e) => e.company.name}
                  getOptionValue={(e) => e.id}
                  placeholder="Select Company"
                  closeMenuOnSelect={true}
                />
                <FormErrorMessage>
                  {error && error.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />


          <Button type="submit" colorScheme="blue">
            Next
          </Button>
        </Stack>
      </Box>
    </form>
    </>
  );
};

export default Members;
