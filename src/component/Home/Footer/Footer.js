import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG,faGithub,faTwitter,faYoutube,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="Container">
  <div className="row">
    	<div className="col-md-12">
    	    <footer className="footer">				
		<div className="container">
			<div className="row">
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						About us
					</div>	
					<p className="white-text">
					An educational content sharing platform is an online platform that allows educators, students, and other interested parties to share and access educational content. These platforms can take various forms, including websites, online communities, and social media platforms.
					</p>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Latest themes
					</div>	
					<div className="footer-links">
						<a href="#">
							Appointment
						</a>
						<a href="#">
							Health center
						</a>
						<a href="#">
							Quality
						</a>
						<a href="#">
							Wallstreet
						</a>
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Quick Links
					</div>	
					<div className="footer-links">
						<a href="#">
							Blog
						</a>
						<a href="#">
							FAQ
						</a>
						<a href="#">
							Terms & conditions
						</a>
						<a href="#">
							Privacy policy
						</a>
						<a href="#">
							Sujon Mamun Rakib
						</a>
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Support
					</div>	
					<div className="footer-links">
						<a href="#">
							Affiliate
						</a>
						<a href="#">
							Login
						</a>
						<a href="#">
							All theme package
						</a>
						<a href="#">
							Support forum
						</a>
					</div>

					<div className="footer-social-links m-t-30">
						<ul className='mt-2'>
						<li className="list-inline-item"><a href="//facebook.com" target="blank"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
						<li className="list-inline-item"><a href="//github.com" target="blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
						<li className="list-inline-item"><a href="//twitter.com" target="blank"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
						<li className="list-inline-item"><a href="//youtube.com" target="blank"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>




						
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<div className="footer-bottom">
		Copyright © 2023, All Rights Reserved
	</div>
    	</div>
	</div>
</div>
    );    
};

export default Footer;