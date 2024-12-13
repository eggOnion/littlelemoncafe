import React from "react";

import { Field } from "formik";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

function Email({errors, touched}) {
  return (
    <div>
      <FormControl isInvalid={errors.email && touched.email} mb={8}>
        <FormLabel htmlFor="email">Email (optional)</FormLabel>
        <Field
          as={Input}
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          borderWidth="1.5px"
          bg="white"
          borderColor={
            errors.email && touched.email
              ? "red.500"
              : touched.email
              ? "#2ecc71" // Valid state
              : "black.400" // Default border color
          }
          _hover={{
            borderColor: "black.400",
          }}
        />
        <FormErrorMessage fontWeight={"bold"}>
          {errors.email}
        </FormErrorMessage>
      </FormControl>
    </div>
  );
}

export default Email;
