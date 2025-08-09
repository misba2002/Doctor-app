"use client";

import {
  FiSearch,
  FiRefreshCcw,
  FiDatabase,
  FiFilter,
  FiTag,
  FiShoppingCart,
  FiDollarSign,
  FiLink,
} from "react-icons/fi";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";

export default function Dashboard() {
  const tabs = ["Today So Far", "Week So Far", "Month So Far", "Custom"];
  const [activeTab, setActiveTab] = useState("Month So Far");

  return (
    <div className="p-6  ">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Affiliate <span className="mx-2">{">"}</span>
        <span className="text-black font-medium">Dashboard</span>
      </div>

      {/* Tabs */}
      <div className="border border-gray-200 bg-white rounded-lg flex overflow-x-auto mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-sm font-medium py-3 px-4 whitespace-nowrap ${
              activeTab === tab
                ? "border-b-2 border-green-600 text-green-700"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          label="Total Coupons clicks"
          value="255"
          suffix="/month"
          icon={<FiTag className="text-green-600 text-2xl" />}
        />
        <StatCard
          label="Total Orders"
          value="55"
          suffix="/month"
          icon={<FiShoppingCart className="text-green-600 text-2xl" />}
        />
        <StatCard
          label="Total Revenue"
          value="5,540"
          suffix="/month"
          icon={<FiDollarSign className="text-green-600 text-2xl" />}
        />
        <StatCard
          label="Total Link/Coupon"
          value="5"
          suffix="/month"
          icon={<FiLink className="text-green-600 text-2xl" />}
        />
      </div>

      {/* Referral Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center p-4 border-b border-gray-100 gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="font-semibold text-gray-800">Referral Overview</h2>
           <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6A9955] w-4 h-4" />
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-green-500"
          />
        </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <FiRefreshCcw className="text-gray-500" size={18} />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <FiDatabase className="text-gray-500" size={18} />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <FiFilter className="text-gray-500" size={18} />
            </button>
          </div>
        </div>

        {/* Table */}
      {/* Table */}
<div className="overflow-x-auto">
  <table className="w-full text-sm text-left border-separate " style={{ borderSpacing: "0 0.75rem" }}>
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 font-medium text-gray-600 text-center sm:text-left">
          S.No
        </th>
        <th className="px-4 py-3 font-medium text-gray-600">Product Name</th>
        <th className="px-4 py-3 font-medium text-gray-600">Date</th>
        <th className="px-4 py-3 font-medium text-gray-600">Time</th>
        <th className="px-4 py-3 font-medium text-gray-600">Coupon/Link</th>
        <th className="px-4 py-3 font-medium text-gray-600">Commission</th>
        <th className="px-4 py-3 font-medium text-gray-600 text-center">Clicks</th>
        <th className="px-4 py-3 font-medium text-gray-600 text-center">Orders</th>
        <th className="px-4 py-3 font-medium text-gray-600 text-right">Revenue</th>
      </tr>
    </thead>
    <tbody>
      {[
        {
          profile: "/women-docter.webp",
          name: "Andrea Lolema",
          date: "19 Oct, 2024",
          time: "04:12 PM",
          coupon: "AMU2364",
          commission: "15%",
          clicks: 2,
          orders: 2,
          revenue: 546,
        },
        {
          profile: "/women-docter.webp",
          name: "Smith Brukin",
          date: "19 Oct, 2024",
          time: "05:10 PM",
          coupon: "AMU2364",
          commission: "18%",
          clicks: 1,
          orders: 1,
          revenue: 298,
        },
        {
          profile: "/women-docter.webp",
          name: "William Stephin",
          date: "18 Oct, 2024",
          time: "04:16 PM",
          coupon: "AMU2364",
          commission: "25%",
          clicks: 1,
          orders: 1,
          revenue: 209,
        },
      ].map((row, index) => (
        <ReferralRow key={index} index={index + 1} {...row} />
      ))}
    </tbody>
  </table>
</div>


        {/* Footer */}
        <div className="flex justify-between items-center p-4 text-sm text-gray-500 flex-wrap gap-3">
          <span>Rows per page: 8</span>
          <div className="flex items-center gap-2">
            <span>1-8 of 80</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <MdChevronLeft size={20} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <MdChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, suffix, icon }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500 mb-3">{label}</p>
      <div className="flex items-center gap-3">
        <div className="bg-green-100 p-3 rounded-lg">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">
          {value}{" "}
          <span className="text-sm font-medium text-gray-400">{suffix}</span>
        </h3>
      </div>
    </div>
  );
}function ReferralRow({
  index,
  profile,
  name,
  date,
  time,
  coupon,
  commission,
  clicks,
  orders,
  revenue,
}: any) {
  return (
    <tr className="border-b border-gray-100 align-middle">
      {/* S.No: checkbox + number side-by-side */}
      <td className="px-4 py-3 align-middle whitespace-nowrap">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <input type="checkbox" className="accent-green-500" />
          <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded text-xs select-none">
            {index}
          </span>
        </div>
      </td>

      {/* Product Name: profile + name side-by-side */}
      <td className="px-4 py-3 align-middle whitespace-nowrap">
        <div className="flex items-center gap-2">
          <Image
            src={profile}
            alt={name}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="text-sm">{name}</span>
        </div>
      </td>

      <td className="px-4 py-3 align-middle whitespace-nowrap">{date}</td>
      <td className="px-4 py-3 align-middle whitespace-nowrap">{time}</td>
      <td className="px-4 py-3 align-middle whitespace-nowrap">{coupon}</td>
      <td className="px-4 py-3 align-middle whitespace-nowrap">{commission}</td>
      <td className="px-4 py-3 align-middle whitespace-nowrap text-center">{clicks}</td>
      <td className="px-4 py-3 align-middle whitespace-nowrap text-center">{orders}</td>
      <td className="px-4 py-3 align-middle whitespace-nowrap text-right">{revenue}</td>
    </tr>
  );
}
