const contactOptions = [
  {
    href: 'mailto:hello@thirdpigsoftware.com',
    icon: 'fa fa-envelope'
  },
  {
    href: 'tel:07956000356',
    icon: 'fa fa-phone'
  },
  {
    href:
      'https://wa.me/447956000356?text=Hi%20there%2C%20I%27d%20like%20to%20know%20more%20about%20the%20services%20Third%20Pig%20Software%20can%20offer%20my%20project.',
    icon: 'fab fa-whatsapp'
  },
  {
    href: 'https://twitter.com/ThirdPigTech',
    icon: 'fab fa-twitter'
  },
  {
    href: 'https://www.linkedin.com/company/third-pig-software/',
    icon: 'fab fa-linkedin-in'
  }
]

export const ContactOptions = () => {
  return contactOptions.map(contactOption => (
    <div>
      <a
        className='buzz-out-on-hover'
        target='_blank'
        href={contactOption.href}
      >
        <i className={`${contactOption.icon} ml-2`}></i>
      </a>
    </div>
  ))
}
