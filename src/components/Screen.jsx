import Sidebar from "./Sidebar"

const Screen = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <Sidebar />
        <div className="p-4 xl:ml-80">
          <div className="m-6 bg-[#ECF8F3] rounded-lg h-screen">
            <div className="my-20 mx-auto md:px-6">
              <section className="mb-32">
                <h2 className="mb-20 pt-9 text-3xl font-bold">How can i help with your <br /> store today?</h2>
                <div className="grid lg:grid-cols-2 lg:gap-x-12">
                  <div className="mb-12 lg:mb-0">
                    <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <div className="flex justify-center">
                      </div>
                      <div className="p-6">
                        <h5 className="mb-6 text-xl font-semibold">Product Discovery</h5>
                        <ul>
                          <li>
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-3 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-3 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-3 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-3 rounded-full border-[#40B68A80]">
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
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-3 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-3 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-3 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                          <li className="mt-7">
                            <p className="border font-normal antialiased tracking-wide text-[17px] px-4 py-3 rounded-full border-[#40B68A80]">
                              Show me sales data for the last month.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>

              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Screen