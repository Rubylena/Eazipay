import React from 'react'
import member1 from '../../assets/img/roles1.svg'
import member2 from '../../assets/img/roles2.svg'
import member3 from '../../assets/img/roles3.svg'
import member4 from '../../assets/img/roles5.svg'

const Index = () => {
    const data = [
        {
            img: member1,
            name: 'Ada Okonye'
        },
        {
            img: member2,
            name: 'Edward Madaki'
        },
        {
            img: member3,
            name: 'Adekule Ajasin'
        },
        {
            img: member4,
            name: 'Zainab Muhammad'
        }
    ]

    const canAccess =['View Employee', 'Add Bonus and Deduction', 'Add Compliance', 'Edit Compliance', 'Transaction History', 'Fund Wallet', 'Manage Inventory', 'Manage Invoice', 'Manage Receipt', 'Manage Receipt', 'Book Keeping Settings']

    const cannotAccess = ['Purchase or Change Plan', 'Add Employee', 'Edit Employee', 'Add Salary', 'Edit Salary', 'Run Payroll', 'Archive Employee', 'Pay Compliance', 'Fund Wallet', 'Withdraw from Wallet', 'Manage Account', 'Manage Business Profile', 'Manage Team']

    return (
        <div className='font-medium'>
            <div>
                <p>Team Members with the role</p>
                <div className='flex gap-2 flex-wrap my-2'>
                    {data.map((item, index)=>(
                        <div key={index} className='flex gap-2 items-center border border-dark-grey rounded p-1 bg-tint-pink'>
                            <div className='w-5'><img src={item.img} alt={item.name} className='w-full'></img></div>
                            <p className='text-bold-grey text-sm'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-5'>
                <div className='sm:w-1/2'>
                    <p className='bg-blue text-white p-1 text-center'>What Role Can Access</p>
                    {canAccess.map((item, idx)=>(
                        <div key={idx} className='flex justify-between items-center text-bold-grey px-5'>
                            <p className='mt-1.5'>{item}</p>
                            <p className='text-green'>✓</p>
                        </div>
                    ))}
                </div>
                <div className='sm:w-1/2'>
                    <p className='bg-orange text-white text-center p-1'>What Role Cannot Access</p>
                    {cannotAccess.map((item, idx)=>(
                        <div key={idx} className='flex justify-between items-center text-bold-grey px-5'>
                            <p className='mt-1.5'>{item}</p>
                            <p className='text-red'>✕</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index
