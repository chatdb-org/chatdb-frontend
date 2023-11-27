import Sidebar from "./Sidebar"
import { Link } from 'react-router-dom';

const Screen = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <Sidebar />
        <div className="p-4 xl:ml-80">
          <div className="m-6 bg-[#ECF8F3] rounded-lg h-screen">
            <div className="my-20 mx-auto md:px-6">
              <section className="mb-32">
                <h2 className="mb-20 pt-9 text-3xl font-bold">How can i help with your store today?</h2>
                <div className="grid lg:grid-cols-2 lg:gap-x-12">
                  <div className="mb-12 lg:mb-0">
                    <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <div className="flex justify-center">
                      </div>
                      <div className="p-6">
                        <h5 className="mb-6 text-xl font-semibold">Product Discovery</h5>
                        <ul >
                          <li>
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-4  rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-4 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-4 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-4 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <div className="p-6">
                        <h5 className="mb-6 text-xl font-semibold">Order Tracking</h5>
                        <ul>
                          <li>
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-4 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-4 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-4 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-4 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </section>
              <form>
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-[20px] h-[20px] fill-[#1b1b1b]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"></path>
                    </svg>
                  </span>
                  <input
                    className="w-full bg-white placeholder:font-italitc border border-slate-300 rounded-full py-4 pl-10 pr-4 focus:outline-none"
                    placeholder="Message ChatDB......" type="text" />
                  
                  <Link to="/screen2" className="absolute inset-y-0 right-0 flex items-center pr-4 border-2  p-4 m-2 mx-5 rounded-xl bg-[#ECECED] ">
                    <svg className="w-[18px] h-[18px] fill-[#000000]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                    </svg>
                  </Link>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Screen