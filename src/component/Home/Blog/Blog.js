import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import image1 from '../../../images/1.png';
import image2 from '../../../images/2.png'
import image3 from '../../../images/3.png'
const BlogData=[
    {
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name:'Jackson',
        image:image1,
        blog:'React Future'
    },
    {
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name:'Joseph',
        image:image2,
        blog:'Python Future'
    },
    {
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name:'Sebastian',
        image:image3,
        blog:'Javascript Future'
    }
]

const Blog = () => {
    return (
        <section className="bg-light mt-3">
             <div className="text-center mt-3 my-5"> 
             <h1 className="fw-bold  text-style">Blog</h1>
              </div>
             <div className="row d-flex justify-content-center">
               {
                BlogData.map(data=><BlogCard data={data} key={data.name}></BlogCard> )  
               }
               </div>
        </section>
    );
};

export default Blog;