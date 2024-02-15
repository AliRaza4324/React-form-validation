import * as Yup from "yup";
// const reu = /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/;
export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string().min(11, 'Must be 11 chars').required("Please enter your phone number"),
  otp: Yup.string().min(4, 'must be 4chars').required("Please enter your otp"),
  // password: Yup.string().min(6).required(reu, "Please enter your password"),
  password: Yup
  .string()
  .required('Please Enter your password')
  .matches(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  Confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
