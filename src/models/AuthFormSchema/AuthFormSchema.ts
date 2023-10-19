import * as yup from "yup";
export const AuthFormSchema = yup.object().shape({
  fullname: yup
    .string()
    .max(40)
    .required("full name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("email address is required"),
  password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/, "Password must contain a combination of letters, numbers, and special characters")
    .min(6, "password should be a minimuim length of 6")
    .required("password is required"),

});
export interface AuthForm  {
   fullname: string;
   email: string;
   password: string;    
}