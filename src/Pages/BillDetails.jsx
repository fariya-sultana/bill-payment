import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import img1 from '../assets/nesco-logo-png_seeklogo-382775.png'
import img2 from '../assets/titas.png'
import img3 from '../assets/btlc.png'
import img4 from '../assets/icone3.gif'
import img5 from '../assets/icon4.png'
import img6 from '../assets/tuition.img.png'

const BillDetails = () => {

    const { id } = useParams();
    const numId = parseInt(id);
    const dataList = useLoaderData();

    const bill = dataList.find(data => data.id === numId);

    const billImages = {
        "Electricity Bill": img1,
        "Gas Bill": img2,
        "Internet Bill": img3,
        "Water Bill": img4,
        "Credit Card Bill": img5,
        "Tuition Fees Bill": img6
    };

    return (
        <div>
            {bill && (
                <div className='max-w-4xl mx-auto  md:p-8 p-4 my-18  rounded-md  bg-base-200'>
                    <div className='bg-base-100 rounded-md md:flex space-y-5 text-center md:text-left justify-around items-center p-10'>
                        <div className='relative justify-items-center'>
                            <img src={billImages[bill.bill_type]} alt="" className='w-64 rounded-md bg-white' />
                            <img width={80} src={bill.icon} alt="" className='absolute left-52  -bottom-4' />
                        </div>
                        <div className='text-primary space-y-4'>
                            <h4 className='font-bold text-xl md:text-2xl'>{bill.organization}</h4>
                            <p className='font-medium text-md md:text-xl'>{bill.bill_type}</p>
                            <p className='font-medium text-md md:text-xl'>Amount: <span className='font-bold'>{bill.amount} BDT</span></p>
                            <p className='font-medium text-md md:text-xl'>Due Date: {bill.due_date} </p>
                            <button className='btn  bg-primary hover:bg-secondary text-base-200 border-0 btn-primary w-full'>Pay Bill</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BillDetails;