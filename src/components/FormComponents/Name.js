import React from "react";

import { Field } from "formik";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

import "../../styles/booking.css";

function Name({ errors, touched }) {
  return (
    <div>
      <FormControl isInvalid={errors.name && touched.name} mb={8}>
        <FormLabel htmlFor="name">Name*</FormLabel>
        <Field          
          as={Input}
          id="name"
          name="name"
          type="name"
          placeholder="Enter your name"
          borderWidth="1.5px"
          bg="white"
          borderColor={
            errors.name && touched.name
              ? "red.500"
              : touched.name
              ? "#2ecc71" // Valid state
              : "black.400" // Default border color
          }
          _hover={{
            borderColor: "black.400",
          }}
        />
        <FormErrorMessage fontWeight={"bold"}>{errors.name}</FormErrorMessage>
      </FormControl>
    </div>
  );
}

export default Name;
