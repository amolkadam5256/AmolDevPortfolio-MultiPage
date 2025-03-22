import React from 'react'
import Services_Head from '../Services_Components/Services_Head'
import ServiceCards from '../Services_Components/ServiceCards'

const Services = () => {
  return (
    <>
      <div className='bg-black'>
        <Services_Head />

        <div className='text-center pt-10'>
          <h2 className='text-green-500 text-[19px] md:text-2xl'>"Professional Web Development Services <br className='block sm:hidden' /> | Build Your Digital Presence"</h2>
        </div>

        <div>
          <ServiceCards/>
        </div>

      </div>
    </>
  )
}

export default Services
