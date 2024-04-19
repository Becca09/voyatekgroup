import React from 'react'
import Sidebar from './components/Sidebar'
import Image from 'next/image'
import { Icon } from './components/Icon'
import TripInfo from './components/TripInfo'
import Cards from './components/Cards'
import Flights from './components/Flights'

const Page = () => {
  const CARD = [
    {
      head: "Activities",
      details: "Build, personalize, and optimize your itineraries with our trip planner.",
      classname: "text-white bg-primary-100",
      buttonText: "Add Acvities",
      buttonClass: ""

    },

    {
      head: "Hotels",
      details: "Build, personalize, and optimize your itineraries with our trip planner.",
      classname: "text-black bg-primary-200",
      buttonText: "Add Hotels",
      buttonClass: ""

    },

    {
      head: "Hotels",
      details: "Build, personalize, and optimize your itineraries with our trip planner.",
      classname: "text-white bg-primary-50",
      buttonText: "Add Flieghts",
      buttonClass: "bg-white text-primary-50"
    },
  ]
  return (
    <div className='mt-5 container mx-auto'>
      <div className="flex gap-10">
        <Sidebar />

        <div className=" flex-grow  bg-white p-4">
          <div className="mt-2 bg-banner p-4 bg-cover bg-center bg-no-repeat">
            <div className=''>
              <Icon id='arrow-left' />
            </div>
          </div>


          <div>
            <TripInfo startDate={'21 March 2024'} endDate={'21 April 2024'} nameOfTrip={'Bahamas Family Trip'} country={'New York, Unied Staes pf America'} typeOfTrip={'Solo Trip'} />
          </div>

          <div className='flex gap-4'>
            {CARD.map((card, index) => (
              <Cards
                key={index}
                head={card.head}
                details={card.details}
                classname={card.classname}
                buttonText={card.buttonText}
                buttonClass={card.buttonClass}
              />
            ))}
            <div style={{ width: '200px' }} />
          </div>

          <div className='mt-10'>
            <h1>Trip Iteneries</h1>
            <p className='text-primary-400'>Your trip itineraries are placed here</p>
            <Flights />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page
