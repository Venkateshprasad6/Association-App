import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {usePostPracticeMutation} from "../../services/practiceformAPI";

import {
  Box,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Flex,
  Heading,
  Checkbox,
  RadioGroup,
  Radio,
  Spacer
} from "@chakra-ui/react";
import { ArrowBackIcon, AddIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select"

const states = [
  {
    value:"Andaman and Nicobar Islands",
    label:"35"
 },

 {
  value:"Andhra Pradesh",
  label:"28"
},
{
  value:"Andhra Pradesh (New)",
  label:"37"
},
{
  value:"Arunachal Pradesh",
  label:"12"
},
{
  value:"Assam",
  label:"18"
},
{
  value:"Bihar",
  label:"10"
},
{
  value:"Chandigarh",
  label:"04"
},
{
  value:"Chattisgarh",
  label:"22"
},
{
  value:"Dadra and Nagar Haveli",
  label:"26"
},
{
  value:"Daman and Diu",
  label:"25"
},
{
  value:"Delhi",
  label:"07"
},
{
  value:"Goa",
  label:"30"
},
{
  value:"Gujarat",
  label:"24"
},
{
  value:"Haryana",
  label:"06"
},
{
  value:"Himachal Pradesh",
  label:"02"
},
{
  value:"Jammu and Kashmir",
  label:"01"
},
{
  value:"Jharkhand",
  label:"20"
},
{
  value:"Karnataka",
  label:"29"
},
{
  value:"Kerala",
  label:"32"
},
{
  value:"Lakshadweep Islands",
  label:"31"
},
{
  value:"Madhya Pradesh",
  label:"23"
},
{
  value:"Maharashtra",
  label:"27"
},
{
  value:"Manipur",
  label:"14"
},
{
  value:"Meghalaya",
  label:"17"
},
{
  value:"Mizoram",
  label:"15"
},
{
  value:"Nagaland",
  label:"13"
},
{
  value:"Odisha",
  label:"21"
},
{
  value:"Pondicherry",
  label:"34"
},
{
  value:"Punjab",
  label:"03"
},
{
  value:"Rajasthan",
  label:"08"
},
{
  value:"Sikkim",
  label:"11"
},
{
  value:"Tamil Nadu",
  label:"33"
},
{
  value:"Telangana",
  label:"36"
},
{
  value:"Tripura",
  label:"16"
},
{
  value:"Uttar Pradesh",
  label:"09"
},
{
  value:"Uttarakhand",
  label:"05"
},
{
  value:"West Bengal",
  label:"19"
}
]

const PracticeForm = () => {
  const { districts, cities } = useSelector((state) => state.practice);
  const [companyName, setCompanyName] = useState([]);
  const [PostPracticeform] = usePostPracticeMutation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    const { company : {company:{name},id} } = data;
    console.log( id, name );
    
    PostPracticeform ({
      name: data.name,
      company:name,
      city: data.city.label,
      district: data.district.label,
      state: data.state.label,
      date_of_birth: data.date_of_birth,
      age: Number( data.age),
      language: data.language[0],
      gender: data.gender,
    }).unwrap();
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
        <Link to="/practice_list">
          <ArrowBackIcon w={6} h={6} />
        </Link>
        <Heading as="h3" size="lg" color="gray.600">
            MEM
        </Heading>


        <Spacer />

        <Link to="/add_district">
          <Button colorScheme="blue">
            <AddIcon w={4} h={4} pr={2} />
              Add Districts
          </Button>
        </Link>


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
            <FormLabel color="gray.600"> Date Of Birth </FormLabel>
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
              placeholder="Age"
              {...register("age", {
                required: "Please Enter Age",
              })}
            />
            <FormErrorMessage>
              {errors.age && errors.age.message}
            </FormErrorMessage>
          </FormControl>      

          <Controller
            control={control}
            name="state"
            rules={{
              required: "Please Select State.",
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
            name="district"
            rules={{
              required: "Please Select District.",
            }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error}>
                <FormLabel color="gray.600"> District </FormLabel>
                <Select
                  name={name}
                  ref={ref}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  onBlur={onBlur}
                  value={value}
                  options={districts}
                  getOptionLabel={(e) => e.label}
                  getOptionValue={(e) => e.value}
                  placeholder="Select District"
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
            name="city"
            rules={{
              required: "Please Select Cities.",
            }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error}>
                <FormLabel color="gray.600"> Cities </FormLabel>
                <Select
                  name={name}
                  ref={ref}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  onBlur={onBlur}
                  value={value}
                  options={cities}
                  getOptionLabel={(e) => e.label}
                  getOptionValue={(e) => e.value}
                  placeholder="Select Cities"
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
                <FormLabel color="gray.600"> Company </FormLabel>
                <Select
                  name={name}
                  ref={ref}
                  onChange={(e) => {
                    onChange(e);
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

          <FormControl isInvalid={errors.language}>
            <FormLabel color="gray.600"> Known languages </FormLabel>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              <Checkbox size='md' colorScheme='blue' value="tamil"
                {...register("language",{
                  required: "Please Select",
                })}
              >
                Tamil
              </Checkbox>
              <Checkbox size='md' colorScheme='blue' value="hindi"
                {...register("language",{
                  required: "Please Select",
                })}
              >
                Hindi
              </Checkbox>
              <Checkbox size='md' colorScheme='blue' value="english"
                {...register("language",{
                  required: "Please Select",
                })}
              >
                English
              </Checkbox>
            </Stack>
            <FormErrorMessage>
              {errors.language && errors.language.message}
            </FormErrorMessage>
          </FormControl> 

          <FormControl isInvalid={errors.gender}>
            <FormLabel color="gray.600"> Gender </FormLabel>
            <RadioGroup>
              <Stack direction='row'>
                <Radio value='male'  
                {...register("gender",{
                required: "Please Select",
              })}>Male</Radio>
                <Radio value='female'  
                {...register("gender",{
                required: "Please Select",
              })}>Female</Radio>
                <Radio value='other'  
                {...register("gender",{
                required: "Please Select",
              })}>Other</Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>
              {errors.gender && errors.gender.message}
            </FormErrorMessage>
          </FormControl>           

          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </Box>
    </form>
    </>
  );
};

export default PracticeForm;
