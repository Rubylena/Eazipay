import React, { useMemo } from 'react'
import Table from '../Table/Index'
import profile1 from '../../assets/img/payrollHist1.svg'
import profile2 from '../../assets/img/profhist2.svg'
import profile3 from '../../assets/img/profhist3.svg'
import profile4 from '../../assets/img/profhist4.svg'
import profile5 from '../../assets/img/profhist5.svg'
import profile6 from '../../assets/img/profhist6.svg'
import profile7 from '../../assets/img/profhist7.svg'
import profile8 from '../../assets/img/profhist8.svg'
import profile9 from '../../assets/img/profhist9.svg'
import profile10 from '../../assets/img/profhist10.svg'

const Index = () => {

  const data = useMemo(() => [
      {
        box: '☐',
        img: profile1,
        fName: 'Wasiu',
        lName: 'Tiamiyu',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Paid'
      },
      {
        box: '☐',
        img: profile2,
        fName: 'Oyinkosola',
        lName: 'Tiamiyu',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Failed'
      },
      {
        box: '☐',
        img: profile3,
        fName: 'Toyin',
        lName: 'Faleke',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Pending'
      },
      {
        box: '☐',
        img: profile4,
        fName: 'Ada',
        lName: 'Ofuomalu',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Failed'
      },
      {
        box: '☐',
        img: profile5,
        fName: 'Edward',
        lName: 'Madaki',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Paid'
      },
      {
        box: '☐',
        img: profile6,
        fName: 'Innocent',
        lName: 'Madaki',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Paid'
      },
      {
        box: '☐',
        img: profile7,
        fName: 'Rashidat',
        lName: 'Oluwasegun',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Paid'
      },
      {
        box: '☐',
        img: profile8,
        fName: 'Tunde',
        lName: 'Kelani',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Paid'
      },
      {
        box: '☐',
        img: profile9,
        fName: 'Efosa',
        lName: 'The Boss',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Pending'
      },
      {
        box: '☐',
        img: profile10,
        fName: 'Sandra',
        lName: 'Odinakachi',
        gross: 'N356,015.94',
        net: 'N356,015.94',
        date: '02/09/2022',
        status: 'Pending'
      },
    ], [])

  const columns = useMemo(
    () => [
          {
            Header: '☐',
            accessor: 'box',
          },
          {
            Header: 'FIRST NAME',
            accessor: 'fName',
            // aggregate: 'count',
            // Aggregated: ({ value }:any) => `${value} Names`,
            Cell: ({ row }:any) => {
              return(
                <div className='flex gap-2 items-center'>
                  <div className='w-8'><img src={row.original.img} alt='profile' className='w-full'></img></div>
                  <p>{row.original.fName}</p>
                </div>
              )
            }
          },
          {
            Header: 'LAST NAME',
            accessor: 'lName',
          },
          {
            Header: 'GROSS PAY',
            accessor: 'gross',
          },
          {
            Header: 'NET PAY',
            accessor: 'net',
          },
          {
            Header: 'DATE PAID',
            accessor: 'date',
          },
          {
            Header: 'STATUS',
            accessor: 'status',
            Cell: ({ cell: { value, idx } }:any) => {
              return(
                <div key={idx} 
                className={value === 'Paid'? 'text-green font-bold' : value === 'Failed' ? 'text-orange font-bold' : value === 'Pending' ? 'text-purple font-bold' : ''}>
                  {value}
                </div>
              )
            }
          }
    ],
    []
  )

  return (
    <div>
      <Table
      columns={columns}
      data={data}
      />
    </div>
  )
}

export default Index
