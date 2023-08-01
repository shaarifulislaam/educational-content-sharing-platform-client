import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRegistered,faHome,faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
    return (
        <div className="sidebar  justify-content-between col-md-2 py-5 px-4 p-5 " style={{height:"100vh"}}>
            <ul className="list-unstyled">
            
                   <li>
                   <Link to="/Home" className="text-decoration-none">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                    </Link>
                   </li>
              
                    <li>
                    <Link to="/Registration" className="text-decoration-none">
                        <FontAwesomeIcon icon={faRegistered} /> <span>Registration</span>
                        
                    </Link>
                    </li>
                
                   <li>
                   <Link to="/Registration-list" className="text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Registration-list</span> 
                    </Link>
                   </li>
                   <li>
                   <Link to="/Assignment" className="text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Assignment</span> 
                    </Link>
                   </li>
                    <li>
                    <Link to="/review" className="text-decoration-none">
                        <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                     </Link>
                    </li>
                
                
                
            </ul>
           
        </div>
    );
};

export default Sidebar;