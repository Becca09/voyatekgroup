import React from 'react'
import Image from 'next/image'
import { Icon } from './Icon'

const Flights = () => {
    return (
        <div>
            <div className=''>
                <div className='bg-secondary-300 p-4 border-b 0'>
                    <div className=' flex flex-row justify-between'>
                        <div className='flex flex-row gap-2 mt-2'>
                            <Icon id="flgt" className='h-6 w-6' />
                            <p>Flights</p>
                        </div>

                        <div className='bg-white text-primary-50 rounded px-5 py-2 text-center cursor-pointer'>
                            Add Flights
                        </div>
                    </div>


                    <div className='bg-white p-5 mt-5 '>
                        <div className='flex flex-row'>
                            <div>
                                <div className='flex flex-row gap-12  border-b border-gray-500 mt-5 pb-5'>
                                    <div className='flex flex-row gap-2'>
                                        <Image
                                            className="w-[20px] sm:w-[50px] sm:h-[50px] mt-3"
                                            src="/assets/images/flight.jpg"
                                            width={85}
                                            height={85}
                                            alt=""
                                        />
                                        <div>
                                            <h1>American Airlines</h1>
                                            <div className='flex flex-row gap-3'>
                                                <p className='text-primary-400 xs'>AA-B29</p>
                                                <div className='rounded text-white px-3 py-1 bg-primary-100'>First Class</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-row gap-3'>
                                        <div className='flex flex-col gap-3'>
                                            <h1>08:35</h1>
                                            <p className='text-primary-400 xs'>Sun, 20 Aug</p>
                                        </div>

                                        <div className='flex flex-row'>
                                            <div className='w-[100px]'>
                                                <Icon id="flight-take-off" className='h-6 w-6' />
                                                <div className='h-3 p-2 bg-primary-200 rounded-full'></div>
                                                <h1>LOS</h1>
                                            </div>
                                            <div className='mt-2' >
                                                <p className='text-primary-400 text-xs text-center'>Duration:1h 45m</p>
                                                <div className='h-3 p-2 bg-primary-50 rounded-full'></div>
                                                <p className='text-primary-400 text-xs text-center'>Direct</p>
                                            </div>
                                            <div className='w-[100px]'>
                                                <Icon id="flight-landing" className='h-6 w-6 ml-20' />
                                                <div className='h-3 p-2 bg-primary-200 rounded-full'></div>
                                                <h1 className='text-right'>SIN</h1>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <h1>09:55</h1>
                                            <p className='text-primary-400 xs'>Sun, 20 Aug</p>
                                        </div>
                                    </div>

                                    <h1 className='mt-5'>N123,450.000</h1>

                                </div>


                                <div className='text-primary-400 flex flex-row gap-3 border-b border-gray-500 mt-5 pb-5'>
                                    <p>Facilities:  </p>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                </div>

                                <div className='flex justify-between border-b border-gray-500 mt-5 pb-5'>
                                    <div className='flex flex-row gap-5 mt-5'>
                                        <h3 className='text-primary-50 font-bold cursor-pointer'>Flight details</h3>
                                        <h3 className='text-primary-50 font-bold cursor-pointer'>Price details</h3>
                                    </div>

                                    <h3 className='text-primary-50 font-bold cursor-pointer mt-5'>Edit details</h3>

                                </div>
                            </div>
                            <div className='bg-error-100 px-2'>
                                <Icon id="cancel" className='w-6  mt-32' />
                            </div>
                        </div>


                    </div>
                    <div className='bg-white p-5 mt-5 '>
                        <div className='flex flex-row'>
                            <div>
                                <div className='flex flex-row gap-12  border-b border-gray-500 mt-5 pb-5'>
                                    <div className='flex flex-row gap-2'>
                                        <Image
                                            className="w-[20px] sm:w-[50px] sm:h-[50px] mt-3"
                                            src="/assets/images/flight.jpg"
                                            width={85}
                                            height={85}
                                            alt=""
                                        />
                                        <div>
                                            <h1>American Airlines</h1>
                                            <div className='flex flex-row gap-3'>
                                                <p className='text-primary-400 xs'>AA-B29</p>
                                                <div className='rounded text-white px-3 py-1 bg-primary-100'>First Class</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-row gap-3'>
                                        <div className='flex flex-col gap-3'>
                                            <h1>08:35</h1>
                                            <p className='text-primary-400 xs'>Sun, 20 Aug</p>
                                        </div>

                                        <div className='flex flex-row'>
                                            <div className='w-[100px]'>
                                                <Icon id="flight-take-off" className='h-6 w-6' />
                                                <div className='h-3 p-2 bg-primary-200 rounded-full'></div>
                                                <h1>LOS</h1>
                                            </div>
                                            <div className='mt-2' >
                                                <p className='text-primary-400 text-xs text-center'>Duration:1h 45m</p>
                                                <div className='h-3 p-2 bg-primary-50 rounded-full'></div>
                                                <p className='text-primary-400 text-xs text-center'>Direct</p>
                                            </div>
                                            <div className='w-[100px]'>
                                                <Icon id="flight-landing" className='h-6 w-6 ml-20' />
                                                <div className='h-3 p-2 bg-primary-200 rounded-full'></div>
                                                <h1 className='text-right'>SIN</h1>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <h1>09:55</h1>
                                            <p className='text-primary-400 xs'>Sun, 20 Aug</p>
                                        </div>
                                    </div>

                                    <h1 className='mt-5'>N123,450.000</h1>

                                </div>


                                <div className='text-primary-400 flex flex-row gap-3 border-b border-gray-500 mt-5 pb-5'>
                                    <p>Facilities:  </p>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                    <div className='flex flex-row'>
                                        <p>Baggage:20kg</p>
                                        <Icon id="baggage" className='h-6 w-6' />
                                    </div>
                                </div>

                                <div className='flex justify-between border-b border-gray-500 mt-5 pb-5'>
                                    <div className='flex flex-row gap-5 mt-5'>
                                        <h3 className='text-primary-50 font-bold cursor-pointer'>Flight details</h3>
                                        <h3 className='text-primary-50 font-bold cursor-pointer'>Price details</h3>
                                    </div>

                                    <h3 className='text-primary-50 font-bold cursor-pointer mt-5'>Edit details</h3>

                                </div>
                            </div>
                            <div className='bg-error-100 px-2'>
                                <Icon id="cancel" className='w-6  mt-32' />
                            </div>
                        </div>


                    </div>
                </div>

            </div>




        </div>

    )
}

export default Flights