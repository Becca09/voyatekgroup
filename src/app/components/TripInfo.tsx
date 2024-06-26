import React from 'react'
import { Icon } from './Icon'
import Image from 'next/image'


interface TripInfoProps {
    startDate: string,
    endDate: string
    nameOfTrip: string
    country: string
    typeOfTrip: string
}

const TripInfo = ({ startDate, endDate, nameOfTrip, country, typeOfTrip }: TripInfoProps) => {
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div className='mt-10  w-[50%] '>
                    <div className='bg-secondary-500 text-secondary-600 flex flex-row gap-2 items-center px-4 py-1 mb-7 max-w-max '>
                        <Icon id="calender" className="h-6 w-6 mt-2" />
                        <p className="font-bold text-xs">{startDate}</p>
                        <p className="font-bold text-xs">To</p>
                        <Icon id="arrow-right" className="h-6 w-6 mt-3" />
                        <p className="font-bold text-xs">{endDate}</p>

                    </div>




                </div>

                <div className="ml-3 flex flex-col justify-between">
                    <div className='flex items-center gap-7 mx-5 mt-10'>
                        <div className='bg-primary-200 rounded- px-10 py-2'>
                            <Icon id="user-plus" className="w-4 h-4" />
                        </div>
                        <Icon id="three-dots" className="w-7 h-7" />

                    </div>

                </div>
            </div>

            <div className='flex flex-row justify-between -mt-3'>
                <div>
                    <h1 className='font-bold text-2xl'>{nameOfTrip}</h1>
                    <div className='flex flow-row gap-2 text-primary-400'>
                        <p className='border-r border-slate-400 pr-5'>{country}</p>
                        <p className='pl-3'>{typeOfTrip}</p>
                    </div>
                </div>
                <div className=" flex flex-row">
                    <Image
                        src="/assets/images/user2.jpg"
                        width={70}
                        height={70}
                        alt=""
                        className="rounded-full"
                    />
                    <Image
                        src="/assets/images/xx.jpg"
                        width={70}
                        height={70}
                        alt=""
                        className="rounded-full"
                    />

                </div>
            </div>

        </div>

    )
}

export default TripInfo
