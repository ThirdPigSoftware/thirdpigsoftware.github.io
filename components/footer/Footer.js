export default function Footer() {

    return (<footer className="text-gray-600 body-font">
        <div
            className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a href="" className="flex title-font font-medium items-center md:justify-center justify-center text-gray-900">
                    <img className="-ml-2 mr-2" width={50} src="/static/logo.png" />
                    <a style={{ fontFamily: 'nickname', zIndex: 9999999 }} className="text-gray-800 text-xl" href="mailto:hello@thirdpigsoftware.com">hello@thirdpigsoftware.com</a>
                </a>

                <p className="mt-2 text-white">
                    Third Pig Software Ltd <br />
                    71-75 Shelton Street<br />
                    LONDON<br />
                    WC2H 9JQ
                </p>
                <div className="text-gray-900 opacity-40 mt-2">
                    <i className="fas fa-home"></i>
                    <i className="fas fa-home ml-2"></i>
                    <i className="fas fa-home ml-2"></i>
                </div>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
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
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
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
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
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
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SOCIAL</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a href="https://www.linkedin.com/company/third-pig-software/" className="text-white">LinkedIn</a>
                        </li>
                    </nav> */}
                </div>
            </div>
        </div>

        <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2021
                    <a className="text-gray-600 ml-1" target="_blank">Third Pig Software Ltd</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a href="https://www.linkedin.com/company/third-pig-software/" className="ml-3 text-gray-500">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </span>
            </div>
        </div>
    </footer>
    )

}