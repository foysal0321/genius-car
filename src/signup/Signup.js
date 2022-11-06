import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import  { AuthContext } from '../Context/AuthProver';

const Signup = () => {
  const {createUser} = useContext(AuthContext)

    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;

        createUser(email,pass)
        .then(result=>{
          const user = result.user
          console.log(user);
          form.reset()
        })
        .catch(err=>{
          console.error(err);
        })
        
        
    }
    return (
        <div className="hero w-full">
        <div className="hero-content flex-col gap-20 grid md:grid-cols-2 lg:flex-row">
          <div className="text-center lg:text-left">
            <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className='text-5xl'>Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='pass' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
            <p className='py-2 pb-5 ml-8'>Already have an accound <Link className='text-orange-600 font-bold' to='/login'>Log in</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;