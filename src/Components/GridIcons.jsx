import React, { use } from 'react';
import GridIconCard from './GridIconCard';
import icon1 from '../assets/easy-to-use-icon-emoji-sticker-free-png..webp'
import icon2 from '../assets/svg.png'
import icon3 from '../assets/images (4).png'
import icon4 from '../assets/woman-.png'
import svg1 from '../assets/nesco-logo-png_seeklogo-382775.png'
import svg2 from '../assets/btlc.png'
import svg3 from '../assets/titas.png'
import svg4 from '../assets/karnupuli.png'
import svg5 from '../assets/icon.png'
import svg6 from '../assets/icon4.png'
import svg7 from '../assets/icone3.gif'
import png1 from '../assets/customer-service.png'
import png2 from '../assets/bank.png'
import png3 from '../assets/connection.png'
import png4 from '../assets/transaction.png'


const dataPromise = fetch("/BillsData.json").then(res => res.json());

const GridIcons = () => {

    const data = use(dataPromise);

    return (
        <div className='max-w-7xl mx-auto  rounded-md mt-8 md:mt-12 px-4'>

            <section className='mb-8 md:mb-12'>
                <div className="carousel rounded-box max-w-7xl h-50 gap-4">
                    <div className="carousel-item bg-white rounded-md">
                        <img
                            className='rounded-md'
                            src={svg1}
                            alt="Burger" />
                    </div>
                    <div className="carousel-item bg-white rounded-md">
                        <img
                            className='rounded-md'
                            src={svg2}
                            alt="Burger" />
                    </div>
                    <div className="carousel-item bg-white rounded-md">
                        <img
                            className='rounded-md'
                            src={svg7}
                            alt="Burger" />
                    </div>
                    <div className="carousel-item bg-white rounded-md">
                        <img
                            className='rounded-md'
                            width={200}
                            src={svg4}
                            alt="Burger" />
                    </div>
                    <div className="carousel-item bg-white rounded-md">
                        <img
                            className='rounded-md'
                            src={svg5}
                            alt="Burger" />
                    </div>
                    <div className="carousel-item bg-white rounded-md">
                        <img
                            className='rounded-md'
                            src={svg6}
                            alt="Burger" />
                    </div>
                    <div className="carousel-item bg-white rounded-md">
                        <img
                            className='rounded-md'
                            src={svg3}
                            width={200}
                            alt="Burger" />
                    </div>
                </div>
            </section>

            <section className='bg-base-200 p-4 md:p-8 rounded-md'>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-between gap-6'>
                    {
                        data.map(singleData => <GridIconCard key={singleData.id} singleData={singleData}></GridIconCard>)
                    }
                </div>

            </section>

            <section className='bg-base-200 p-4 md:p-8 rounded-md mt-8 md:mt-12 md:flex justify-around grid grid-cols-2 gap-6 justify-items-center'>
                <div className='flex gap-4'>
                    <img src={png4} alt="" width={40} />
                    <div className='text-primary'>
                        <h4 className='font-medium text-lg'>Transfer
                        </h4>
                        <p className='font-bold text-2xl'>15 <span>M</span></p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src={png1} width={40} alt="" />
                    <div className='text-primary'>
                        <h4 className='font-medium text-lg'>Services
                        </h4>
                        <p className='font-bold text-2xl'>70</p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <img src={png2} alt="" width={40} />
                    <div className='text-primary'>
                        <h4 className='font-medium text-lg'>Banks
                        </h4>
                        <p className='font-bold text-2xl'>30</p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <img src={png3} alt="" width={40} />
                    <div className='text-primary'>
                        <h4 className='font-medium text-lg'>Billers</h4>
                        <p className='font-bold text-2xl'>18</p>
                    </div>
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