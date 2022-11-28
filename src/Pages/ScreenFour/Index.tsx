import React, { useState } from 'react'
import BusinessProfile from '../../components/BusinessProfile/Index'

const Index = () => {
  const [show, setShow] =useState(false);

  return (
    <div className='flex flex-col justify-center gap-7 py-10 px-20 bg-main-bg'>
      <h2 className='text-history-grey'>Settings / Business Profile</h2>
      <p className='font-black text-xl md:text-3xl'>Settings</p>
      <section className='flex gap-3 cursor-pointer text-center flex-wrap md:flex-nowrap text-bold-grey justify-center items-center font-medium'>
        <p>Profile</p>
        <p>Manage Account</p>
        <p className='bg-dark-bright-blue text-white p-2 rounded' onClick={()=>setShow(!show)}>Business Profile</p>
        <p>Team</p>
        <p> Security</p>
        <p> Refer</p>
      </section>

      <BusinessProfile />
    </div>
  )
}

export default Index
