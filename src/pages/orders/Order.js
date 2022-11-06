import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProver';
import OrderRow from './OrderRow';

const Order = () => {
    const {user, logOut} = useContext(AuthContext)
    const [order,setorders] = useState([]);

    useEffect(()=>{
        fetch(`https://y-xi-sand.vercel.app/orders?email=${user?.email}`,{
           headers : {
            authorization: `Bearer ${localStorage.getItem('token')}`
           }
        })
        .then(res=> {
            if(res.status === 401 || res.status === 403){
               return logOut()
            }
           return res.json()
        })
        .then(data =>{

             setorders(data)
        })
    },[user?.email ,logOut])

    const handleDelete=(id)=>{
        const proces =window.confirm('Are you sure order delete!')
        if(proces){
            fetch(`https://y-xi-sand.vercel.app/orders/${id}`,{
                method: 'DELETE',
                headers : {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                   }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Delete success')
                    const remine = order.filter(or => or._id !== id);
                    setorders(remine)
                }
            })
        }
    }

    const updateBtn = (id)=>{
        fetch(`https://y-xi-sand.vercel.app/orders/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){   
            const remain = order.filter(ord => ord._id !== id)
            const appored = order.find(ord => ord._id === id)
            appored.status = 'Apporved'
            const newApp = [appored,...remain];
            setorders(newApp)
            console.log(data);
        }
        })
    }
    return (
        <div>
            <h2 className="text-2xl">your have : {order.length}  orders</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        order.map(ord => <OrderRow
        key={ord._id}
        orders={ord}
        btn={handleDelete}
        upbtn={updateBtn}
        ></OrderRow>)       
     }
     
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default Order;