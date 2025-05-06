import React from 'react';

const GridIconCard = ({ singleData }) => {
    return (
        <div className="card bg-white md:w-50 md:h-50 w-40 h-40 shadow-sm rounded-md">
            <figure className="px-10 pt-10">
                <img
                    src={singleData.icon}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center justify-end">
                <h2 className="card-title text-xl font-bold text-primary">{singleData.organization} </h2>
            </div>
        </div>
    );
};

export default GridIconCard;