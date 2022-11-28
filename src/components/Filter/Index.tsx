import React, { useState } from 'react'
import sortIcon from '../../assets/icon/sort-icon.svg'
import tickIcon from '../../assets/icon/tick.svg'
import FilterOption from '../../components/FilterOption/Index'

const Index = () => {
    const [filter, setFilter] = useState(false);
    const [semiFilter, setSemiFilter] = useState(false);
    const [box, setBox] = useState(false);
    const [tick, setTick] = useState(false);

    const data = ['All', 'A-Z', 'Z-A', 'Highest to Least Paid', 'Least to Hightest Paid']
    const dataTwo = ['Paid', 'Failed', 'Pending']

    const [checked, setChecked] = useState({
        all: false
      });

      const handleChange = (e: any) => {
        const { name, checked } = e.target;
        setChecked({ ...checked, [name]: checked });
      };

    return (
        <div className='relative'>
            <div className='border border-placeholder flex flex-wrap py-2.5 px-4 rounded-md gap-3 items-center justify-center' onClick={()=>setFilter(!filter)}>
                <div className='flex gap-3'>
                    <div><img src={sortIcon} alt='sort' className='w-full'></img></div>
                    <p className='text-dark-grey text-xs'>Filter</p>
                </div>
                <p className='text-xs font-medium text-dark-bright-blue'>All</p>
            </div>
            {filter && (
                <div className='absolute top-10 -left-12 w-48 text-xs bg-white'>
                {data.map((item, index)=>(
                    <div key={index} className='px-2 mt-4'>
                        <FilterOption
                        checkbox={checked.all}
                        name={item}
                        onChecked={handleChange}
                        child={item}
                        />
                    </div>
                ))}
                <p className='relative bg-blue text-white p-2 mt-2' onClick={()=>setSemiFilter(!semiFilter)}>Payment Status</p>
                {semiFilter && (
                    <div className='absolute sm:-bottom-14 sm:-left-24 bg-white'>
                    {dataTwo.map((item, index)=>(
                        <div key={index} className='px-2 mt-4'>
                            <FilterOption
                            checkbox={checked.all}
                            name={item}
                            onChecked={handleChange}
                            child={item}
                            />
                        </div>
                    ))}
                    </div>
                )}
                </div>
            )}
            </div>
    )
}

export default Index
