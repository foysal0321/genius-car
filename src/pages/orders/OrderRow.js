import React, { useEffect, useState } from 'react';

const OrderRow = ({orders,btn,upbtn}) => {
    const {serviceName,price, _id, coustomerName,phone,service,status} = orders;
    const [orderService,orderSetservice] = useState({})

    useEffect(()=>{
        fetch(`https://y-xi-sand.vercel.app/services/${service}`)
        .then(res=> res.json())
        .then(data => orderSetservice(data))
    },[service])

   
    return (
        <tr>
        <th>
          <label>        
           <button onClick={()=> btn(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {
                    orderService?.img &&                
                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                 }
              </div>
            </div>
            <div>
              <div className="font-bold">{coustomerName}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
         {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button onClick={()=> upbtn(_id)} className="btn btn-ghost btn-xs">{status ? status :'Pending'}</button>
        </th>
      </tr>
    );
};

export default OrderRow;