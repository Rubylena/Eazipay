import React from 'react'
import close from '../../assets/icon/close.svg'
import add from '../../assets/icon/plus.svg'
import edit from '../../assets/icon/edit.svg'
import Members from '../../components/Members/Index'

const Index = () => {
  return (
    <section className='bg-white p-5 sm:p-10 rounded-lg'>
        <div className='flex justify-between mb-5'>
          <p className='text-xl md:text-3xl text-bold-grey font-medium'>Manage Roles</p>
          <div><img src={close} alt='close' className='w-full'></img></div>
        </div>
        <hr className='border-dark-grey' />
        <div className='flex flex-col md:flex-row gap-10 md:gap-5 mt-5'>
          <div className='md:w-1/4 text-dark-grey flex flex-col gap-3 font-medium'>
            <p className='bg-blue text-white text-xs p-1'>DEFAULT ROLES</p>
            <p className='p-1'>Admin</p>
            <p className='p-1'>Assistant</p>
            <p className='p-1'>Auditor</p>
            <p className='text-bold-grey p-1'>Custom Roles</p>
            <p className='text-orange bg-tint-pink p-1 font-bold'>Head Account</p>
            <span className='p-1 text-xs'>You can create your own custom roles, and choose exactly what team members can see and do.</span>
            <button className='bg-orange outline-none text-white flex gap-3 items-center justify-center rounded-md p-1 md:p-2'>
              <div><img src={add} alt='add' className='w-full' ></img></div>
              <p className='text-xs md:text-sm'>Create New Role</p>
            </button>
          </div>
          <div className='md:w-3/4 border-l border-dark-grey h-full pl-5'>
            <div className='flex flex-col gap-2 md:flex-row md:justify-between'>
              <h3 className='text-xl md:text-3xl text-orange'>Head Account</h3>
              <div className='flex gap-2 bg-orange text-white py-1 px-3 font-medium rounded-md items-center'>
                <p>Edit</p>
                <div><img src={edit} alt='edit' className='w-full'></img></div>
              </div>
            </div>
            <p className='font-medium text-bold-grey mt-3 mb-5'>Head make sure that financial reports are up-to-date and compliant with standards. They produce periodic activity updates for top management and an annual budget proposal.</p>
            <Members />
          </div>
        </div>
      </section>
  )
}

export default Index
