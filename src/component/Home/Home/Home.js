import React from 'react';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import HeaderTop from '../HeaderTop/HeaderTop';
import LiveChat from '../LiveChat/LiveChat';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Trainer from '../Trainer/Trainer';
// import FAQ from './FAQ/FAQ';
import TotalOverview from '../TotalOverview/TotalOverview';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderTop></HeaderTop>
            <Course></Course>
            <Blog></Blog>
            <Trainer></Trainer>
            <TotalOverview/>
            <Review></Review>
            <LiveChat></LiveChat>
            {/* <FAQ></FAQ> */}
            <ContactUs></ContactUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;