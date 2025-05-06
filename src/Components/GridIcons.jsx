import React, { use } from 'react';
import GridIconCard from './GridIconCard';
import icon1 from '../assets/easy-to-use-icon-emoji-sticker-free-png..webp'
import icon2 from '../assets/svg.png'
import icon3 from '../assets/images (4).png'
import icon4 from '../assets/woman-.png'


const dataPromise = fetch("/BillsData.json").then(res => res.json());

const GridIcons = () => {

    const data = use(dataPromise);
    
    return (
        <div className='max-w-7xl mx-auto  rounded-md mt-8 md:mt-12 px-4'>

            <section className=''>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-4'>
                    {
                        data.map(singleData => <GridIconCard key={singleData.id} singleData={singleData}></GridIconCard>)
                    }
                </div>

            </section>

            <section className='bg-base-200 grid grid-cols-1 lg:grid-cols-2  p-8 md:p-18 rounded-md gap-6 md:mt-18 mt-12'>

                <div className='bg-white flex gap-4 items-center flex-col md:flex-row text-center md:text-left p-4 rounded-md'>
                    <img src={icon1} alt="" width={90} />
                    <div className='text-primary space-y-3 pl-2'>
                        <h2 className='font-bold text-2xl'>Easy to Use</h2>
                        <p className='font-medium'>You can easily add money onto the card directly from PayFast App. Additionally, you can load your card at any of the 130,000+ PayFast Agents across the country</p>
                    </div>
                </div>

                <div className='bg-white flex gap-4 items-center p-4 rounded-md flex-col md:flex-row text-center md:text-left'>
                    <img src={icon2} alt="" width={100} />
                    <div className='text-primary space-y-3'>
                        <h2 className='font-bold text-2xl'>No Bank Account Needed</h2>
                        <p className='font-medium'>Anyone can easily obtain an UCB-PayFast co-branded prepaid card without the need of any physical document or applications</p>
                    </div>
                </div>

                <div className='bg-white flex gap-4 items-center p-4 rounded-md flex-col md:flex-row text-center md:text-left'>
                    <img src={icon4} alt="" width={100} />
                    <div className='text-primary space-y-3'>
                        <h2 className='font-bold text-2xl'>Complete Control from App</h2>
                        <p className='font-medium'>You can access your card related information, like card balance and transaction directly from PayFast app</p>
                    </div>
                </div>

                <div className='bg-white flex gap-4 items-center p-4 rounded-md flex-col md:flex-row text-center md:text-left'>
                    <img src={icon3} alt="" width={100} />
                    <div className='text-primary space-y-3'>
                        <h2 className='font-bold text-2xl'>Safe & Secure Payments</h2>
                        <p className='font-medium'>Secure transactions guaranteed! Our robust payment system employs advanced encryption and fraud prevention, ensuring your financial data stays safe and protected.</p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default GridIcons;