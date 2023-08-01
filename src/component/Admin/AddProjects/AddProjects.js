import React from 'react';
import { useForm } from 'react-hook-form';
import AddMinSidebar from './../AddMinSidebar/AddMinSidebar'
import Swal from 'sweetalert2';
const AddProjects = () => {
    const {
        register,
        reset,
        handleSubmit,
    
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        // console.log(data);
        fetch("https://educational-contnet-sharing-platform.onrender.com/projects", {
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
              // Swal.fire("Good job!", "Review given Successfully!");
            
            }
            Swal.fire("Good job!", "Project Added Successfully!");
            reset();
          });
      };
    return (
        <div className='className="bg-light mt-5 row'>
              <div className="col-md-2">
            <AddMinSidebar></AddMinSidebar>
            </div>
            <div className='col-md-7'>
            <div className="login-box w-75 m-auto mt-5">
        <h1 className="mt-5 text-center ">Add Project</h1>
        <div className="  d-flex justify-content-center align-items-center">
          <div className="login-form mx-auto text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2"
                required
              />

           
              <textarea
                {...register("description", { required: true })}
                placeholder="Description"
                className="p-2 m-2"
                required
              />

            <input
                {...register("githubLink", { required: true })}
                placeholder="Github Link"
                className="p-2 m-2 "
                required
              />
                 <input
                {...register("liveLink", { required: true })}
                placeholder="Live Link"
                className="p-2 m-2 "
                required
              />



              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="btn-custom" />
            </form>
          </div>
        </div>
      </div>
            </div>
        </div>
    );
};

export default AddProjects;