import {
  faCloud,
  faCodeBranch,
  faLaptopCode,
  faMedkit,
  faRocket,
  faVials
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { useScroll } from '../../hooks/useScroll'

const whatWeDo = [
  {
    icon: faCodeBranch,
    title: 'Cloud, DevOps, & Infrastructure',
    subtitle:
      'World class services around DevOps, Infrastructure and cloud technologies.'
  },
  {
    icon: faMedkit,
    title: 'Project Rescue',
    subtitle:
      'Time sensitive project in need of a helping hand? See how we can help get you back on track.'
  },
  {
    icon: faLaptopCode,
    title: 'Bespoke Software Development',
    subtitle:
      "We'll take your requirements and deliver an MLP (minimum 'loveable' product)!"
  },
  {
    icon: faRocket,
    title: 'Mobile Development',
    subtitle: 'Take your idea to market quickly with a bespoke mobile app.'
  },
  {
    icon: faVials,
    title: 'Automated Testing Frameworks',
    subtitle:
      'Get a solid testing harness for your existing product or platform.'
  },
  {
    icon: faCloud,
    title: 'Cloud Migrations',
    subtitle: 'Reach new heights with your platform in the cloud.'
  }
]
export const WhatWeDo = () => {
  const { scrollY } = useScroll()

  return (
    <div className='w-full select-none relative'>
      <p className='text-center text-lg text-prose mx-2 px-12 pb-10'>
        A range of software services across multiple platforms - web, mobile and
        cloud. We're always looking for ways to improve our services, so if you
        can't see exactly what you need, contact us anyway to see if we can
        help.
      </p>
      <div className='grid lg:grid-cols-3 gap-4 items-center text-white'>
        {whatWeDo.map((item, index) => (
          <Zoom delay={index * 200}>
            <div
              className={`h-72 md:shadow-lg rounded-3xl justify-center px-8 items-center flex flex-col transition-all transform duration-500`}
              key={index}
            >
              <div className='p-4 rounded-full bg-gray-100 m-4'>
                <FontAwesomeIcon
                  className='w-12 h-12 buzz-out-on-hover text-accent-1'
                  icon={item.icon}
                />
              </div>
              <div className='flex flex-row flex-wrap justify-evenly items-center'>
                <div>
                  <h3
                    className={`text-3xl md:text-xl transition-all font-brand text-center text-accent-1`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className='mt-4 mb-2 text-prose text-center'>
                {item.subtitle}
              </p>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  )
}
