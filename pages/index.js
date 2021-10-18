import { faCodeBranch, faLaptopCode, faMedkit, faMobileAlt, faPaintBrush, faVials } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Clouds from '../components/clouds/Clouds'
import Nav from '../components/nav'
import { useScroll } from '../hooks/useScroll'
import Fade from 'react-reveal/Fade'

const whatWeDo = [
  {
    icon: faCodeBranch,
    title: "Cloud, DevOps, & Infrastructure", subtitle: "World class consultation services around DevOps practices, Infrastructure as Code and leveraging cloud technologies."
  },
  {
    icon: faMedkit,
    title: "Project Rescue", subtitle: "Time sensitive project in need of a helping hand? See how we can help."
  },
  {
    icon: faMobileAlt,
    title: "Mobile Development", subtitle: "Take your idea to market quickly with a bespoke mobile app."
  },
  {
    icon: faLaptopCode,
    title: "Bespoke Software Development", subtitle: "We'll take your requirements and deliver an MVP (minimum 'valuable' product)!"
  },
  {
    icon: faVials,
    title: "Automated Testing Frameworks", subtitle: "Get a solid testing harness for your existing product or platform."
  },
  {
    icon: faPaintBrush,
    title: "Website Design & Development", subtitle: "Creating clean, custom websites to launch and showcase your business."
  },
]

const CloudSection = ({ children, header }) => (
  <>
    <Clouds />
    <div className="bg-white">
      <div className="py-20 px-20 container mx-auto">
        {header}
        <div className="grid lg:grid-cols-3 gap-4 items-center text-gray-700 dark:text-gray-100">
          {children}
        </div>
      </div>
    </div>
    <Clouds flip />
  </>
)



export default function IndexPage() {
  const { scrollY } = useScroll()
  return (
    <div className="text-white dark:text-white">
      <Nav />
      <div>
        <div style={{ zIndex: 9999999 }} className={`text-2xl relative md:text-4xl text-center items-center flex flex-col transition-all transform ${scrollY > 80 ? "md:scale-75 md:mt-24" : ""}`}>
          <div className="flex flex-row flex-wrap justify-center items-center mt-12">
            <img style={{ zIndex: 9999999 }} className="buzz-out-on-hover p-5 w-1/2 md:w-1/4 mr-5 mb-10 md:mb-0" src={"/static/logo.png"} />
            <div className="flex items-center flex-col justify-around">
              <h3 style={{ fontFamily: 'nickname', zIndex: 9999999 }} className={`select-none text-gray-900 md:text-9xl text-6xl transition-all duration-500`}>Third Pig <i className="not-italic">Software</i><i className="not-italic text-sm">Ltd</i></h3>
              <Fade delay={800}><p style={{ fontFamily: 'nickname', zIndex: 9999999 }} className="p-2 md:p-0 text-2xl md:text-3xl transition-all duration-500 opacity-80 text-gray-900 select-none">Experts in the delivery of high quality, high-impact, software solutions.</p></Fade>
            </div>
          </div>
        </div>
        <div className={`transition-all transform -mt-48 ${scrollY > 80 ? "md:-mt-96" : ""}`} style={{ zIndex: -999 }}>
          <CloudSection header={<h3 style={{ fontFamily: 'nickname', zIndex: 9999999 }} className="text-4xl p-12 text-accent-1">What can we do for you?</h3>}>

            {
              whatWeDo.map((item, index) =>
                <div className="xl:border-l-2 px-4 py-4" key={index}>
                  <Fade delay={index * 200}>
                    <div className="flex flex-row flex-wrap justify-around items-center">
                      <FontAwesomeIcon className="buzz-out-on-hover w-1/2 md:w-16 h-36 md:h-auto text-accent-2 px-2 py-2 m-4" icon={item.icon} />
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-lg font-semibold">{item.subtitle}</p>
                      </div>
                    </div>
                  </Fade>
                </div>
              )
            }
          </CloudSection>
        </div>

        <div>
          <div className="py-20 px-20 container mx-auto">
            <div className="grid grid-cols-1 gap-4 items-center">

              <h3 style={{ fontFamily: 'nickname', zIndex: 9999999 }} className="text-4xl">More than just another consultancy.</h3>
              <p className="text-accent-2 text-2xl font-semibold">We don't do bums on seats. We'll work to thoroughly understand your business goals and act like a partner, not an outsourcer.</p>
            </div>
          </div>
        </div>


        <Clouds />
        <div className="bg-white">
          <div className="py-20 px-20 container mx-auto text-gray-700 dark:text-gray-100">
            <div className="md:p-10 md:py-20 flex flex-col flex-wrap justify-center content-center">
              <div className="px-4 py-4">
                <h3 style={{ fontFamily: 'nickname', zIndex: 9999999 }} className="text-6xl">Want to Hear More?</h3>
              </div>
              <div className="w-full flex flex-row flex-wrap text-2xl">
                <iframe className="w-full" height={850} src="https://share-eu1.hsforms.com/1Tk0yABENQ4uXugEOhJ4NUQezsvg" />
                {/* <input type="text" className="border-2 border-accent-2 text-gray-600 w-2/3 px-8 py-5 md:p-4 rounded-none rounded-l-lg" placeholder="hello@thirdpigsoftware.com" />
                <button className="w-1/3 bg-accent-1 font-bold rounded-r-lg text-white hover:bg-indigo-500" type="button">
                  <p className="text-lg md:text-2xl font-semibold">Yes Please!</p>
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <Clouds flip />


      </div>
    </div>
  )
}
