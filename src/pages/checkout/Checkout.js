import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthProver';

const Checkout = () => {
    const {_id,title,price} = useLoaderData();
    const {user} = useContext(AuthContext)

    const orderBtn=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = `${form.fname.value } ${form.lname.value}`;
        const email = user?.email || 'Unregister'
        const phone = form.phone.value;
        const message = form.message.value;

        const order={
            service : _id,
            serviceName : title,
            price,
            coustomerName: name,
             email,
             phone,
            message
        }
        fetch(`https://y-xi-sand.vercel.app/orders`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
              console.log(data);
            if(data.acknowledged){
                alert('order success')
                form.reset()
            }
          
        })
        .catch(err=>console.error(err))
        
    }
    return (
        <div className='py-5'>
           <form onSubmit={orderBtn}>
            <h2 className='text-4xl'>{title}</h2>
            <h4 className='text-2xl'>You are orders to {price}</h4>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
           <input name='fname' type="text" placeholder="First Name" className="input input-bordered w-full " />
           <input name='lname' type="text" placeholder="Last Name" className="input input-bordered w-full " />
           <input name='phone' type="text" placeholder="Your phone" className="input input-bordered w-full " required />
           <input name='email' type="text" placeholder="Your email" readOnly defaultValue={user?.email} className="input input-bordered w-full " />

           </div>
           <textarea name='message' className="textarea textarea-bordered h-28 w-full" placeholder="Bio"></textarea>
           <button className="btn btn-success">Please you order</button>
           </form>
        </div>
    );
};

export default Checkout;