import React, { useState } from 'react';
import Swal from 'sweetalert2';


const Delete = ({dele}) => {

    const [deleteCourse,setDeleteCourse]=useState([])
                
    const deleteProduct = (id) => {
        // console.log(id);

        const proceed = window.confirm("Are you sure, you want to delete?");
  if (proceed) {
        fetch(`https://educational-contnet-sharing-platform.onrender.com/delete/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => setDeleteCourse(result))
        Swal.fire("Good job!", "Data Deleted Successfully!");
      }
        }



    

    return (
  

        <div className="col-md-4 text-center pt-5 ">
      
      <img
        className="img"
        style={{ height: "100px" }}
        src={dele?.imageURL}
        alt=""
      />
      <h4 className="pt-3">{dele?.name}</h4>
     
    <div className="d-flex p-2">
    <div className="mx-1">
    <button onClick={() => deleteProduct(dele?._id)} className="btn btn-danger" variant="primary">Delete </button>
     
    </div>
    <div className="mx-1"></div>
     
      </div>
    </div>
    );
};

export default Delete;