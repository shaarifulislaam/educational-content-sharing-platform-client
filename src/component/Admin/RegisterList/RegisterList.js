import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';
import './RegisterList.css';
import Swal from 'sweetalert2';

const RegisterList = () => {

    const [registration,setRegistration]=useState([]);
    console.log(registration)
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    useEffect(() => {
        fetch('https://educational-contnet-sharing-platform.onrender.com/Registrations')
        .then(res=>res.json())
        .then(data=>setRegistration(data))
    },[])


 //*handle delete
 const handleDelete = (id) => {
  const proceed = window.confirm("Are you sure, you want to delete?");
  if (proceed) {


  fetch(`https://educational-contnet-sharing-platform.onrender.com/Registrations/${id}`, {
    method: 'DELETE'
  })
  .then((data) => {
    if (data.deletedCount > 0) {
      Swal.fire("Good job!", "Data Deleted Successfully!");
      // setControl(!control);
    }
  });
  // .then(res => res.json())
  // .then(result => setRegistration(result))
  Swal.fire("Good job!", "Data Deleted Successfully!");
  }
};



    return (
     

    <div>
    <AddMinSidebar></AddMinSidebar>
<div className='table-Style'>
<h1 className="text-center custom-margin">
 ALL Registration : {registration?.length}{" "}
</h1>

<Table responsive striped bordered hover className="w-75 mx-auto ">
 <thead>
   <tr>
     <th>#</th>
     <th>Name</th>
     <th>Course</th>
     <th>Email</th>
     <th>Phone</th>
     {/* <th>Status</th> */}
     <th>Action</th>
   </tr>
 </thead>
 {registration?.map((rg, index) => (
   <tbody key={rg?._id}>
     <tr>
       <td>{index}</td>
       <td>{rg?.name}</td>
       <td>{rg?.course}</td>
       <td>{rg?.email}</td>
       <td>{rg?.phone}</td>

      
       <td
         className="delete-btn text-center"
         onClick={() => handleDelete(rg?._id)}
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

export default RegisterList;