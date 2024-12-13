import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "*Name must be at least 2 characters")
    .required("*Name is required"),
  email: Yup.string().email("Invalid email address"),
  // .required("*Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{8}$/, "*Phone number must be exactly 8 digits.")
    .required("*Phone number is required."),    
  people: Yup.number()
    .positive("*Must be a positive number")
    .required("*Minimum of 1 people is required")
    .min(1, "*Minimum of 1 people is required")
    .max(12, "Cannot exceed 12 peoples"),
  selectedDate: Yup.string().required("*Date is required"),
  selectedTime: Yup.string().required("*Time slot is required"),
  pickASpot: Yup.string().required("*Please select a spot."),
  //occasion: Yup.string().required("Please select an occasion."),
  //specialRequest: Yup.string().required("Please input your special request."),  
});
