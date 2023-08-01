import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const Assignment = () => {
    const { register, handleSubmit,reset} = useForm();
      const [loggedInUser,setLoggedInUser] = useContext(UserContext);
      const onSubmit = (data) => {
        // console.log(data);
        fetch("https://educational-contnet-sharing-platform.onrender.com/assignment", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
              // alert("Projects added Successfully");
              Swal.fire("Good job!", "Assignment Submitted Successfully!");
              reset();
            }
          });
      };
    return (
        <div className="bg-light my-5 row">
              
               <div  className="col-md-2">
               <Sidebar></Sidebar>
               </div>
        <div className='col-md-7'>
        <h1>Submit your assignment here</h1>
        <div>
         
            <p>Put your link here</p>
            <br/>
            <form className="col-md-7 " onSubmit={handleSubmit(onSubmit)} >
 
          <div>
          <label for="exampleInputPassword1">Student Name:</label>
          <input
                {...register("name")}
                value={loggedInUser?.name}
                // placeholder="Student Name"
                className="p-2 m-2 w-100 form-group border border-0"
              />
          </div>
  <div className="form-group">
    <textarea  {...register("description")} className="form-control" name="description" id="exampleFormControlTextarea1" rows="5"  required></textarea>
  </div>
  
 <br/>

 
  <button type="submit" className="btn-custom text-center">Submit</button>
</form>
        </div>
        </div>
        </div>
    );
};

export default Assignment;