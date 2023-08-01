import React from 'react';
import './TrainerDetails.css'

const TrainerDetails = ({ trainer }) => {


    return (

        <div className="col-md-2 text-center trainer">
            <img src={trainer.imageURL} alt="" />
            <h3 className="mt-3">{trainer.name}</h3>
            <h6>{trainer.email}</h6>
            <p >{trainer.position}</p>

        </div>
    );
};

export default TrainerDetails;