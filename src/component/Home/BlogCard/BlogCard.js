import React from 'react';

const BlogCard = (props) => {
    const {name,image,blog,description}=props.data;
    return (
        <div className="col-md-3 card m-2">

            <div className=" d-flex pt-1 align-items-center">
            <img className="mx-3" src={image} alt="" width="60"/>
            <div>
                <h6 className="text-custom">{name}</h6>
               
            </div>
        </div>


        <div className="card-body">
            <h4 className="m-3 text-center">{blog}</h4>
            <p className="card-text text-center">{description}</p>
            <button className="btn-custom2" ><a className='text-decoration-none text-white' rel="noopener" href="https://www.google.com/" target="_blank">Learn More</a></button>
        </div>
        
   </div>
    );
};

export default BlogCard;