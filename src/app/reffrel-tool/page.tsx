// components/ReferralToolPage.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function ReferralTool() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showLink, setShowLink] = useState(false);

  const products = [
    { id: 1, name: "Amrutam Nari Sondarya Malt", code: "AMU7382478" },
    { id: 2, name: "Amrutam Heart Care Malt", code: "AMU7382479" },
    { id: 3, name: "Amrutam Liver Care Malt", code: "AMU7382480" }
  ];

  const handleProductSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(e.target.value);
    setShowLink(false);
  };

  const generateLink = () => {
    if (selectedProduct) {
      setShowLink(true);
    }
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Affiliate <span className="mx-2">{">"}</span>
        <span className="text-black font-medium">Referral Tool</span>
      </div>

      {/* Page Header */}
      <h1 className="text-xl font-semibold text-gray-800 mb-6">Referral Tool</h1>

      {/* Attribute Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
        <h2 className="font-semibold text-gray-800 mb-4">Attribute</h2>
        <h3 className="text-lg font-medium text-gray-700 mb-6">Referral Tool</h3>
        
        {/* Product Link/Coupon Section */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-2">Product Link/Coupon</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter the name of Product 
              </label>
              <select
                value={selectedProduct}
                onChange={handleProductSelect}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:border-green-500"
              >
                <option value="">Select a product</option>
                {products.map(product => (
                  <option key={product.id} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={generateLink}
              disabled={!selectedProduct}
              className={`px-4 py-2 rounded-md ${selectedProduct ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              Generate Referral Link
            </button>
          </div>
        </div>

        {/* Generated Link Section */}
        {showLink && selectedProduct && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
            <h4 className="font-medium text-gray-700 mb-2">Your Referral Link</h4>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <Link
                href="/inside-refreel"
                className="text-blue-600 hover:underline break-all"
              >
                https://www.amrutam.global/products/{selectedProduct.toLowerCase().replace(/ /g, '-')}?ref=DRLIAM2374
              </Link>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-700 mb-1">Product Coupon Code</p>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-gray-800">
                  {products.find(p => p.name === selectedProduct)?.code}
                </span>
                <button 
                  onClick={() => navigator.clipboard.writeText(products.find(p => p.name === selectedProduct)?.code || '')}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cart Discount Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <h2 className="font-semibold text-gray-800 mb-4">Cart Discount</h2>
        <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <div className="text-lg font-mono font-bold text-gray-800">DRLIAM2374</div>
            <button 
              onClick={() => navigator.clipboard.writeText("DRLIAM2374")}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy
            </button>
          </div>
          <p className="text-sm text-gray-600">
            Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon. You get credit.
          </p>
        </div>
      </div>
    </div>
  );
}