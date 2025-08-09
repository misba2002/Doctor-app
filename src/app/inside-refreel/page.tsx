// components/InsideReferralToolPage.tsx
"use client";

import { FiCopy, FiLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function InsideReferralTool() {
  const referralStats = [
    { label: "Total Referral", value: "255" },
    { label: "Total Orders", value: "55" },
    { label: "Total Revenue", value: "5,540" },
    { label: "Total Link/Coupon", value: "5" }
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb with Back Button */}
      <div className="flex items-center justify-between mb-4">
        <Link 
          href="/reffrel-tool" 
          className="flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Referral Tool
        </Link>
        <div className="text-sm text-gray-500">
          Affiliate <span className="mx-2">{">"}</span>
          <span className="text-black font-medium">Referral Tool</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Referral Tool</h1>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Amrutam Nari Sondarya Malt</span>
        </div>
      </div>

      {/* Product Image Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
        <h2 className="font-semibold text-gray-800 mb-4">Product</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/product.webp" 
                alt="Amrutam Nari Sondarya Malt"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Amrutam Nari Sondarya Malt</h3>
            <p className="text-gray-600 mb-4">Traditional Ayurvedic health supplement for women's wellness</p>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Product Coupon Code</p>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-gray-800">AMU7382478</span>
                  <button 
                    onClick={() => navigator.clipboard.writeText("AMU7382478")}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiCopy />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <FiLink className="text-gray-500" />
                <span className="text-sm text-gray-600">
                  Share this product with your patients using the coupon code above
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {referralStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Cart Discount Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <h2 className="font-semibold text-gray-800 mb-4">Cart Discount</h2>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md border border-gray-200 mb-2">
          <div className="font-mono font-bold text-gray-800">DRI1AM2374</div>
          <button 
            onClick={() => navigator.clipboard.writeText("DRI1AM2374")}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
          >
            <FiCopy size={14} />
            <span>Copy</span>
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon. You get credit.
        </p>
      </div>
    </div>
  );
}