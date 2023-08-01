import React, { useEffect } from 'react';

import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
const Project = () => {
    const [projects, setProjects] = useState([]);
    // console.log(projects)
    useEffect(() => {
      fetch("https://educational-contnet-sharing-platform.onrender.com/projects")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);
    return (
        <div>
          <Navbar></Navbar>
          <div id="projects">
      <h1 className="mt-5 text-center">
    Projects
      </h1>
      <Row
        xs={1}
        md={2}
        xl={3}
        className="g-3 container-lg  mx-lg-auto mx-md-auto mx-0"
      >
        {projects.map((pr) => (
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
                    {pr?.description.slice(0, 100)}
                  </Card.Text>
                </div>
             {/*    <p className="product-price">
                  Price : <span className="text"> {pr?.githubLink}</span> BDT
                </p>
                <p className="product-price">
                  Price : <span className="text"> {pr?.liveLink}</span> BDT
                </p> */}

            <div className="mt-3">
              <a
                target="_blank"
                className="text-decoration-none"
                href={pr?.githubLink}
                rel="noreferrer"
              >
                <i class="fab fa-github fs-1 text-secondary me-5"></i>
              </a>
              <a
                target="_blank"
                className="text-decoration-none"
                href={pr?.liveLink}
                rel="noreferrer"
              >
                <i class="fas fa-external-link-alt fs-1 text-secondary me-5"></i>
              </a>
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

export default Project;