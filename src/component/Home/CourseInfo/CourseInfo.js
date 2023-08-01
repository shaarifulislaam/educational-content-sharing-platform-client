import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Accordion from 'react-bootstrap/Accordion';

const CourseInfo = () => {
    const { _id } = useParams();

    const [trainer, setTrainer] = useState([]);

  const [course, setCourse] = useState({});
  console.log(course)
  useEffect(() => {
    fetch(`https://educational-contnet-sharing-platform.onrender.com/CourseInfo/${_id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));  
  }, []);


  useEffect(() => {
    fetch('https://educational-contnet-sharing-platform.onrender.com/trainers')
        .then(res => res.json())
        .then(data => setTrainer(data))

}, [])
    return (
      <div className="row ">
        <Navbar></Navbar>
      <div className="col-md-6 col-lg-8 col-sm-12 container px-5">
        <div className=" mt-lg-5">
          <div>
            <img className="mt-lg-5 mx-lg-5"   style={{ height: "100px" }} src={course?.imageURL} alt="" />
          </div>
          <div>
            <h3 className="mt-5">{course?.name}</h3>
            <p>{course?.description}</p>
          </div>
        </div>
      

<h1>Resources</h1>
<div className='d-flex justify-content-around'>
<li>
      <a
                target="_blank"
                className="text-decoration-none"
                href={course?.resource1}
                rel="noreferrer"
              >
              Resource 1
              </a>
                </li>
                <li>
      <a
                target="_blank"
                className="text-decoration-none"
                href={course?.resource2}
                rel="noreferrer"
              >
                Resource 2
              </a>
                </li>
                <li>
        <a
                target="_blank"
                className="text-decoration-none"
                href={course?.resource3}
                rel="noreferrer"
              >
                Resource 3
              </a>
                </li>
</div>
{/* accoridian  */}

<h3 className='mt-3'>Week 1</h3>
<Accordion className='container-fluid'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{course?.contTitle}</Accordion.Header>
        <Accordion.Body>
       {course?.contDescription}
        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>


    <h3 className='mt-3'>Week 2</h3>
<Accordion className='container-fluid'>
   
     <Accordion.Item eventKey="0">
        <Accordion.Header>{course?.contTitle1}</Accordion.Header>
        <Accordion.Body>
        {course?.contDescription1}
        </Accordion.Body>
      </Accordion.Item> 
   
    </Accordion>
    <h3 className='mt-3'>Week 3</h3>
<Accordion className='container-fluid'>
   
      <Accordion.Item eventKey="0">
        <Accordion.Header>{course?.contTitle2}</Accordion.Header>
        <Accordion.Body>
        {course?.contDescription2}
        </Accordion.Body>
      </Accordion.Item>   
   
    </Accordion>
    <h3 className='mt-3'>Week 4</h3>
<Accordion className='container-fluid'>
   
   
        
        <Accordion.Item eventKey="0">
        <Accordion.Header>{course?.contTitle3}</Accordion.Header>
        <Accordion.Body>
        {course?.contDescription3}
        </Accordion.Body>
      </Accordion.Item>  
    </Accordion>
      </div>

      {/* place order  */}
      <div className="col-md-6 col-lg-4 col-sm-12 border border p-1 mt-2 custom-con">
        <h1 className="mt-3 text-center  text">Registration Now</h1>
        <div className="login-box  m-auto mt-3">
          <div className=" d-flex justify-content-center align-items-center">
            <div className="login-form mx-auto text-center">
            

            <Link to={"/dashboard"}>
        <button type="submit" className="btn-custom ">
          Registration Now
        </button>
      </Link>
           
            </div>
          </div>
        </div>
      </div>





    </div>
    );
};

export default CourseInfo;