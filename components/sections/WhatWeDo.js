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
import Fade from 'react-reveal/Fade'
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
    icon: faRocket,
    title: 'Mobile Development',
    subtitle: 'Take your idea to market quickly with a bespoke mobile app.'
  },
  {
    icon: faLaptopCode,
    title: 'Bespoke Software Development',
    subtitle:
      "We'll take your requirements and deliver an MLP (minimum 'loveable' product)!"
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
    <div className='w-full'>
      <p className='text-center text-lg text-prose px-12 pb-10'>A range of software services across multiple platforms - web, mobile and cloud. We're always looking for ways to improve our services, so if you can't see exactly what you need, contact us anyway to see if we can help.</p>
      <div className='grid lg:grid-cols-3 gap-4 items-center text-gray-700 dark:text-gray-100'>
        {whatWeDo.map((item, index) => (
          <div
            className={`h-64 md:shadow-lg rounded-xl justify-center px-8 items-center flex flex-col transition-all transform duration-500 md:opacity-0 ${
              scrollY > 150 ? 'md:opacity-100' : ''
            }`}
            key={index}
          >
            <Fade delay={index * 200}>
              <FontAwesomeIcon
                className='w-20 buzz-out-on-hover  h-14 p-2 hover:text-accent-1 m-4 text-accent-1'
                icon={item.icon}
              />
              <div className='flex flex-row flex-wrap justify-evenly items-center'>
                <div>
                  <h3
                    className={`text-2xl font-brand font-semibold text-center text-accent-1`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className='mt-4 mb-2 text-prose text-center font-paragraph'>
                {item.subtitle}
              </p>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  )
}
