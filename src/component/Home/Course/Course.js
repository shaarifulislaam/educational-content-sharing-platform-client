import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import './Course.css'

const Course = () => {

    const [course,setCourse]=useState([]);
    


    useEffect(() =>{
            fetch('https://educational-contnet-sharing-platform.onrender.com/courses')
            .then(res=>res.json())
            .then(data=>setCourse(data))
            
       },[])


    return (
        <section className="services-container">
        <div className="text-center "> 
        <h1 className="mt-3 responsive text-style">Course We Provide</h1>
        </div>

        <div className=" d-flex justify-content-center">
          <div className="w-75 row">
          {
          course.map(course=><CourseDetails course={course} key={course._id}></CourseDetails>)  
          }
          </div>
   </div>


   </section>
    );
};

export default Course;