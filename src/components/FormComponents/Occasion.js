import React from "react";

import { Field } from "formik";
import { Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

function Occasion({ errors, touched }) {
  return (    
    <div>
      <Field name="occasion">
        {({ field }) => (
          <FormControl isInvalid={errors.occasion && touched.occasion}>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select
              {...field} // Pass Formik's field props
              id="occasion"
              placeholder="Bday, Anniv or Gather..."            
              borderWidth="1.5px"
              bg="white"
              borderColor={
                errors.occasion && touched.occasion
                  ? "red.500"
                  : touched.occasion
                  ? "#2ecc71"
                  : "black.400"
              }
              _hover={{
                borderColor: "black.400",
              }}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Gathering">Gathering</option>
              <option value="Proposal">Proposal</option>
              <option value="Corporate">Corporate</option>
              <option value="Just Me & Myself">Just Me & Myself</option>
            </Select>
            <FormErrorMessage fontWeight="bold">
              {errors.occasion}
            </FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </div>
  );
}

export default Occasion;
