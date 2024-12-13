import { Field } from "formik";

import { Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

function SpecialRequest({ errors, touched }) {
  return (
    <div>
      <FormControl
        isInvalid={errors.specialRequest && touched.specialRequest}
        mt={-2}
      >
        <FormLabel htmlFor="specialRequest">Special Request:</FormLabel>
        <Field
          className="special-request-field"
          h="150px"
          w="500px"
          resize="none"
          as={Textarea}
          id="specialRequest"
          name="specialRequest"
          type="specialRequest"
          placeholder="Let us know what do you need..."
          borderWidth="1.5px"
          bg="white"
          borderColor={
            errors.email && touched.specialRequest
              ? "red.500"
              : touched.specialRequest
              ? "#2ecc71" // Valid state
              : "black.400" // Default border color
          }
          _hover={{
            borderColor: "black.400",
          }}
        />
        <FormErrorMessage fontWeight={"bold"}>
          {errors.specialRequest}
        </FormErrorMessage>
      </FormControl>
    </div>
  );
}

export default SpecialRequest;
