import React from 'react';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const StudentAssignment = () => {
    const [assignment, setAssignment] = useState([]);
    console.log(assignment)
    useEffect(() => {
      fetch("https://educational-contnet-sharing-platform.onrender.com/assignment")
        .then((res) => res.json())
        .then((data) => setAssignment(data));
    }, []);
    return (
        <div  className='className="bg-light mt-5 row'>
             <div className="col-md-2">
            <AddMinSidebar></AddMinSidebar>
            </div>
          
            <div className='col-md-7'>
            <h1>Student Assignment</h1>
            <Row
        xs={1}
        md={2}
        xl={3}
        className="g-3 container-lg  mx-lg-auto mx-md-auto mx-0"
      >
        {assignment.map((pr) => (
          <Col key={pr._id}>
            <Card style={{ border: "none" }} className="rounded-4 shadow-sm">
           
              <Card.Body>
                <Card.Title
                  style={{ height: "50px" }}
                  className="fw-bold product-title"
                >
                  {pr?.name}
                </Card.Title>
                <div className="description mt-3">
                  <Card.Text className="custom-text">
                    {pr?.description}
                  </Card.Text>
                </div>
            
              
              </Card.Body>
            
            </Card>
          </Col>
        ))}
      </Row>
            </div>
        </div>
    );
};

export default StudentAssignment;