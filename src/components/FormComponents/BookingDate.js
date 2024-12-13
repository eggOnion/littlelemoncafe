import React from "react";

import { Field } from "formik";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

import { grabDateTime } from "../../services/bookingUtils";

function BookingDate({ setAvailableTimes }) {
  return (
    <div>
      <Field name="selectedDate">
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.selectedDate && form.touched.selectedDate}
            mb={1}
          >
            <FormLabel htmlFor="selectedDate">Reservation Date*</FormLabel>
            <Field
              {...field}
              as={Input}
              id="selectedDate"
              name="selectedDate"
              min={new Date().toISOString().split("T")[0]} //disable older dates
              type="date"
              onChange={(e) => {
                const selectedDate = new Date(e.target.value);
                form.setFieldValue("selectedDate", e.target.value); // Update Formik's state
                setAvailableTimes(grabDateTime(selectedDate)); // Update available time slots
              }}
              placeholder="Select a date"
              borderWidth="1.5px"
              bg="white"
              borderColor={
                form.errors.selectedDate && form.touched.selectedDate
                  ? "red.500"
                  : form.touched.selectedDate
                  ? "#2ecc71"
                  : "black.400"
              }
              _hover={{
                borderColor: "black.400",
              }}
            />
            <FormErrorMessage fontWeight={"bold"}>
              {form.errors.selectedDate}
            </FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </div>
  );
}

export default BookingDate;
