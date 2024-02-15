import React, {useState} from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import OTP from "./OTP"
import { FaEye , FaEyeSlash } from 'react-icons/fa';

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  Confirmpassword: "",
  otp: "",
};

const Registration = () => {
  const [passwordType,setpasswordType]= useState("password");
  const [passwordIcon,setpasswordIcon]= useState(<FaEyeSlash/>)
  const handleToggle = ()=>{
    if (passwordType === 'password'){
      setpasswordType('text');
      setpasswordIcon(FaEye);
    }else{
      setpasswordType('password');
      setpasswordIcon(FaEyeSlash);
    }
  };
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          values
        );
        action.resetForm();
        confirm("Are you sure to submit form!")
        // alert("Form Submitted Successfully!")
      },
    });
  console.log(
    errors
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To the <b>Ali Raza</b> website for programmers.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    
                  </div>
                  {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                   
                  </div>
                  {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  <div className="input-block">
                    <label htmlFor="phone" className="input-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      autoComplete="off"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      minLength="11"
                      maxLength="11"
                      pattern="[0-9]{11}"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                   
                  </div>
                  {errors.phone && touched.phone ? (
                      <p className="form-error">{errors.phone}</p>
                    ) : null}
                  {/* otp  */}
                  <div className="input-block">
                    <label htmlFor="otp" className="input-label">
                      OTP
                    </label>
                    <input
                      type="integer"
                      autoComplete="off"
                      name="otp"
                      id="otp"
                      minLength="4"
                      maxLength="4"
                      pattern="[0-9]{4}"
                      placeholder="otp"
                      value={values.otp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <OTP />
                    
                  </div>
                  {errors.otp && touched.otp ? (
                      <p className="form-error">{errors.otp}</p>
                    ) : null}
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                  <div className="d-flex">
                  <input
                      type={passwordType}
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="icon" onClick={handleToggle}>{passwordIcon}</span>
                  </div>
                  
                  </div>
                  {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  <div className="input-block">
                    <label htmlFor="Confirmpassword" className="input-label">
                      Confirm Password
                    </label>
                  <input
                      type="password"
                      autoComplete="off"
                      name="Confirmpassword"
                      id="Confirmpassword"
                      placeholder="Confirm Password"
                      value={values.Confirmpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    
                  </div>
                  {errors.Confirmpassword && touched.Confirmpassword ? (
                      <p className="form-error">{errors.Confirmpassword}</p>
                    ) : null}
                  <div className="modal-buttons">

                    <button className="input-button" type="submit">
                      Registration
                    </button>

                  </div>
                </form>
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 409px;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
    position: relative;
    bottom: 19px;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }
  .d-flex{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .icon{
    font-size: 16px;
    color: #ccc;
    cursor:pointer;
  }
  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Registration;
