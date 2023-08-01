/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import  "firebase/auth";
import './Navbar.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import firebaseConfig from './../../Login/FirebaseConfig';
import { localStoreKey } from "../../../Data/Constant";
import Swal from "sweetalert2";
import { Image } from "react-bootstrap";
import imgIcon from './../../../images/logo.png'
import imgBlank from './../../../images/blank-profile-picture-973460_1280.webp'
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);;
}else {
  firebase.app();
}

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
            //  console.log(loggedInUser.photoURL);
  const [isAdmin, setIsAdmin] = useState(false);
 
  useEffect(() => {
    if(loggedInUser?.email){
      fetch('https://educational-contnet-sharing-platform.onrender.com/admin', {
        method: 'POSt',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({email: loggedInUser?.email})
      })
      .then(res =>res.json())
      .then(data =>setIsAdmin(data))
    }
   

  }, [loggedInUser?.email]);

  const signOutUser=()=>{
    localStorage.removeItem(localStoreKey.user);
    setLoggedInUser({})
    Swal.fire("Good job!", "Logout Successfully!");
  }


 
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark NavColor">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <h3>
              <Link className="nav-link ml-5 text-white" to="/Home">
              <Image
                className="ms-3"
                style={{ height: "50px", width: "12rem" }}
                src={imgIcon}
                // roundedCircle
              />
              </Link>
            </h3>
            <div class=" navbar-nav ms-auto mb-2 mb-lg-0">
             
                { <div className="d-flex">
                    <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Home"
              >
                Home
              </Link>
            
              <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/ContactUs"
              >
                Contact Us
              </Link>

              <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Project"
              >
                Project
              </Link>
            
                  </div>
                }


          {loggedInUser?.email && (
              <Image
                className="ms-3"
                style={{ height: "40px", width: "40px" }}
                src={loggedInUser?.photoURL  || imgBlank}
                roundedCircle
              />
            )}

               {
                loggedInUser?.email ?
                <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                onClick={signOutUser}
                to="/Login"
              >
                Logout
              </Link>
                :
                <Link
                class="nav-link ms-5 btn-custom active"
                aria-current="page"
                href="#"
                to="/Login"
              >
                Login
              </Link>
               }
                {isAdmin && loggedInUser?.email && 
                  <div>
                    <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Admin"
              >
              Admin DashBoard
              </Link>
                  </div>
                }

        {!isAdmin && loggedInUser?.email && 
                  <div>
                    <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/dashboard"
              >
              User DashBoard
              </Link>
                  </div>
                }
               
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
