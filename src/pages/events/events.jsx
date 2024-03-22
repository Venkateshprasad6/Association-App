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
import { usePostEventsMutation } from "../../services/eventsAPI";
import ImageUpload from "../../components/imageupload";

const Events = () => {
  const [PostEvents] = usePostEventsMutation();
  const [fileToSend, setFileToSend] = useState([]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    for (let i = 0; i < fileToSend.length; i++) {
      let file = fileToSend.item(i);
      formData.append("file", file);
    }

    formData.append("title", data.title);
    formData.append("description", data.description);

    PostEvents(formData);
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

  return (
    <>
      <Box bg="white" p={3} mb={5} style={{ borderRadius: "10px" }}>
        <Flex alignItems="center" gap={2}>
          <Link>
            <ArrowBackIcon w={6} h={6} />
          </Link>

          <Heading as="h3" size="lg" color="gray.600">
            Event Gallery
          </Heading>

          <Spacer />

          <Link to="/add_district">
            <Button colorScheme="blue">
              <AddIcon w={4} h={4} pr={2} />
              Create Gallery
            </Button>
          </Link>
        </Flex>
      </Box>

      <Box bg="white" p={3} mb={5} style={{ borderRadius: "10px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name_of_the_event}>
            <FormLabel> Name of the Event</FormLabel>
            <Input
              type="text"
              placeholder="Name of the Event"
              {...register("name_of_the_event", {
                required: "Please Enter Name of the Event",
              })}
            />
            <FormErrorMessage>
              {errors.name_of_the_event && errors.name_of_the_event.message}
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
                  type="multiple"
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

export default Events;
