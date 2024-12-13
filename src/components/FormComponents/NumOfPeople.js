import React from "react";

import { Field } from "formik";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

function NumOfPeople({errors, touched}) {
  return (
    <div>
      <FormControl isInvalid={errors.people && touched.people} mb={1}>
        <FormLabel htmlFor="people">Number of People*</FormLabel>
        <Field
          as={Input}
          id="people"
          name="people"
          type="number"
          placeholder="Max; 12 peoples"
          borderWidth="1.5px"
          bg="white"
          borderColor={
            errors.people && touched.people
              ? "red.500"
              : touched.people
              ? "#2ecc71" // Valid state
              : "black.400" // Default border color
          }
          _hover={{
            borderColor: "black.400",
          }}
        />
        <FormErrorMessage fontWeight={"bold"}>
          {errors.people}
        </FormErrorMessage>
      </FormControl>
    </div>
  );
}

export default NumOfPeople;
