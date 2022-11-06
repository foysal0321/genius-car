import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 relative">
        <img src={person} alt="" className='w-4/5 h-full'/>
        <img className='absolute w-3/5 right-5 border-8 top-1/2' src={parts} alt="" />
    </div>
    
    <div className='w-1/2'>
        <p className='text-orange-600 font-bold'>About Us</p>
      <h1 className="text-5xl font-bold pt-4">
We are qualified & of experience in this field</h1>
      <p className="mt-4 py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <br />
      <p className='py-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-primary mt-5">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;