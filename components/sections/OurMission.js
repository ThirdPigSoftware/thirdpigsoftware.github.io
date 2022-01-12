import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BeakerIcon,
  EmojiHappyIcon,
  LightningBoltIcon,
  ThumbUpIcon
} from '@heroicons/react/outline'
import React from 'react'
import Fade from 'react-reveal/Fade'

const features = [
  {
    name: 'Good at what we do.',
    description:
      "With many successful projects under our belts and a wealth of technical skills, you're in safe hands with us.",
    icon: ThumbUpIcon
  },
  {
    name: 'Easy to work with.',
    description:
      "We're easygoing and friendly. We love to hear your ideas, we love to share ours and we try to have fun every step of the way.",
    icon: EmojiHappyIcon
  },
  {
    name: 'Flexible.',
    description:
      'We take the pain of making changes away with our agile and test-driven development approaches.',
    icon: BeakerIcon
  },
  {
    name: 'No bullsh*t.',
    description:
      "Software can be complicated enough as it is. We're straight talking and straight to the point.",
    isFontAwesome: true,
    icon: 'fas fa-poop'
  },
  {
    name: 'Shippable Increments.',
    description:
      "We'll focus on continuously producing releasable increments of work so you don't have to wait long to start seeing value.",
    isFontAwesome: true,
    icon: 'fas fa-shipping-fast'
  },
  {
    name: 'Minimise your Time to Validate.',
    description:
      "Once you've agreed with our proposal, you'll have your first demo within 2 weeks or less.",
    icon: LightningBoltIcon
  }
]

export const OurMission = () => {
  return (
    <>
      <div id='mission' className='pt-20 -mt-20' />
      <div className='py-12 bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-accent-1 font-semibold tracking-wide uppercase'>
              Our Mission
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Build the right thing. Build it right. 🔨
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              We believe in getting to know your business at a deep level. We
              want to know how things currently tick, your future goals and your
              aspirations; then to help you quickly deliver the value you need
              to achieve them 🚀.
            </p>
          </div>

          <div className='mt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-5'>
              {features.map((feature, index) => (
                <div key={feature.name} className='relative'>
                  <Fade delay={index * 200} left>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-accent-1 text-white'>
                        {feature.isFontAwesome ? (
                          <i className={`${feature.icon} text-white`}></i>
                        ) : (
                          <feature.icon
                            className='h-6 w-6'
                            aria-hidden='true'
                          />
                        )}
                      </div>
                      <p className='ml-16 text-xl leading-6 font-medium text-gray-900'>
                        {feature.name}
                      </p>
                    </dt>
                    <dd className='mt-2 ml-16 text-base text-gray-500'>
                      {feature.description}
                    </dd>
                  </Fade>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
