import React, { useState } from 'react'
import add from '../../assets/icon/plus2.svg'
import close from '../../assets/icon/close2.svg'
import upload from '../../assets/icon/upload.svg'
import menuIcon from '../../assets/icon/menu.svg'
import ceo1 from '../../assets/img/ceo1.svg'
import ceo2 from '../../assets/img/ceo2.svg'
import ceo3 from '../../assets/img/ceo3.svg'
import passport1 from '../../assets/img/passport1.svg'
import passport2 from '../../assets/img/passport2.svg'
import passport3 from '../../assets/img/passport3.svg'

const Index = () => {
    const [menu, setMenu] = useState(false);

    const data =[
        {
            profileImg: ceo1,
            name: 'Tiamiyu Wasiu Oladimeji',
            email: 'tmwasiu7@gmail.com',
            number: '08160178711',
            bvn: '8160178711',
            address: '16, Adebanjo Ammed Street, Ajah',
            passport: passport1
        },
        {
            profileImg: ceo2,
            name: 'Ejiro Odiamakwu Kelvin',
            email: 'tmwasiu7@gmail.com',
            number: '08160178711',
            bvn: '8160178711',
            address: '16, Adebanjo Ammed Street, Ajah',
            passport: passport2
        },
        {
            profileImg: ceo3,
            name: 'Aderonke Emmanuel Victor',
            email: 'tmwasiu7@gmail.com',
            number: '08160178711',
            bvn: '8160178711',
            address: '16, Adebanjo Ammed Street, Ajah',
            passport: passport3
        }
    ]

    return (
        <section className='flex flex-col md:flex-row justify-center items-center md:items-start gap-5 md:gap-0'>
            <div className='md:w-1/4 text-center md:text-left text-bold-grey'>
                <p className='p-2'>Company</p>
                <p className='font-bold text-orange bg-white p-2'>CEO/Founder</p>
                <p className='p-2'>Company Directors</p>
                <p className='p-2'>Account Information</p>
                <p className='p-2'>Branch/Department</p>
            </div>
            <div className='bg-white md:w-3/4 text-history-grey shadow-md p-5 font-medium'>
            <div className='flex justify-between mb-3'>
                <p className='text-xl md:text-3xl'>Business Owner/CEO/Founder</p>
                <div className='flex gap-2 text-orange border border-hr items-center py-1 px-2 rounded text-sm'>
                <div><img src={add} alt='add' className='w-full'></img></div>
                <p>Add More</p>
                </div>
            </div>
            <hr className='border-dark-grey' />
            <div>
                {data.map((item, idx)=>(
                    <div key={idx} className={`flex flex-col sm:flex-row mt-14 sm:mt-4 border rounded-lg gap-4 ${item.profileImg === ceo1 ? 'border-blue' : item.profileImg === ceo2 ? 'border-dark-grey' : item.profileImg === ceo3 ? 'border-yellow' :''}`}>
                        <div className={`sm:w-1/4 p-2 rounded-l-lg flex flex-col gap-8 ${item.profileImg === ceo1 ? 'bg-blue' : item.profileImg === ceo2 ? 'bg-dark-grey' : item.profileImg === ceo3 ? 'bg-yellow' :''}`}>
                            <div><img src={item.profileImg} alt={item.name} className='w-full'></img></div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col sm:flex-row gap-2 bg-upload-bg text-white py-1 px-2.5 rounded items-center'>
                                    <div><img src={upload} alt='upload' className='w-full'></img></div>
                                    <p>Upload</p>
                                </div>
                                <div className='flex flex-col sm:flex-row gap-2 text-white py-1 px-2.5 rounded items-center border border-upload-bg'>
                                    <div><img src={close} alt='upload' className='w-full'></img></div>
                                    <p>Cancel</p>
                                </div>
                            </div>
                        </div>
                        <div className='sm:w-3/4'>
                            <div className='flex justify-between p-2 mb-3'>
                                <div>
                                    <p className='text-lg md:text-2xl text-dark-bright-blue'>{item.name}</p>
                                    <p><span className='text-dark-grey'>Email:</span> {item.email}</p>
                                    <p><span className='text-dark-grey'>Phone Number:</span> {item.number}</p>
                                    <p><span className='text-dark-grey'>BVN:</span>  {item.bvn}</p>
                                    <p><span className='text-dark-grey'>House Address:</span> {item.address}</p>
                                </div>
                                <div onClick={()=>setMenu(!menu)} className='relative'>
                                    <img src={menuIcon} alt='menu' className='w-full'></img>
                                {menu && (
                                    <div className='bg-white  absolute top-2.5 right-0 text-sm'>
                                        <p className='bg-blue text-white py-1 px-2'>Edit</p>
                                        <p className='py-1 px-2'>Remove</p>
                                    </div>
                                )}
                                </div>
                            </div>
                            <div className='bg-main-bg flex flex-col items-center py-3 pl-2'>
                                <p>Means of Identification</p>
                                <div><img src={item.passport} alt={item.name} className='w-full'></img></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default Index
