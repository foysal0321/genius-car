import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service,setservice] = useState([]);
    useEffect(()=>{
        fetch('https://y-xi-sand.vercel.app/services')
        .then(res=> res.json())
        .then(data => setservice(data))
    },[])
    return (
        <div>
            <div className="text-center py-8">
         <p className='text-2xl font-bold text-orange-600'>Service</p>
        <h2 className='text-5xl font-bold'>Our Service Area</h2>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                service.map(d => <ServiceCard
                key={d._id}
                service={d}
                ></ServiceCard>)
            }
            </div>
            
            
        </div>
    );
};

export default Service;