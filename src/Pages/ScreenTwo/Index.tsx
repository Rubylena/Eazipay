import React, { useState } from 'react'
import arrow from '../../assets/icon/left-arrow.svg'
import search from '../../assets/icon/search-icon.svg'
import download from '../../assets/icon/download.svg'
import share from '../../assets/icon/share.svg'
import print from '../../assets/icon/printer.svg'
import Filter from '../../components/Filter/Index'
import PayrollHistory from '../../components/PayrollHistory/Index'
import { Link } from 'react-router-dom'


const Index = () => {
  const [filter, setFilter] = useState(false);
  const [semiFilter, setSemiFilter] = useState(false);
  const [box, setBox] = useState(false);
  const [tick, setTick] = useState(false);

  return (
    <main className='flex flex-col justify-center gap-7 py-10 px-20 bg-main-bg'>
      <Link to='/two'><h2 className='text-history-grey'>Payroll / Payroll History</h2></Link>

      <div className='flex gap-3 items-center text-bold-grey'>
        <div><img src={arrow} alt='back' className='w-full'></img></div>
        <Link to='/ '><p>Back</p></Link>
      </div>

      <section className='flex justify-center items-center gap-7 flex-wrap md:flex-nowrap'>
        <div className='flex md:w-3/6'>
          <input type='text' placeholder='Search employee'
          className='focus:outline-none border border-placeholder w-full py-2 px-5 rounded-l-xl placeholder:text-xs placeholder:placeholder'
          />
          <div className='bg-orange flex items-center px-5 rounded-r-xl'>
            <div><img src={search} alt='search' className='w-full'></img></div>
          </div>
        </div>
        <div className='md:w-1/6'>
          <Filter />
        </div>
        <p className='md:w-1/6 bg-dark-bright-blue text-white p-2 rounded-md font-medium text-center text-xs md:text-base'>Run Payroll</p>
        <p className='md:w-1/6 bg-orange text-white p-2 rounded-md font-medium text-center text-xs md:text-base'>Send Payslip(s)</p>
      </section>

      <h3 className='text-center text-2xl text-bold-grey'>Total Run Payroll For August 2022</h3>

      <section className='justify-center md:justify-center flex gap-2 md:gap-0.5 flex-wrap lg:flex-nowrap font-medium text-center shadow-lg rounded-md p-0.5'>
        <div className='bg-pink  rounded-l-md p-2 px-7'>
          <p>Total Staff Paid</p>
          <p className='text-xl md:text-3xl'>120</p>
        </div>
        <div className='bg-tint-blue  p-2 px-7'>
          <p>Total Gross Salary</p>
          <p className='text-xl md:text-3xl'>N10,234,654.00</p>
        </div>
        <div className='bg-tint-orange p-2 px-7'>
          <p>Total Net Salary</p>
          <p className='text-xl md:text-3xl'>N10,234,654.00</p>
        </div>
        <div className='bg-tint-green p-2 px-7 rounded-r-md'>
          <p>Total Deduction</p>
          <p className='text-xl md:text-3xl'>N234,654.00</p>
        </div>
      </section>

      <section>
        <div className='flex flex-col sm:flex-row items-center sm:items-start justify-between mb-1'>
          <h4 className='font-black text-lg md:text-3xl'>AUGUST 2022</h4>
          <div className='flex gap-2 md:gap-5 font-medium text-xs md:text-sm'>
            <div className='flex gap-2 border border-hr px-0.5 md:p-1 items-center rounded-md'>
              <p>Download</p>
              <div><img src={download} alt='download' className='w-full'></img></div>
            </div>
            <div className='flex gap-2 border border-hr px-0.5 md:p-1 items-center rounded-md'>
              <p>Share</p>
              <div><img src={share} alt='share' className='w-full'></img></div>
            </div>
            <div className='flex gap-2 border border-hr px-0.5 md:p-1 items-center rounded-md'>
              <p>Print</p>
              <div><img src={print} alt='print' className='w-full'></img></div>
            </div>
          </div>
        </div>
        <hr className=' border-dark-grey border-2' />
        <div className='-mx-10 mt-3'>
          <p className='text-right text-sm text-bold-grey'>1-50 of 210</p>
          <PayrollHistory />
          <div className='flex gap-5 justify-center items-center mt-5' >
            <div className='flex items-center gap-2'>
              <p className='font-bold'>Page</p>
              <p className='border border-hr
              py-1 px-1.5 rounded-md'>1</p>
              <p className='font-bold'>of</p>
              <p className='border border-hr
              py-1 px-1.5 rounded-md'>5</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='text-dark-grey'>{'<'}</div>
              <div className='bg-tab py-1 px-1.5 rounded-md font-bold'>{'>'}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Index
