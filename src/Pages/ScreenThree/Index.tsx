import React, { useState } from 'react'
import TeamSettings from '../../components/TeamSettings/Index'
import BusinessProfile from '../../components/BusinessProfile/Index'
import { Link } from 'react-router-dom';

const Index = () => {
  const [show, setShow] =useState(false);

  return (
    <div className='flex flex-col justify-center gap-7 py-10 px-20 bg-main-bg'>
      <Link to='/three'><h2 className='text-history-grey'>Settings / Manage Account</h2></Link>
      <p className='font-black text-xl md:text-3xl'>Settings</p>
      <section className='flex gap-3 cursor-pointer flex-wrap md:flex-nowrap text-center text-bold-grey  justify-center items-center font-medium'>
        <p>Profile</p>
        <p>Manage Account</p>
        <p>Business Profile</p>
        <p className='bg-dark-bright-blue text-white p-2 rounded' onClick={()=>setShow(!show)}>Team</p>
        <p> Security</p>
        <p> Refer</p>
      </section>

      {!show && (
        <TeamSettings />
      )}
    </div>
  )
}

export default Index
