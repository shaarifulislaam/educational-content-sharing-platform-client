
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';







const Trainer = () => {

  

    const [trainer, setTrainer] = useState([]);

    useEffect(() => {
        fetch('https://educational-contnet-sharing-platform.onrender.com/trainers')
            .then(res => res.json())
            .then(data => setTrainer(data))

    }, [])

    


    return (
        <div>
        <h1 className="text-center text-style my-5">Meet the Team</h1>
        
        <>
          <Row  xs={1}
        md={2}
        xl={3}
        className="g-3 container-lg  mx-lg-auto mx-md-auto mx-0">
            {trainer.map ((tr)=>(
             
            <Col sm={12} md={6} lg={3} key={tr._id}>
              <div>
                <img 
                src={tr?.imageURL}  
                variant="top"
                style={{  width:"100%" }} alt="" />
                <h3 className="mt-3">{tr?.name}</h3>
                <h6>{tr?.email}</h6>
                <p className="my-2 text-secondary fs-5">{tr?.position}</p>
              </div>
            </Col>
          
          ))}
           
          </Row>
        </>
      </div>
    );
};

export default Trainer;