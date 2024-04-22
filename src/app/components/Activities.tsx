import React from 'react'
import Image from 'next/image'
import { Icon } from './Icon'

const Activities = () => {
    return (
        <div className='mt-7'>
            <div className=''>
                <div className='bg-primary-50 p-4 border-b 0'>
                    <div className=' flex flex-row justify-between'>
                        <div className='flex flex-row gap-2 mt-2'>
                            <Icon id="activity" className='h-6 w-6' />
                            <p className='text-white'>Activites</p>
                        </div>

                        <div className='bg-white text-primary-50 rounded px-5 py-2 text-center cursor-pointer'>
                            Add Hotels
                        </div>
                    </div>




                    <div className='flex flex-row mt-5 '>
                        <div className='bg-white p-5 w-full'>
                            <div className='flex flex-row gap-3'>
                                <div className="relative flex justify-center items-center">
                                    <div>
                                        <Image
                                            src="/assets/images/art.jpg"
                                            width={250}
                                            height={250}
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-1/2 transform -translate-y-1/2 flex space-x-40">
                                        <Icon id="swipel" className='h-6 w-6' />
                                        <Icon id="swiper" className='h-6 w-6' />
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className='flex flex-row justify-between border-b  pb-4'>
                                            <div>
                                                <h1 className='text-2xl font-bol'>The Museum of Modern Art</h1>
                                                <p className='w-[400px] text-xs font-bold'>Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant</p>
                                                <div className='flex gap-3 mt-3'>
                                                    <div className='flex flex-row iems-center'>
                                                        <Icon id="location" className='h-7 w-7' />
                                                        <p className='text-xs  text-primary-50 font-bold'>Direction</p>
                                                    </div>
                                                    <div className='flex flex-row iems-center'>
                                                        <Icon id="star" className='h-7 w-7 ' />
                                                        <p className='text-xs '>4.5(436)</p>
                                                    </div>
                                                    <div className='flex flex-row iems-center'>
                                                        <Icon id="clock" className='h-7 w-7 ' />
                                                        <p className='text-xs '>1 hour</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='space-y-2 ml-48'>
                                                <h1 className=' font-bold text-2xl'>N123,450.000</h1>
                                                <p>10:30AM on Mar 19</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <div className='flex flex-row justify-between border-b  pb-4 mt-3'>
                                            <div>

                                                <div className='flex gap-3 mt-3'>

                                                    <p className='text-xs  text-primary-50 font-bold'>What is included : </p>

                                                    <p className='text-xs '>Admission to the Empire State Building</p>

                                                    <p className='text-xs text-primary-50 '>See More</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-3 mt-3'>

                                                <div className='bg-primary-50 rounded p-2'>
                                                    <p className='text-xs text-white '>Day 1</p>
                                                </div>
                                                <Icon id="up-down" className="w-6 h-6  mb-1" />

                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-row gap-5 mt-5'>
                                                <h3 className='text-primary-50 font-bold cursor-pointer'>Activity details</h3>
                                                <h3 className='text-primary-50 font-bold cursor-pointer'>Price details</h3>
                                            </div>

                                            <h3 className='text-primary-50 font-bold cursor-pointer mt-5'>Edit details</h3>

                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>



                        <div className='bg-error-100 px-2 '>
                            <Icon id="cancel" className='w-6  mt-36' />
                        </div>

                    </div>

                    <div className='flex flex-row mt-5 '>
                        <div className='bg-white p-5 w-full'>
                            <div className='flex flex-row gap-3'>
                                <div className="relative flex justify-center items-center">
                                    <div>
                                        <Image
                                            src="/assets/images/art.jpg"
                                            width={250}
                                            height={250}
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-1/2 transform -translate-y-1/2 flex space-x-40">
                                        <Icon id="swipel" className='h-6 w-6' />
                                        <Icon id="swiper" className='h-6 w-6' />
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className='flex flex-row justify-between border-b  pb-4'>
                                            <div>
                                                <h1 className='text-2xl font-bol'>The Museum of Modern Art</h1>
                                                <p className='w-[400px] text-xs font-bold'>Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant</p>
                                                <div className='flex gap-3 mt-3'>
                                                    <div className='flex flex-row iems-center'>
                                                        <Icon id="location" className='h-7 w-7' />
                                                        <p className='text-xs  text-primary-50 font-bold'>Direction</p>
                                                    </div>
                                                    <div className='flex flex-row iems-center'>
                                                        <Icon id="star" className='h-7 w-7 ' />
                                                        <p className='text-xs '>4.5(436)</p>
                                                    </div>
                                                    <div className='flex flex-row iems-center'>
                                                        <Icon id="clock" className='h-7 w-7 ' />
                                                        <p className='text-xs '>1 hour</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='space-y-2 ml-48'>
                                                <h1 className=' font-bold text-2xl'>N123,450.000</h1>
                                                <p>10:30AM on Mar 19</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <div className='flex flex-row justify-between border-b  pb-4 mt-3'>
                                            <div>

                                                <div className='flex gap-3 mt-3'>

                                                    <p className='text-xs  text-primary-50 font-bold'>What is included : </p>

                                                    <p className='text-xs '>Admission to the Empire State Building</p>

                                                    <p className='text-xs text-primary-50 '>See More</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-3 mt-3'>

                                                <div className='bg-primary-50 rounded p-2'>
                                                    <p className='text-xs text-white '>Day 1</p>
                                                </div>
                                                <Icon id="up-down" className="w-6 h-6  mb-1" />

                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-row gap-5 mt-5'>
                                                <h3 className='text-primary-50 font-bold cursor-pointer'>Activity details</h3>
                                                <h3 className='text-primary-50 font-bold cursor-pointer'>Price details</h3>
                                            </div>

                                            <h3 className='text-primary-50 font-bold cursor-pointer mt-5'>Edit details</h3>

                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>



                        <div className='bg-error-100 px-2 '>
                            <Icon id="cancel" className='w-6  mt-36' />
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default Activities