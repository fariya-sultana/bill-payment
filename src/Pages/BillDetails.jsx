import React, { use, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import img1 from '../assets/nesco-logo-png_seeklogo-382775.png'
import img2 from '../assets/titas.png'
import img3 from '../assets/btlc.png'
import img4 from '../assets/icone3.gif'
import img5 from '../assets/icon4.png'
import img6 from '../assets/tuition.img.png'
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import { Helmet } from 'react-helmet-async';


const BillDetails = () => {

    const { payBill, paidBills } = use(AuthContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const numId = parseInt(id);
    const dataList = useLoaderData();

    const [selectedCard, setSelectedCard] = useState("");
    const bill = dataList.find(data => data.id === numId);

    const cards = [
        { id: 1, name: "Visa Card" },
        { id: 2, name: "Master Card" },
        { id: 3, name: "DBBL Nexus Card" }
    ];

    const billImages = {
        "Electricity Bill": img1,
        "Gas Bill": img2,
        "Internet Bill": img3,
        "Water Bill": img4,
        "Credit Card Bill": img5,
        "Tuition Fees Bill": img6
    };

    const handlePayBill = () => {
        if (!selectedCard) {
            toast.error("Please select a card to proceed.");
            return;
        }

        const success = payBill(bill.id, bill.amount);
        if (success) {
            toast.success(`Paid ${bill.amount} BDT using ${selectedCard}`);
            navigate('/payBills');
        } else {
            toast.error("Payment failed. Either already paid or insufficient balance.");
        }
    }

    return (
        <div>
            <Helmet>
                <title>PayFast | {bill.bill_type}</title>
            </Helmet>
            {bill && (
                <div className='max-w-4xl mx-auto  p-4 my-6 md:my-10  rounded-md  bg-base-200'>
                    <div className='p-2 mb-8 max-w-2xl mx-auto'>
                        <label className="font-medium text-2xl md:text-3xl block mb-3 text-secondary">Select Bank Card</label>
                        <select value={selectedCard}
                            onChange={(e) => setSelectedCard(e.target.value)}
                            className="select select-bordered border-secondary w-full">
                            <option
                            className='bg-secondary text-white'
                                value="">-- Choose a card --</option>
                            {cards.map(card => (
                                <option key={card.id} value={card.name} className='text-secondary text-sm md:text-md font-medium ' >{card.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className='bg-base-100 rounded-md md:flex space-y-5 text-center md:text-left justify-around items-center p-10'>
                        <div className='relative justify-items-center'>
                            <img src={billImages[bill.bill_type]} alt="" className='w-64 rounded-md bg-white' />
                            <img width={60} src={bill.icon} alt="" className='absolute left-56  -bottom-2' />
                        </div>
                        <div className='text-primary space-y-4'>
                            <h4 className='font-bold text-xl md:text-2xl'>{bill.organization}</h4>
                            <p className='font-medium text-md md:text-xl'>{bill.bill_type}</p>
                            <p className='font-medium text-md md:text-xl'>Amount: <span className='font-bold'>{bill.amount} BDT</span></p>
                            <p className='font-medium text-md md:text-xl'>Due Date: {bill.due_date} </p>
                            {
                                paidBills.includes(bill.id) ?
                                    <button className="btn w-full border-0 text-primary shadow-none cursor-not-allowed bg-red-200" aria-disabled="true">Already Paid
                                    </button>
                                    : <button onClick={handlePayBill} className='btn w-full text-base-200 border-0 bg-primary hover:bg-secondary'>Pay Bill</button>
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BillDetails;