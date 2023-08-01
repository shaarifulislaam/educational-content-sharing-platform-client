import React, { useEffect, useState } from 'react';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';
import Delete from '../Delete/Delete';

const ManageCourse = ({dele}) => {
       
    const [del,setDel]=useState([]);
         
    // console.log('this result', del);

    useEffect (()=>{
        const url= 'https://educational-contnet-sharing-platform.onrender.com/courses'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDel(data))
    } ,[del]) 


    return (
        <div className="bg-light mt-5 row registerList ">
           
            <div className="col-md-2">
            <AddMinSidebar></AddMinSidebar>
            </div>
    <div className="col-md-7 ">
    <h1>Manage Courses</h1>
       <div className=" d-flex justify-content-center">
       <div className="w-100 row">
            
            {
                    del.map(dele => <Delete dele={dele}></Delete>)
               }
            </div>
       </div>
    </div>
    </div>
    );
};

export default ManageCourse;