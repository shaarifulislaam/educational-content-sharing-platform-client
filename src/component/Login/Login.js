import React  from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import firebaseConfig from './FirebaseConfig';
import { useContext} from "react";
import Navbar from "../Home/Navbar/Navbar";
import Swal from 'sweetalert2';
import loginImg from './../../images/login.jpg';
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import google from './../../images/google.svg'
import { localStoreKey } from '../../Data/Constant';




if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
 }else {
    firebase.app();
 }


const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    var provider = new firebase.auth.GoogleAuthProvider();
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
     
   const history=useHistory();
   const location=useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   
  
   const handleGoogleSingIn =()=>{
    
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
        // console.log(result)
      const {displayName,email,photoURL}=result.user;
      // console.log(result.user)
      // console.log(photoURL);
      const singedInUser={name:displayName,email,photoURL}
      localStorage.setItem(localStoreKey.user,JSON.stringify(singedInUser));
    setLoggedInUser(singedInUser);
    history.replace(from)
    Swal.fire(
      'Good job!',
      'Login Account Successfully!'
  )
    
  }).catch((error) => {
    console.log(error);
    
  });
 

}




const onSubmit = (data) => {
  const email = data.email;
  const password = data.password;
  // console.log(data);
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    
    // Signed in
    // console.log(userCredential)
    const user = userCredential.user;
    // console.log(user)
    const singedInUser={name:user?.displayName,email:user?.email}
    localStorage.setItem(localStoreKey.user,JSON.stringify(singedInUser));
   setLoggedInUser(singedInUser)
    history.replace(from);

    Swal.fire(
      'Good job!',
      'Login Account Successfully!'
  )
  
  
  })
  .catch((error) => {

  });
};




    return (
        <div>
          <Navbar></Navbar>
    <Container>
      <Row className="d-flex justify-content-center align-items-center ">
        <Col sm={12} md={6} lg={6}>
         <div className="text-start text-margin"> 
          <h1 >Interested to join? </h1>
          <p className="text-start">Get started with us </p>
          </div>
          <div className="m-auto mt-3">
            <div className="">
              <div className="login-form mx-auto text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Button onClick={handleGoogleSingIn} className="google-btn radius-form btn btn-light"><img width={30} src={google} alt="test" /> SIGN IN WITH GOOGLE</Button>
                  <input
                    {...register("email",{ required: true })}
                    type="email"
                    placeholder="Email"
                    className="p-2 m-2 width-form  radius-form"
                    required
                  />
                  <br />
                  <input
                    {...register("password",{ required: true })}
                    type="password"
                    placeholder="Password"
                    className="p-2 m-2 width-form radius-form"
                    required
                  />

                  <br />
                  {errors.exampleRequired && <p>This field is required</p>}

                  <input
                    type="submit"
                    value="Login"
                    className="p-2 m-2 btn-custom width-form radius-form"
                  />
                </form>
                <Link style={{ textDecoration: "none" }} to="/SignUp">
                  <Button  variant="text">New user?  <span className="text-primary">Create an account.</span></Button>
                </Link>
              
       
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          {" "}
          <div className="mt-2">
            <Image style={{ width: "100%" }} src={loginImg} />
           
          </div>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Login;
