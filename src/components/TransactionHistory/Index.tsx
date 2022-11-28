import React from 'react'
import ade from '../../assets/img/ade.svg'
import badmus from '../../assets/img/badmus.svg'
import circle from '../../assets/img/green-circle.svg'

const Index = () => {
    const data = [
        {
            img: ade,
            details: 'Took loan from eazipay',
            date: 'August 15, 2022',
            time: '10:35pm',
            status: 'processing'
        },
        {
            img: badmus,
            details: 'Paid leave allowance..',
            date: 'August 13, 2022',
            time: '9:35pm',
            status: 'processing'
        },
        {
            img: circle,
            details: 'Sent invoice and receipt',
            date: 'August 12, 2022',
            time: '10:39pm',
            status: 'processing'
        },
        {
            img: circle,
            details: 'Sent invoice and receipt',
            date: 'August 12, 2022',
            time: '10:39pm',
            status: 'processing'
        },
        {
            img: circle,
            details: 'Sent invoice and receipt',
            date: 'August 12, 2022',
            time: '10:39pm',
            status: 'processing'
        }
    ]
  return (
    <div className='text-history-grey text-sm'>
      <div className='flex flex-wrap justify-between px-3 md:px-10'>
        <h6>Name</h6>
        <h6>Details</h6>
        <h6>Date</h6>
        <h6>Time</h6>
        <h6>Status</h6>
      </div>
      <div className='flex flex-col gap-3 overflow-y-scroll h-64 pr-10 mt-1'>
      {data.map((data, index)=>(
        <div
        key={index}
        className='flex flex-wrap justify-between items-center border border-placeholder rounded-xl py-1 px-2'
        >
            <div><img src={data.img} alt={data.details}></img></div>
            <p>{data.details}</p>
            <p>{data.date}</p>
            <p>{data.time}</p>
            <p className='text-blue font-medium'>{data.status}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Index
