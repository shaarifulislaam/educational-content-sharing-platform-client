import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';

const MakeAdmin = () => {
    const { register,reset, handleSubmit} = useForm();
    
  
    const onSubmit = data => {
      const eventData={
          email: data.email
          
      }
      reset();
      const url =`https://educational-contnet-sharing-platform.onrender.com/isAdmin`;
      
      fetch(url, {
       method:'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(eventData)
      })
      .then(res=> console.log('server side response', res));
      Swal.fire("Good job!", "Make Admin Successfully!");
  };


    return (
        <div className="bg-light mt-5 row registerList">
           
            <div className="col-md-2">
            <AddMinSidebar></AddMinSidebar>
            </div>
    <div className="col-md-7 ">
    <h1>Make Admin</h1>
    <form className="col-md-7" onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
       <label for="exampleInputPassword1">Email</label>
    <input type="email" className="form-control" name="email"   {...register("email")}  placeholder="Write email" required/>
   <br/>
    <button type="submit" className="btn-custom">Submit</button>
    </div>
    
</form>
      
    </div>
    </div>
    );
};

export default MakeAdmin;