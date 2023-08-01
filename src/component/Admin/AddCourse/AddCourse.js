import React, { useState } from 'react';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './addcourse.css'
const AddCourse = () => {
  const { register,reset, handleSubmit} = useForm();
  const [imageURL,setImageURL]=useState(null);

  const onSubmit = data => {
    console.log(data);
    const eventData={

      
        name: data.name,
        description: data.description,

        resource1: data.resource1,
        resource2: data.resource2,
        resource3: data.resource3,

        contTitle:data.contTitle,
        contDescription:data.contDescription,

        contTitle1:data.contTitle1,
        contDescription1:data.contDescription1,

        contTitle2:data.contTitle2,
        contDescription2:data.contDescription2,

        contTitle3:data.contTitle3,
        contDescription3:data.contDescription3,

        imageURL: imageURL,
    }
    reset();
    const url =`https://educational-contnet-sharing-platform.onrender.com/course`;
    
    fetch(url, {
     method:'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify(eventData)
    })
    .then(res=> console.log('server side response', res));
    Swal.fire("Good job!", "Course added Successfully!");
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
    <form className="col-md-7" onSubmit={handleSubmit(onSubmit)}>
    <h1 className='text-secondary'>Add Course</h1>
  <div className="form-group">
       <label for="exampleInputPassword1" className='font-custom'>Add Your Course Title</label>
    <input type="text" className="form-control"  name="name" id="exampleInputEmail1"   {...register("name")} aria-describedby="emailHelp" placeholder="Enter Title" required/>
    </div>
    <div className="form-group">
    <label for="exampleInputPassword1" className='font-custom'>Description</label>
    <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="2"   {...register("description")} placeholder="Enter Your Designation"required ></textarea>
  </div>


    <div className="form-group">
       <label for="exampleInputPassword1" className='font-custom'>Resource </label>
    <input required type="text" className="form-control"  name="name" id="exampleInputEmail1"   {...register("resource1")} aria-describedby="emailHelp" placeholder="Enter resource of this course"/>
    </div>
    <div className="form-group">
       <label for="exampleInputPassword1" className='font-custom'>Resource</label>
    <input required type="text" className="form-control"  name="name" id="exampleInputEmail1"   {...register("resource2")} aria-describedby="emailHelp" placeholder="Enter resource of this course"/>
    </div>
    <div className="form-group">
       <label for="exampleInputPassword1" className='font-custom'>Resource</label>
    <input type="text" className="form-control"  name="name" id="exampleInputEmail1"   {...register("resource3")} aria-describedby="emailHelp" placeholder="Enter resource of this course"/>
    </div>


  <div className="form-group">
       <label for="exampleInputPassword1" className='font-custom'>Week 1 Content Title</label>
    <input type="text" className="form-control"  name="contTitle" id="exampleInputEmail1"   {...register("contTitle")} aria-describedby="emailHelp" placeholder="Enter content Title"/>
    </div>

  <div className="form-group">
    <label for="exampleInputPassword1" className='font-custom'>Week 1 Content Description</label>
    <textarea className="form-control" name="contDescription" id="exampleFormControlTextarea1" rows="2"   {...register("contDescription")} placeholder="Enter content description"></textarea>
  </div>
 <div className="form-group">
       <label for="exampleInputPassword1" className='font-custom'>Week 2 Content Title</label>
    <input type="text" className="form-control"  name="contTitle1" id="exampleInputEmail1"   {...register("contTitle1")} aria-describedby="emailHelp" placeholder="Enter content Title"/>
    </div>
  
  <div className="form-group">
    <label for="exampleInputPassword1" className='font-custom'>Week 2 Content Description</label>
    <textarea className="form-control" name="contDescription1" id="exampleFormControlTextarea1" rows="2"   {...register("contDescription1")} placeholder="Enter content description"></textarea>
  </div> 
  <div className="form-group">
       <label for="exampleInputPassword1" className='font-custom'>Week 3 Content Title</label>
    <input type="text" className="form-control"  name="contTitle2" id="exampleInputEmail1"   {...register("contTitle2")} aria-describedby="emailHelp" placeholder="Enter content Title"/>
    </div>
 
  <div className="form-group">
    <label for="exampleInputPassword1" className='font-custom'>Week 3 Content Description</label>
    <textarea className="form-control" name="contDescription2" id="exampleFormControlTextarea1" rows="2"   {...register("contDescription2")} placeholder="Enter content description"></textarea>
  </div> 
  <div className="form-group">
       <label for="exampleInputPassword1" className='font-custom'>Week 4 Content Title</label>
    <input type="text" className="form-control"  name="contTitle3" id="exampleInputEmail1"   {...register("contTitle3")} aria-describedby="emailHelp" placeholder="Enter content Title"/>
    </div>
 
  <div className="form-group">
    <label for="exampleInputPassword1" className='font-custom'>Week 4 Content Description</label>
    <textarea className="form-control" name="contDescription3" id="exampleFormControlTextarea1" rows="2"   {...register("contDescription3")} placeholder="Enter content description"></textarea>
  </div> 
 
  <div className="form-group">
  <label for="exampleFormControlFile1" className='font-custom'>Image</label>
  <br></br>
  <input type="file" name="example" onChange={handleImageUpload} className="form-control-file" id="exampleFormControlFile1"/>
  </div>
  <br/>
  <button type="submit" className=" btn-custom" required>Submit</button>
</form>
 </div>
    );
};

export default AddCourse;