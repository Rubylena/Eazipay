import React, { useState } from 'react'
import eye from '../../assets/icon/eye-icon.svg'
import graph from '../../assets/img/graph.svg'
import sortIcon from '../../assets/icon/sort-icon.svg'
import rightArrow from '../../assets/icon/right-arrow.svg'
import downArrow from '../../assets/icon/down-arrow.svg'
import search from '../../assets/icon/search-icon.svg'
import PageOneCard from '../../components/PageOneCard/Index'
import TransactionHistory from '../../components/TransactionHistory/Index'

const Index = () => {
  const [sort, setSort] = useState(false);

  return (
    <main className='flex flex-col justify-center gap-6 py-10 px-20 bg-main-bg'>
      <section>
        <h1 className='text-3xl font-bold'>Welcome Abasiama</h1>
        <p className='font-medium'>Pay and manage your employee in minutes</p>
      </section>

      <section className='flex flex-col md:flex-row gap-10 justify-between'>
      <div className='flex flex-col gap-5'>
        <div className='dashboard text-white p-5 rounded-md shadow-md'>
          <p className='font-medium'>Wallet Balance</p>
          <div className='flex items-center justify-between flex-col md:flex-row gap-2'>
            <div className='flex gap-1 items-center'>
              <p className='font-black text-lg md:text-3xl'>N12,560,078.00</p>
              <div className='bg-dark-blue p-1'><img src={eye} alt='eye' className='w-full'></img></div>
            </div>
            <div className='p-2 bg-dark-blue rounded'>
              <p className='font-medium'>Fund Wallet</p>
            </div>
          </div>
        </div>

        <div>
          <PageOneCard />
        </div>
      </div>

      <div className='text-greyish bg-white'>
        <div className='rounded-lg shadow-md text-center'>
          <p className='bg-orange rounded-t-lg px-5 text-white py-1'>Active Loans</p>
          <div className='px-5 py-2'>
          <p className='text-xs'>Net Repayment</p>
          <p className='text-sm font-medium'>September 20, 2022</p>
          <p className='font-bold text-orange'>N100,000.00</p>
          </div>
        </div>
        <div className='p-5 shadow-sm'>
          <p className='font-medium'>Total Employee</p>
          <p className='font-black text-3xl'>50</p>
          <div className='flex'>
            <p className='text-dark-bright-blue border-4 w-1/4'></p>
            <p className='text-orange border-4 w-3/4'></p>
          </div>
          <div className='flex justify-between font-semibold text-xs'>
            <p>Male</p>
            <p>Female</p>
          </div>
        </div>
      </div>
      </section>

      <section className='bg-white rounded-lg flex flex-col p-10'>
        <div className='flex flex-wrap md:flex-row gap-7 text-greyish font-medium items-center justify-center md:justify-start'>
          <div>
            <p>Inflow</p>
            <p className='text-green font-black text-xl md:text-3xl'>N1,567,552</p>
          </div>
          <div>
            <p>Outflow</p>
            <p className='text-orange font-black text-xl md:text-3xl'>N1,567,552</p>
          </div>
          <div className='border relative flex p-1' >
            <div className='flex gap-2 items-center' onClick={()=>setSort(!sort)}>
            <div><img src={sortIcon} alt='sort' className='w-full'></img></div>
            <p className='text-dark-grey text-xs'>Sort By</p>
            <p className='text-xs font-medium text-dark-bright-blue'>Month</p>
            </div>
          {sort && (
            <div className='absolute top-7 left-0 w-28 text-xs bg-white'>
              <div className='bg-white flex items-center justify-between px-4 py-1'>
                <p>Custom</p>
                <div><img src={rightArrow} alt='right arrow' className='w-full'></img></div>
              </div>
              <p className='bg-blue text-white px-4 py-1'>Month</p>
              <p className='px-4 py-1'>Year</p>
            </div>
          )}
          </div>
          <div className='text-dark-bright-blue flex gap-2 items-center text-xs'>
            <p>Inflow/Outflow</p>
            <div className=''><img src={downArrow} alt='down arrow' className=''></img></div>
          </div>
        </div>
        <div className=''><img src={graph} alt='graph' className=''></img></div>
      </section>

      <section className='flex flex-col gap-4'>
        <h2 className='text-3xl font-medium text-bold-grey'>Recent Activities</h2>
        <div className='flex'>
          <input type='text' placeholder='Search recent activities'
          className='focus:outline-none border border-placeholder w-full py-2 px-5 rounded-l-xl placeholder:text-xs placeholder:placeholder'
          />
          <div className='bg-orange flex items-center px-5 rounded-r-xl'>
            <div><img src={search} alt='search' className='w-full'></img></div>
          </div>
        </div>
        <div>
          <TransactionHistory />
        </div>
      </section>
    </main>
  )
}

export default Index
