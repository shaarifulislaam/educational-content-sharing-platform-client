import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home/Home';

import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Dashboard from './component/Dashboard/Registration/Dashboard';
import Book from './component/Dashboard/Book/Book';
import BookList from './component/Dashboard/BookList/BookList';
import Review from './component/Dashboard/Review/Review';
import Admin from './component/Admin/Admin/Admin';
import RegisterList from './component/Admin/RegisterList/RegisterList';
import AddCourse from './component/Admin/AddCourse/AddCourse';
import MakeAdmin from './component/Admin/MakeAdmin/MakeAdmin';
import ManageCourse from './component/Admin/ManageCourse/ManageCourse';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import SignUp from './component/Login/SignUp/SignUp';
import CourseInfo from './component/Home/CourseInfo/CourseInfo';
import Project from './component/Home/Project/Project';
import Tranier from './component/Admin/Trainers/Traniers';
import { localStoreKey } from './Data/Constant';
import PrivateAuth from './component/PrivateRoute/PrivateAuth';
import ContactUs from './component/Home/ContactUs/ContactUs';
import Assignment from './component/Dashboard/Assignment/Assignment'
import TotalOverview from './component/Home/TotalOverview/TotalOverview';
import AddProjects from './component/Admin/AddProjects/AddProjects';
import StudentAssignment from './component/Admin/StudentAssignment/StudentAssignment';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  useEffect(()=>{

    const signInUser = JSON.parse(localStorage.getItem(localStoreKey?.user));
    // console.log(signInUser)
    if(signInUser?.email) {
      setLoggedInUser(signInUser)
    }else{
      setLoggedInUser({})
    }

  },[]);
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
      <Route  path="/about">
            <Home></Home>
          </Route>

          <PrivateAuth path="/Login">
            <Login></Login>
          </PrivateAuth>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/Registration">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/Project">
            <Project></Project>
          </PrivateRoute>
          <Route path="/ContactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/Registration-list">
            <BookList></BookList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>

          <PrivateRoute path="/CourseInfo/:_id">
            <CourseInfo></CourseInfo>
            </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/Register-list">
            <RegisterList></RegisterList>
          </Route>
          <Route path="/Add-Course">
            <AddCourse></AddCourse>
          </Route> 
           <Route path="/StudentAssignment">
            <StudentAssignment></StudentAssignment>
          </Route> 
           <Route path="/Add-projects">
            <AddProjects></AddProjects>
          </Route>
           <Route path="/Assignment">
            <Assignment></Assignment>
          </Route>
          <Route path="/Make-Admin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/Manage-Course">
            <ManageCourse></ManageCourse>
          </Route>
          <Route path="/TotalOverview">
            <TotalOverview></TotalOverview>
          </Route>
          <Route path="/Tranier">
           <Tranier></Tranier>
          </Route>
          <PrivateAuth path="/SignUp">
            <SignUp></SignUp>
          </PrivateAuth>
          <Route  path="/">
           <Home></Home>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
