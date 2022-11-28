import React from 'react'
import customer from '../../assets/icon/Company-Logo.svg'
import notify from '../../assets/icon/notification.svg'
import profile from '../../assets/img/profile.svg'
import arrow from '../../assets/icon/right-arrow.svg'

const Index = () => {
  return (
    <nav className='flex flex-col items-center md:flex-row md:justify-between px-20 py-3'>
      <div><img src={customer} alt='customer logo' className='sm:w-full'></img></div>
      <div className='flex gap-6 items-end'>
        <div><img src={notify} alt='notification' className='w-full'></img></div>
        <div className='flex gap-3 items-end sm:items-center sm:ml-10'>
          <div><img src={profile} alt='profile' className='w-full'></img></div>
          <div>
            <p className='text-semi-black font-bold text-sm sm:text-md'>Kalu Abasiama</p>
            <p className='text-grey text-xs sm:text-sm'>Admin</p>
          </div>
        </div>
          <div><img src={arrow} alt='arrow'></img></div>
      </div>
    </nav>
  )
}

export default Index
