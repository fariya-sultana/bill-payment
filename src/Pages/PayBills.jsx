
import { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { Helmet } from 'react-helmet-async';

const PayBills = () => {

    const { paidBills } = use(AuthContext);
    const dataList = useLoaderData();
  
    const [selectedType, setSelectedType] = useState("");
    
    const billTypes = [...new Set(dataList.map(bill => bill.bill_type))];

    const filteredBills = selectedType
        ? dataList.filter(bill => bill.bill_type === selectedType)
        : dataList;


    return (
        <div className='max-w-3xl md:mx-auto my-8 bg-base-200 p-4 md:p-8 rounded-md mx-4'>
            <Helmet>
                <title>PayFast | PayBills</title>
            </Helmet>
            <h1 className='text-3xl font-medium text-primary mb-6 text-center'>Pay Bills</h1>

            <div className="mb-6">
                <label className="font-medium text-xl md:text-2xl block mb-3 text-secondary">Filter by Bill Type</label>
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className='select select-bordered w-full border-secondary'
                >
                    <option className='bg-secondary text-white' value="">-- All Bill Types --</option>
                    {billTypes.map((type, idx) => (
                        <option className='text-secondary text-sm md:text-md font-medium ' key={idx} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div className=' grid gap-8 '>
                {
                    filteredBills.map(data =>
                        <div key={data.id} className='flex justify-between bg-white items-center md:p-4 p-2 rounded-md'>
                            <img src={data.icon} alt="" className='md:w-25 w-15' />
                            <div className='text-center'>
                                <p className='text-md md:text-xl font-medium text-secondary'>{data.organization}</p>
                                <p className='text-xl md:text-2xl font-bold text-primary'>{data.bill_type}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Link to={`/billDetails/${data.id}`} className={`btn btn-xs md:btn-md text-base-200 border-0 ${paidBills.includes(data.id)
                                    ? 'bg-primary hover:bg-secondary'
                                    : 'bg-secondary hover:bg-primary'
                                    }`}
                                >{paidBills.includes(data.id) ? 'Paid' : 'Pay'}</Link>
                                {paidBills.includes(data.id) && <span className='text-green-600 text-xl'>✅</span>}
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default PayBills;