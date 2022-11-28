import React from 'react'
import employee from '../../assets/icon/employee.svg'
import payroll from '../../assets/icon/payroll.svg'
import loan from '../../assets/icon/loan.svg'
import inventory from '../../assets/icon/inventory.svg'

const Index = () => {
    const data = [
        {
            img: employee,
            text: 'Add Employee'
        },
        {
            img: payroll,
            text: 'Run Payroll'
        },
        {
            img: loan,
            text: 'Quick Loan'
        },
        {
            img: inventory,
            text: 'Inventory'
        }
    ]
  return (
    <div className='flex gap-5 flex-wrap justify-center'>
      {data.map((card, index)=>(
        <div 
        key={index}
        className='bg-blue flex flex-col items-center justify-center rounded-md text-white p-2 w-32 gap-1 shadow-md'
        >
            <div className='bg-icon-bg py-2 px-1 rounded'><img src={card.img} alt={card.text} className='w-full'></img></div>
            <p className='font-medium text-center'>{card.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Index
