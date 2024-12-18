import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import "../styles/confirmBooking.css";

function ConfirmBooking() {
  const location = useLocation();
  const { state } = location;

  return (
    <main className="content-page">
      <section
        className="confirm-booking"
        style={{ padding: "100px 20px 100px 20px" }}
      >
        <article>
          <Box
            maxW="400px"
            mx="auto"
            bg={"#f8f9f9"}
            mt={8}
            p={5}
            boxShadow="md"
            borderRadius="md"
            border="2.5px solid #000"
          >
            <Heading mb={8} textAlign="center">
              Booking Successful!
            </Heading>
            <Text textAlign="center" fontStyle="italic">
              You will received your booking details via WhatsApp and/or email.
            </Text>
            <div className="icon-circle-check">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>

            {state ? (
              <div className="confirm-booking-container">
                <VStack className="props">
                  <Text>Name:</Text>
                  {state.email && <Text>Email:</Text>}
                  <Text>Phone:</Text>
                  <Text mb="3">Total Guests:</Text>
                  <Text mb="2">
                    Reservation <br />
                    Date:
                  </Text>
                  <Text mb="3">
                    Reservation <br />
                    Time:
                  </Text>
                  <Text mb="2">Spot:</Text>
                  {state.occasion && <Text>Occasion:</Text>}
                  {state.specialRequest && (
                    <Text>
                      Special <br />
                      Request:
                    </Text>
                  )}
                </VStack>

                <VStack className="values">
                  <Text>{state.name}</Text>
                  {state.email && <Text>{state.email}</Text>}
                  <Text>{state.phone}</Text>
                  <Text mb="7">{state.people}</Text>
                  <Text mb="8">{state.selectedDate}</Text>
                  <Text mb="5">{state.selectedTime}</Text>
                  <Text mb="2">{state.pickASpot}</Text>
                  {state.occasion && <Text mb="2">{state.occasion}</Text>}
                  {state.specialRequest && <Text>{state.specialRequest}</Text>}
                </VStack>
              </div>
            ) : (
              <Text>No data available</Text>
            )}
          </Box>
        </article>
      </section>
    </main>
  );
}

export default ConfirmBooking;
