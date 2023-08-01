import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';
import Swal from 'sweetalert2';


const Traniers = () => {

    const { register,reset, handleSubmit} = useForm();
    const [imageURL,setImageURL]=useState(null);
  
    const onSubmit = data => {
      const eventData={
          name: data.name,
          email: data.email,
          position: data.position,
          imageURL: imageURL,
      }
      reset();
      const url =`https://educational-contnet-sharing-platform.onrender.com/trainer`;
      
      fetch(url, {
       method:'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(eventData)
      })
      .then(res=> console.log('server side response', res));
      Swal.fire(
        'Good job!',
        'Trainer Added Successfully!'
    )
  };
  
           const handleImageUpload = event => {
            console.log(event.target.files[0]);
            const imageData = new FormData();
           imageData.set('key', '32a97345521821b6bd065fe88e703ca3');
           imageData.append('image', event.target.files[0])
  
          axios.post('https://api.imgbb.com/1/upload', 
      imageData)
       .then(function (response) {
       setImageURL(response.data.data.display_url);
       
        })
        .catch(function (error) {
         console.log(error);
        });
        }



    return (
        <div className="bg-light mt-5 row">
           
        <div className="col-md-2">
        <AddMinSidebar></AddMinSidebar>
        </div>
<form className="col-md-7 " onSubmit={handleSubmit(onSubmit)} >
<h1>New Trainer Add</h1>
<div className="form-group">
<input type="text" {...register("name")} className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" required/>
</div>
<br/>
<div className="form-group">
{/* <label for="exampleInputPassword1">Enter Your Email</label> */}
<input type="email" {...register("email")} className="form-control" name="email" id="exampleInputPassword1" placeholder="Email" required/>
</div>
<br/>
<div className="form-group">
{/* <label for="exampleInputPassword1">Enter Your Email</label> */}
<input type="text" {...register("position")} className="form-control" name="position" id="exampleInputPassword1" placeholder="Trainer Designation" required/>
</div>
<br/>
<div className="form-group">
<label for="exampleFormControlFile1">Image</label>
<br></br>
<input type="file" name="example" onChange={handleImageUpload} className="form-control-file" id="exampleFormControlFile1"/>
</div>
<br/>
<button type="submit" className="btn-custom">Submit</button>
</form>
</div>
    );
};

export default Traniers;