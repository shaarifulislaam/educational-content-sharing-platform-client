import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './BookList.css';

const BookList = () => {
    const [registration,setRegistration]=useState([]);
    // console.log(registration)
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    useEffect(() => {
        fetch('https://educational-contnet-sharing-platform.onrender.com/Registration?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setRegistration(data))
    },[])




    return (
    
    <div>
         <Sidebar></Sidebar>
   <div className='table-style'>
   <h1 className="text-center custom-margin">
      ALL Orders : {registration?.length}{" "}
    </h1>

    <Table responsive striped bordered hover className="w-75 mx-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Course</th>
          <th>Email</th>
          <th>Phone</th>
          
          <th>Action</th>
        </tr>
      </thead>
      {registration.map((rg, index) => (
        <tbody key={rg?._id}>
          <tr>
            <td>{index}</td>
            <td>{rg?.name}</td>
            <td>{rg?.course}</td>
            <td>{rg?.email}</td>
            <td>{rg?.phone}</td>

           
            <td
              className="delete-btn text-center"
              // onClick={() => handleDelete(order?._id)}
            >
              <i className="far fa-trash-alt"></i>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
   </div>
  </div>
    );
};

export default BookList;