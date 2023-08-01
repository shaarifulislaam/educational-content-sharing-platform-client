import React from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import aboutImg from './../../../images/contact.jpg';
import { Container, Row ,Col } from 'react-bootstrap';
const ContactUs = () => {
    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm();
      const sendEmail = (data, e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_xb7axh7",
            "template_2czizgk",
            e.target,
            "4chiriwV0iYT2zakl"
          )
          .then(
            (result) => {
              console.log(result.text);
              Swal.fire("Good job!", "Mail Sent Successfully!");
            },
            (error) => {
              console.log(error.text);
              Swal.fire("opps!", "Mail sent failed!");
            }
          );
        e.target.reset();
      };
    return (
    
       <div id="about" className="about-container">
      
       <h1 className="text-center fw-bolder my-3 pt-3 ">Get in Touch</h1>
       <Container className="about-details rounded-3">
         <Row className='d-flex justify-content-center align-items-center'>
           <Col sm={12} md={6} lg={6}>
           

           <div className="login-box w-75 m-auto ">
            <div className=" d-flex justify-content-center align-items-center">
              <div className="login-form mx-auto text-center">
                <form onSubmit={handleSubmit(sendEmail)} className="mb-4">
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className="p-2 m-2"
                  />
                  <input
                    {...register("email")}
                    placeholder="name@example.com"
                    className="p-2 m-2"
                  />
                  <input
                    {...register("subject")}
                    placeholder="Subject"
                    className="p-2 m-2"
                  />
    
                  <textarea
                    {...register("message", { required: true })}
                    placeholder="Type your message"
                    className="p-2 m-2"
                  />
    
                  {errors.exampleRequired && <span>This field is required</span>}
    
                  <input
                    type="submit"
                    value="Send"
                    className="btn-custom"
                  />
                </form>
              </div>
            </div>
          </div>
           </Col>
           <Col sm={12} md={6} lg={6}>
           <img className="img-fluid" src={aboutImg} alt="" />
           </Col>
         </Row>
       </Container>
     </div>
    );
};

export default ContactUs;
