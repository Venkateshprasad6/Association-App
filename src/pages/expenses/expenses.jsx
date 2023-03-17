import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ArrowBackIcon, AddIcon } from "@chakra-ui/icons";
import { usePostExpensesMutation } from "../../services/expensesAPI";
import ImageUpload from "../../components/imageupload";

const Expenses = () => {
  const [PostExpenses] = usePostExpensesMutation();
  const [fileToSend, setFileToSend] = useState([]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", fileToSend);
    PostExpenses(formData);
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  console.log(errors);

  return (
    <>
      <Box bg="white" p={3} mb={5} style={{ borderRadius: "10px" }}>
        <Flex alignItems="center" gap={2}>
          <Link to="/practice_list">
            <ArrowBackIcon w={6} h={6} />
          </Link>

          <Heading as="h3" size="lg" color="gray.600">
            Expenses
          </Heading>

          <Spacer />

          <Link to="/add_district">
            <Button colorScheme="blue">
              <AddIcon w={4} h={4} pr={2} />
              Create Expenses
            </Button>
          </Link>
        </Flex>
      </Box>

      <Box bg="white" p={3} mb={5} style={{ borderRadius: "10px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.title}>
            <FormLabel> Title</FormLabel>
            <Input
              type="text"
              placeholder="title"
              {...register("title", {
                required: "Please Enter Title",
              })}
            />
            <FormErrorMessage>
              {errors.title && errors.title.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.description}>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              placeholder="description"
              {...register("description", {
                required: "Please Enter Description",
              })}
            />
            <FormErrorMessage>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>
          <br />

          <div className="form-group multi-preview">
            <div className="row">
              <FormControl isInvalid={errors.file}>
                <FormLabel>Choose Image</FormLabel>

                <ImageUpload
                  fileToSend={fileToSend}
                  setFileToSend={setFileToSend}
                  fieldName="file"
                  register={register}
                  clearErrors={clearErrors}
                  setError={setError}
                ></ImageUpload>

                <FormErrorMessage>
                  {errors.file && errors.file.message}
                </FormErrorMessage>
              </FormControl>
            </div>
          </div>

          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Expenses;
