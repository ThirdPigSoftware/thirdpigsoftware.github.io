export default function Footer () {
  return (
    <footer className='text-gray-600 font-paragraph'>
      <div className='container px-5 py-24 mx-auto flex items-center md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a href="" className="text-white">First Link</a>
                        </li>
                        <li>
                            <a href="" className="text-white">Second Link</a>
                        </li>
                        <li>
                            <a href="" className="text-white">Third Link</a>
                        </li>
                        <li>
                            <a href="" className="text-white">Fourth Link</a>
                        </li>
                    </nav> */}
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a href="" className="text-white">First Link</a>
                        </li>
                        <li>
                            <a href="" className="text-white">Second Link</a>
                        </li>
                        <li>
                            <a href="" className="text-white">Third Link</a>
                        </li>
                        <li>
                            <a href="" className="text-white">Fourth Link</a>
                        </li>
                    </nav> */}
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a href="" className="text-white">First Link</a>
                        </li>
                        <li>
                            <a href="" className="text-white">Second Link</a>
                        </li>
                        <li>
                            <a href="" className="text-white">Third Link</a>
                        </li>
                        <li>
                            <a href="" className="text-white">Fourth Link</a>
                        </li>
                    </nav> */}
          </div>
        </div>
        <div className='w-64 font-paragraph flex-shrink-0 md:mx-0 mx-auto text-center md:text-right'>
          <div className='mt-2 text-sm text-white'>
            <p className='font-brand text-gray-800 text-xl'>
              Third Pig Software Ltd
            </p>
            71-75 Shelton Street
            <br />
            LONDON
            <br />
            WC2H 9JQ
            <div className="mt-2">
              <a
                href='mailto:hello@thirdpigsoftware.com'
                className='text-white'
              >
                hello@thirdpigsoftware.com
                <i className='fa fa-envelope ml-2'></i>
              </a>
            </div>
            <div >
              <a href='https://twitter.com/ThirdPigTech' className='text-white'>
                @ThirdPigTech<i className='fab fa-twitter ml-2'></i>
              </a>
            </div>
            <div >
              <a href='tel:07956000356' className='text-white'>
                07956 000 356<i className='fa fa-phone ml-2'></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-100 font-paragraph'>
        <div className='container mx-auto py-4 px-5 flex items-center justify-center flex-wrap flex-col sm:flex-row'>
          <p className='text-gray-500 text-sm text-center'>
            © 2021
            <a className='text-gray-600 uppercase font-brand' target='_blank'>
              {' '}
              Third Pig Software Ltd
            </a>
            <div>
              <p className='text-xs font-paragraph'>
                Company Registration No. 13536155
              </p>
              <p className='text-xs font-paragraph'>
                Registered in England &amp; Wales. <br />
                Copyright 2021 All Rights Reserved.
              </p>
            </div>
          </p>
        </div>
      </div>
    </footer>
  )
}
