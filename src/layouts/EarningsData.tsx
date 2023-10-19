import React from 'react'

const EarningsData = () => {


  return (
    <div className="overflow-x-auto md:overscroll-none sm:-mx-4 lg:-mx-6">
      
    <div className="inline-block min-w-full py-2 ">
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full text-left text-base md:text-lg font-semibold ">
          <thead className=" font-medium dark:border-neutral-500">
        
            <tr>
              <th scope="col" className="px-6 py-4">
                Type
              </th>
              <th scope="col" className="px-6 py-4">
                Reward
              </th>
              <th scope="col" className="px-6 py-4">
                Participants
              </th>
              <th scope="col" className="px-6 py-4">
                Owner
              </th>
              <th scope="col" className="px-6 py-4">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" [&>*:first-child]:text-[rgba(15,161,244,1)] transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Post</td>
              <td className="whitespace-nowrap px-6 py-4">₦50,000</td>
              <td className="whitespace-nowrap px-6 py-4">10/10</td>
              <td className="whitespace-nowrap px-6 py-4">Admin</td>
              <td className="whitespace-nowrap px-6 py-4">10/7/23</td>
              <td className="whitespace-nowrap px-6 py-4">
                <button className="bg-[rgba(15,161,244,1)] px-3 py-2 rounded-lg w-[120px] font-semibold text-[16px] text-white">
                  View
                </button>
              </td>
            </tr>
            <tr className=" [&>*:first-child]:text-blue-600 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Post</td>
              <td className="whitespace-nowrap px-6 py-4">₦50,000</td>
              <td className="whitespace-nowrap px-6 py-4">10/10</td>
              <td className="whitespace-nowrap px-6 py-4">Admin</td>
              <td className="whitespace-nowrap px-6 py-4">10/7/23</td>
              <td className="whitespace-nowrap px-6 py-4">
                <button className="bg-[rgba(15,161,244,1)] px-3 py-2 rounded-lg w-[120px] font-semibold text-[16px] text-white">
                  View
                </button>
              </td>
            </tr>
            <tr className=" [&>*:first-child]:text-blue-600 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4">Post</td>
              <td className="whitespace-nowrap px-6 py-4">₦50,000</td>
              <td className="whitespace-nowrap px-6 py-4">10/10</td>
              <td className="whitespace-nowrap px-6 py-4">Admin</td>
              <td className="whitespace-nowrap px-6 py-4">10/7/23</td>
              <td className="whitespace-nowrap px-6 py-4">
                <button className="bg-[rgba(15,161,244,1)] px-3 py-2 rounded-lg w-[120px] font-semibold text-[16px] text-white">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default EarningsData