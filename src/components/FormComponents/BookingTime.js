import React from "react";

import { Field } from "formik";
import { Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

function BookingTime({ availableTimes }) {
  return (
    <div>
      <Field name="selectedTime">
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.selectedTime && form.touched.selectedTime}
            mb={1}
          >
            <FormLabel htmlFor="selectedTime">Reservation Time*</FormLabel>
            <Field
              {...field}
              as={Select}
              id="selectedTime"
              name="selectedTime"
              placeholder="Select a time"
              borderWidth="1.5px"
              bg="white"
              borderColor={
                form.errors.selectedTime && form.touched.selectedTime
                  ? "red.500"
                  : form.touched.selectedTime
                  ? "#2ecc71"
                  : "black.400"
              }
              _hover={{
                borderColor: "black.400",
              }}
            >
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            <FormErrorMessage fontWeight={"bold"}>
              {form.errors.selectedTime}
            </FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </div>
  );
}

export default BookingTime;
