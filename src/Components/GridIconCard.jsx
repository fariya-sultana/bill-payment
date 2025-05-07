import React from 'react';

const GridIconCard = ({ singleData }) => {
    return (

        <div className='justify-items-center space-y-3'>
            <img
                src={singleData.icon}
                alt="Shoes"
                width={60}
                className="rounded-xl"
            />
            <h2 className="font-bold text-md  text-primary text-center">{singleData.bill_type} </h2>

        </div>

    );
};

export default GridIconCard;