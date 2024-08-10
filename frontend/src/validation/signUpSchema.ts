import * as Yup from "yup";

// Define schema for validation using Yup
export const signUpFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .required("Required")
    .matches(/^[^\d@][a-zA-Z0-9_ ]*$/, "Name cannot start with a digit or contain '@'"),
  phone: Yup.string()
    .min(10, "Phone number is too short!")
    .max(15, "Phone number is too long!")
    .required("Required")
    .matches(/^(\+?\d{1,3})?\d{10,15}$/, "Phone number must start with a digit or '+' and contain 10-15 digits"),
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("Required")
  //   .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address format"),
  password: Yup.string()
    .min(6, "Password is too short!")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(6, "Password is too short!")
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  gender: Yup.number()
    .oneOf([0, 1], "Invalid gender")
    .required("Required"),
});