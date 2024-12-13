import React from "react";

import { Field } from "formik";
import { RadioGroup, Radio, Stack, Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

import "../../styles/pickASpot.css";

function PickASpot({ errors, touched }) {
  return (
    <div>
      <Box className="pickaspot-box">
        <Field name="pickASpot">
          {({ field, form }) => (
            <FormControl isInvalid={errors.pickASpot && touched.pickASpot}>
              <FormLabel htmlFor="pickASpot">Pick a Spot*</FormLabel>
              <RadioGroup
                {...field}
                onChange={(value) => form.setFieldValue("pickASpot", value)} // Ensure Formik state updates
                value={form.values.pickASpot}
              >
                <Stack direction="column" spacing={4}>
                  <Radio value="Beside Windows">Beside Windows</Radio>
                  <Radio value="Outdoors">Outdoors</Radio>
                  <Radio value="Normal Settings">Normal Settings</Radio>
                </Stack>
              </RadioGroup>
              <FormErrorMessage fontWeight={"bold"}>
                {errors.pickASpot}
              </FormErrorMessage>
            </FormControl>
          )}
        </Field>
      </Box>
    </div>
  );
}

export default PickASpot;
