import Image1 from '../assets/image 1.png'
import Logo from '/chatdb.png'


const Welcome = () => {
  return (
    <>
      <section className="mt-20">
        <div className=" px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <span className="pr-3">
                <img src={Logo} alt="logo" />
              </span>
              <h6 className="mt-3 antialiased text-2xl tracking-normal font-bold leading-relaxed text-black">
                Chat<span className="text-xl font-bold">DB</span>
              </h6>
            </div>


            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div className=" lg:mt-0">
                <h2 className="text-2xl tracking-wide font-normal leading-relaxed pb-5">
                  Unlock the Conversational Power of <br />AI for Your E-commerce Store
                </h2>
                <p className="pb-6 text-[17px] leading-relaxed">
                  ChatDB allows you to interact with your E-commerce store in a natural and conversational way.
                  No more navigating through complicated menus or
                  forms simply chat with our ChatDB to find what you&lsquore looking for
                </p>

                <a
                  className="mb-2 inline-block rounded-lg bg-[#40B6AE] px-20 pt-4 pb-4 text-sm font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-[#2d8f89] focus:bg-primary-600  active:bg-primary-700  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]  md:mr-2 md:mb-0"
                  href="#"
                >
                  Message ChatDB
                </a>

              </div>
              <div className="mb-12 lg:mb-0">
                <img
                  src={Image1}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="hero image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



    </>

  )
}

export default Welcome