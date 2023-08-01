import React from 'react';
import { Link } from "react-router-dom";
// import TrainerDetails from "../TrainerDetails/TrainerDetails";
import "./CourseDetails.css";


const CourseDetails = ({ course }) => {


  return (
    <div className="col-md-4 text-center pt-5 animation">
      
      <img
        className="img"
        style={{ height: "100px" }}
        src={course.imageURL}
        alt=""
      />
      <h4 className="pt-3" height="200px">{course.name}</h4>
     <div height="500px">
     <p >{course.description.slice(0,150)}</p>
     </div>
    <div className="d-flex p-2">
    <div className="mx-1">
    <Link to={`/CourseInfo/${course._id}`}>
        <button type="submit" className="btn-custom">
          Enroll Now
        </button>
      </Link>{" "}
     
    </div>
    <div className="mx-1"></div>
     
      </div>
    </div>
  );
};

export default CourseDetails;
