import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProver';

const Login = () => {
  const {signUser} = useContext(AuthContext)
  const locaton = useLocation();
  const navigate = useNavigate();
  const from = locaton.state?.from?.pathname || '/';

    const handleLogin = (e)=>{
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        signUser(email,pass)
        .then(result=>{
          const user = result.user;
         const currentUser ={
          email: user.email
         }
        // console.log(currentUser);
          //jwt
          fetch(`https://y-xi-sand.vercel.app/jwt`,{
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            localStorage.setItem('token',data.token)
            navigate(from, {replace: true})        
            form.reset() 
          })         
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
        <h1 className='text-5xl'>Login</h1>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='py-2 pb-5 ml-8'>New to genius car <Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;