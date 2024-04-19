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
                    <div className='bg-secondary-500 text-secondary-600 flex flex-row gap-3 items-center px-4 py-1 h-10 mb-7'>
                        {/* <div><Icon id="calender" className="" /></div> */}
                        <div><p className="font-bold">{startDate}</p></div>
                        <div><p className="font-bold">To</p></div>
                        {/* <div><Icon id="arrow-right" className="" /></div> */}
                        <div><p className="font-bold">{endDate}</p></div>

                    </div>




                </div>

                <div className="ml-3 flex flex-col justify-between">
                    <div className='flex items-center gap-7 mx-5 mt-10'>
                        <div className='bg-primary-200 rounded- px-10 py-2'>
                            <Icon id="user-plus" className="w-4 h-4" />
                        </div>
                        <h1>...</h1>
                    </div>

                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <div>
                    <h1>{nameOfTrip}</h1>
                    <div className='flex flow-row gap-2 text-primary-400'>
                        <p className='border-r border-slate-400 pr-5'>{country}</p>
                        <p className='pl-5'>{typeOfTrip}</p>
                    </div>
                </div>
                <div className="mt-2 flex flex-row gap-4 ">
                    <Image
                        src="/assets/images/user2.jpg"
                        width={40}
                        height={40}
                        alt=""
                        className="rounded-full"
                    />
                    <Icon id="settings" className="h-6 w-6 mt-3" />
                </div>
            </div>

        </div>

    )
}

export default TripInfo
