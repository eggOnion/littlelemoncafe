import React from "react";

import { Field } from "formik";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

function Phone({ errors, touched }) {
  return (
    <div>
      <FormControl isInvalid={errors.phone && touched.phone} mb={8}>
        <FormLabel htmlFor="phone">Phone*</FormLabel>
        <Field
          as={Input}
          id="phone"
          name="phone"
          type="number"
          placeholder="Enter your number"
          borderWidth="1.5px"
          bg="white"
          borderColor={
            errors.phone && touched.phone
              ? "red.500"
              : touched.phone
              ? "#2ecc71" // Valid state
              : "black.400" // Default border color
          }
          _hover={{
            borderColor: "black.400",
          }}
        />
        <FormErrorMessage fontWeight={"bold"}>{errors.phone}</FormErrorMessage>
      </FormControl>
    </div>
  );
}

export default Phone;
