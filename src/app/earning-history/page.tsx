// components/EarningHistoryPage.tsx
"use client";

import {
  FiSearch,
  FiChevronLeft, 
  FiChevronRight,
  FiRefreshCcw,
  FiDatabase,
  FiFilter,
  
} from "react-icons/fi";

export default function EarningHistory() {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Affiliate <span className="mx-2">{">"}</span>
        <span className="text-black font-medium">Earning History</span>
      </div>

     

      <div className="bg-white  shadow-sm border border-gray-200 rounded-tl-xl rounded-tr-xl overflow-hidden">
      {/* Header */}
        <div className="flex flex-wrap justify-between items-center p-4 border-b border-gray-100 gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="font-semibold text-gray-800">Earning History</h2>
            
          <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6A9955] w-4 h-4" />
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-green-500"
          />
          
        </div>
         <button className="p-2 ml-[1px] rounded-md hover:bg-gray-100">
              <FiRefreshCcw className="text-gray-500" size={18} />
          </button>

            
          </div>
          <div className="flex items-center gap-3">
            
            <button className="p-2 rounded-md hover:bg-gray-100">
              <FiDatabase className="text-gray-500" size={18} />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <FiFilter className="text-gray-500" size={18} />
            </button>
          </div>
        </div>
       </div> 

      {/* Table */}
      <div className="bg-white   rounded-bl-lg rounded-br-lg border border-gray-200 shadow-sm  overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full  text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-600">S. No.</th>
                <th className="px-4 py-3 font-medium text-gray-600">Product Name</th>
                <th className="px-4 py-3 font-medium text-gray-600">Date</th>
                <th className="px-4 py-3 font-medium text-gray-600">Time</th>
                <th className="px-4 py-3 font-medium text-gray-600">Coupon/Link</th>
                <th className="px-4 py-3 font-medium text-gray-600">Commission</th>
                <th className="px-4 py-3 font-medium text-gray-600">Earning</th>
                <th className="px-4 py-3 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">1.</td>
                <td className="px-4 py-3">Amrutam Nari Sondarya Malt</td>
                <td className="px-4 py-3">19 Oct, 2024</td>
                <td className="px-4 py-3">04:10 PM</td>
                <td className="px-4 py-3">AMU2344</td>
                <td className="px-4 py-3">15%</td>
                <td className="px-4 py-3">INR 120</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Paid</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">2.</td>
                <td className="px-4 py-3">Amrutam Chyawanprash</td>
                <td className="px-4 py-3">19 Oct, 2024</td>
                <td className="px-4 py-3">05:10 PM</td>
                <td className="px-4 py-3">AMU2344</td>
                <td className="px-4 py-3">15%</td>
                <td className="px-4 py-3">INR 112</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Paid</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">3.</td>
                <td className="px-4 py-3">Amrutam Ashwagandha Capsules</td>
                <td className="px-4 py-3">18 Oct, 2024</td>
                <td className="px-4 py-3">06:10 PM</td>
                <td className="px-4 py-3">AMU2344</td>
                <td className="px-4 py-3">25%</td>
                <td className="px-4 py-3">INR 82</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 text-sm text-gray-500">
          <span>Rows per page: 8</span>
          <div className="flex items-center gap-2">
            <span>1-8 of 80</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <FiChevronLeft />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}