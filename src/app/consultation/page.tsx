// components/ConsultationPage.tsx
"use client";

export default function ConsultationPage() {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Main <span className="mx-2">{">"}</span>
        <span className="text-black font-medium">Consultation</span>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Consultation</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
            + New Consultation
          </button>
        </div>
      </div>

      {/* Consultation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Patient {i+1}</h3>
                  <p className="text-sm text-gray-500">Consultation #{1000+i}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  i % 3 === 0 ? 'bg-green-100 text-green-800' : 
                  i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {i % 3 === 0 ? 'Completed' : i % 3 === 1 ? 'In Progress' : 'Pending'}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Date:</span>
                <span>Oct {20+i}, 2023</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Time:</span>
                <span>{10+i}:00 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Duration:</span>
                <span>30 mins</span>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}