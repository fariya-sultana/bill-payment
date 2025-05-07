
import { Link, useLoaderData, useParams } from 'react-router';

const PayBills = () => {

    const dataList = useLoaderData();
    const { type } = useParams();
    const formattedType = type?.replace(/-/g, ' ').toLowerCase();

    
    const filteredBills = type ? dataList.filter(data => data.bill_type.toLowerCase() === formattedType) : dataList;
    

    return (
        <div className='max-w-3xl mx-auto my-12 bg-base-200 p-4 md:p-8 rounded-md'>
            <h1 className='text-3xl font-medium text-primary mb-6'>{type ? `${type}` : "All Bills"}</h1>

            <div className=' grid gap-8 '>
                {
                    filteredBills.map(data =>
                        <div key={data.id} className='flex justify-between bg-white items-center p-4 rounded-md'>
                            <img src={data.icon} alt="" className='md:w-25 w-15' />
                            <div className='text-center'>
                                <p className='text-md md:text-xl font-medium text-secondary'>{data.organization}</p>
                                <p className='text-xl md:text-2xl font-bold text-primary'>{data.bill_type}</p>
                            </div>
                            <div>
                                <Link to={`/billDetails/${data.id}`} className='btn  bg-secondary hover:bg-base-100 hover:text-primary text-base-200 border-0'>Pay</Link>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default PayBills;