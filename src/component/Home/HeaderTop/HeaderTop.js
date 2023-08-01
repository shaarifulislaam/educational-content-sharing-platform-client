import React from 'react';
import image from '../../../images/banner.jpg'
import './HeaderTop.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';


const HeaderTop = () => {
    return (

        <div style={{ height: '500px', width: '100%'}} className="bg">

            <section className="container-fluid justify-content-center row  ">
                <div className=" col-md-5 mt-5">

                    <img style={{ height: '350px', width: '100%' }} src={image} alt="" />

                </div>
                <div className="col-md-4 mt-5 ms-4 text-justify">
                    <h2 >Best educational content  sharing platform  trining center.<i class="fa-solid fa-circle-info"></i></h2>
                    <div style={{ textAlign: 'center', textColor: 'blue' }}>

                    </div>
                    <br/>
                    <p >An educational content sharing platform is an online platform that allows educators, students, and other interested parties to share and access educational content. These platforms can take various forms, including websites, online communities, and social media platforms.</p>
                        <button className="btn-custom" ><a className='text-decoration-none text-white' rel="noopener" href="https://www.google.com/" target="_blank">Learn More </a></button>
                </div>
            </section>

        </div>
    );
};

export default HeaderTop;