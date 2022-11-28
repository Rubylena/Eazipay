import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icon/eazipay.svg'
import home from '../../assets/icon/home.svg'
import './dashboard.scss'

const Index = () => {
  const activePath = window.location.pathname.split("/")[1];
  const [path] = useState(activePath);

  return (
    <aside className='md:border-r md:border-hr flex flex-col'>
      <div className='dashboard p-10 flex justify-center items-center'>
        <div><img src={logo} alt='logo' className='md:w-full'></img></div>
      </div>
      <div className='md:overflow-y-scroll h-full'>
      <div className={`h-full mt-5 ${path !== '' && 'hidden'}`}>
        <Link to='/'><div className={`flex gap-3 mb-3 justify-center`}>
          <div><img src={home} alt='home' className='w-full'></img></div>
          <p className='text-orange font-bold'>DASHBOARD</p>
        </div></Link>
        <hr className='border-hr w-screen md:w-full ' />
      </div>
      </div>
    </aside>
  )
}

export default Index
