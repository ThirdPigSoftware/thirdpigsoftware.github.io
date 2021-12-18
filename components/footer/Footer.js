import { ContactOptions } from '../contact/ContactOptions'

export default function Footer () {
  const clutchWidget =
    '<div class="clutch-widget" style="overflow-y:hidden; overflow-x:hidden;" data-url="https://widget.clutch.co" data-widget-type="7" data-height="65" data-clutchcompany-id="1884678"></div>'
  return (
    <footer class='bg-gray-50 select-none text-gray-600 px-6 lg:px-8 py-8 font-paragraph'>
      <div class='max-w-screen-xl mx-auto '>
        <div class='grid grid-cols-8 md:grid-cols-9 lg:grid-cols-8 divide-gray-200 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8'>
          <div class='col-span-8 md:col-span-3 lg:col-span-2 md:px-8 py-4 md:py-0 text-center md:text-left'>
            <h5 class='text-xl font-brand text-gray-700'>
              Third Pig Software
              <img
                style={{ zIndex: 9999999 }}
                className={`h-6 buzz-out-on-hover ml-2`}
                src={'/static/logo.png'}
              />
            </h5>
            <nav class='mt-0 font-paragraph text-xs'>
              71-75 Shelton Street
              <br />
              LONDON
              <br />
              WC2H 9JQ
            </nav>
            <p className='font-semibold font-sans mt-2'><a href="mailto:hello@thirdpigsoftware.com">hello@thirdpigsoftware.com</a></p>
          </div>
          <div class='col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0'>
            <div
              className='mt-4 flex flex-row items-center justify-center w-full'
              dangerouslySetInnerHTML={{ __html: clutchWidget }}
            ></div>
          </div>
          <div class='col-span-8 md:col-span-3 lg:col-span-3 text-sm md:px-8 py-4 md:py-0'>
            <h5 class='text-lg font-semibold text-gray-700 '>Contact us</h5>
            Plenty of ways to get in touch!
            <nav class='mt-4 flex flex-row text-2xl items-center justify-between'>
              <ContactOptions />
            </nav>
          </div>
        </div>
      </div>
      <div class='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 border-t-2 border-gray-200 pt-6 mb-24 md:mb-0'>
        <p class='text-xs text-center md:text-left font-paragraph'>
          © Third Pig Software Ltd. Registered in England &amp; Wales No.
          13536155. VAT No. GB387162177.
        </p>
      </div>
    </footer>
  )
}
