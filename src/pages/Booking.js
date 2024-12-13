import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Heading, Button, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";

import { validationSchema } from "../services/validationSchema.js";

import Name from "../components/FormComponents/Name.js";
import Email from "../components/FormComponents/Email.js";
import Phone from "../components/FormComponents/Phone.js";
import NumOfPeople from "../components/FormComponents/NumOfPeople.js";
import BookingDate from "../components/FormComponents/BookingDate.js";
import PickASpot from "../components/FormComponents/PickASpot.js";
import BookingTime from "../components/FormComponents/BookingTime.js";
import Occasion from "../components/FormComponents/Occasion.js";
import SpecialRequest from "../components/FormComponents/SpecialRequest.js";

import bookingImgONE from "../assets/images/bookingPageImg/restaurant_picA.png";
import bookingImgTWO from "../assets/images/bookingPageImg/present.png";
import bookingImgTHREE from "../assets/images/bookingPageImg/restaurant_picB.png";

import "../styles/booking.css";

function Booking() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  return (
    <main className="content-page">
      <section className="booking-form-section">
        <Heading size="lg" style={{ color: "#495e57" }}>
          Reserve a Table
        </Heading>
        <Text mb={5}>
          Please fill in the form accurately to enable us to serve you better!
        </Text>
        <article className="booking-form-article">         
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              people: "",
              selectedDate: "",
              selectedTime: "",
              pickASpot: "",
              occasion: "",
              specialRequest: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("value:", values);
              // alert(JSON.stringify(values, null, 2));
              navigate("/booking/confirmation", { state: values });
            }}
          >
            {({ errors, touched, isSubmitting, isValid }) => (
              <Form>
                <div className="form-container">
                  <div className="first-row">
                    <Name errors={errors} touched={touched} />
                    <Email errors={errors} touched={touched} />
                    <Phone errors={errors} touched={touched} />
                  </div>
                  <div className="second-quad">
                    <NumOfPeople errors={errors} touched={touched} />
                    <BookingDate setAvailableTimes={setAvailableTimes} />
                    <BookingTime availableTimes={availableTimes} />
                    <Occasion errors={errors} touched={touched} />
                    <div className="second-single">
                      <PickASpot errors={errors} touched={touched} />
                    </div>
                  </div>
                  <div className="special-request">
                    <SpecialRequest errors={errors} touched={touched} />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="submit-btn">
                  <Button
                    className="submit-btn-chakra"
                    type="submit"
                    fontSize="xl"
                    isDisabled={!isValid || isSubmitting}
                    isLoading={isSubmitting}                                     
                  >
                    Confirm Reservation
                  </Button>
                </div>

                {/* Images underneath Confirm Button */}
                <div className="booking-page-img">
                  <img src={bookingImgONE} alt="present" />
                  <img src={bookingImgTWO} alt="restaurant settings" />
                  <img src={bookingImgTHREE} alt="Grill Fish with Lemon" />
                </div>
              </Form>
            )}
          </Formik>        
        </article>
      </section>
    </main>
  );
}

export default Booking;
