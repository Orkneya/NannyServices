import * as yup from "yup";

export const appointmentSchema = yup.object({
  address: yup.string().required("Address is required"),

  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, "Phone must start with +380 and contain 9 digits")
    .required("Phone is required"),

  child_age: yup
    .number()
    .typeError("Child age must be a number")
    .min(0, "Age cannot be negative")
    .max(18, "Age must be 18 or less")
    .required("Child`s age is required"),

  time: yup.string().required("Time is required"),

  email: yup.string().email("Invalid email").required("Email is required"),

  parentsName: yup.string().required("Parent's name is required"),

  comment: yup.string().max(500, "Comment is too long"),
});
