import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../../App";
import firebaseConfig from "./../FirebaseConfig";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Col, Container, Image, Row, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { Controller, useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import regImg from "../../../images/register.jpg";
import { localStoreKey } from "../../../Data/Constant";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./SingUp.css";
 
const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const SignUp = () => {
  const [loggedUser,setLoggedInUser] = useContext(UserContext);
  // const [user,setUser] = useState({});
  const [success] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/, {
        message:
          "Password must be at least one uppercase, one lowercase, one special character and one number.",
      })
      .min(8, "Password must be at 8 char long"),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    reset,
    handleSubmit,
    control,
    // watch,
    formState: { errors },
  } = useForm(formOptions);

  const handleValidate = (phoneNumber) => {
    if (PHONE_REGEX.test(phoneNumber)) {
      errors["phoneNumber"] = null;
    } else {
      errors["phoneNumber"] = "Invalid phone number. Please try again."
    }
    return PHONE_REGEX.test(phoneNumber);
  }

  const onSubmit = (data) => {
    reset();

    const name = data.name;

    const email = data.email;
    const password = data.password;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const newUser = { name, email };
        localStorage.setItem(localStoreKey.user, JSON.stringify(newUser));

        setLoggedInUser(newUser);

        Swal.fire("Good job!", "Account created Successfully!");
        history.replace(from);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <Container>
        <Row className="d-flex justify-content-center align-items-center ">
          <Col sm={12} md={6} lg={6}>
            <div className="text-start ">
              <h1 className="mt-2 text-Margin">Sign Up Here</h1>
            </div>
            <div className="login-box  m-auto mt-3">
              <div className=" d-flex justify-content-center align-items-center">
                <div className="login-form mx-auto text-center">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("name")}
                      placeholder="Name"
                      className="p-2 m-2 w-75 radius-form"
                      required
                    />
                    <br />

                    {/* <input
                      {...register("email")}
                      type="email"
                      placeholder="Email"
                      className="p-2 m-2 w-100 radius-form"
                    /> */}

                    <input
                      // type="text"
                      placeholder="Email"
                      className="p-2 m-2 w-75 radius-form"
                      {...register("email",{
                        required: 'Email is required',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter a valid email',
                        },
                    })}
                    type="email"
                    required
                    />
                    
                    {errors.email && <span>Invalid email</span>}
                    <input
                      {...register("number")}
                      type="tel"
                      placeholder="Number"
                      className="p-2 m-2 w-75 radius-form"
                      required
                    />
                  
                     
        
              
              {/*  <Controller
               id="phoneNum"
               name="phone-input"
               control={control}
               rules={{
                 validate: (value) => handleValidate(value)
               }}
               render={({ field: { onChange, value } }) => (
                   <PhoneInput
                     value={value}
                     onChange={onChange}
                     defaultCountry="BD"
                     id="phone-input"
                     placeholder="Number"
                     className=" m-2 w-100  radius-form"
                   />
               )}
               />
             {!!errors.phoneNumber && <p style={{color: 'red'}}>{errors.phoneNumber}</p>} */}
          

           
                    <input
                      {...register("address")}
                      type="text"
                      placeholder="Address"
                      className="p-2 m-2 w-75 radius-form"
                    />
                    <br />

                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                      className={`p-2 m-2 w-75 radius-form  ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                    <input
                      name="confirmPwd"
                      type="password"
                      placeholder="Confirm Password"
                      {...register("confirmPwd")}
                      className={`p-2 m-2 w-75  radius-form  ${
                        errors.confirmPwd ? "is-invalid" : ""
                      }`}
                     
                    />
                    <div className="invalid-feedback">
                      {errors.confirmPwd?.message}
                    </div>
                    <br />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <input
                      type="submit"
                      value="Register"
                      className="btn-custom p-2 m-2 w-75 radius-form"
                    />
                  </form>

                  {success && <Alert variant="success">{success}</Alert>}
                  {error && <Alert variant="warning">{error}</Alert>}
                  <Link style={{ textDecoration: "none" }} to="/Login">
                    <Button variant="text">
                      Already have an account?{" "}
                      <span className="text-primary">Please Login</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            {" "}
            <div className="p-5">
              <Image style={{ width: "125%" }} src={regImg} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
