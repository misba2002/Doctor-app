// components/AppointmentsPage.tsx
"use client";

export default function AppointmentsPage() {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Main <span className="mx-2">{">"}</span>
        <span className="text-black font-medium">Appointments</span>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Appointments</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
            + New Appointment
          </button>
        </div>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium text-gray-700">October 2023</h2>
          <div className="flex gap-2">
            <button className="p-1 rounded hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-1 rounded hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          
          {[...Array(35)].map((_, i) => {
            const day = i - 4 + 1; // Adjust for October 2023 starting on Sunday
            return (
              <div 
                key={i} 
                className={`min-h-12 p-1 border ${i % 7 === 0 || i % 7 === 6 ? 'bg-gray-50' : ''} ${
                  day > 0 && day <= 31 ? 'cursor-pointer hover:bg-gray-100' : 'text-gray-300'
                }`}
              >
                {day > 0 && day <= 31 ? (
                  <>
                    <div className="text-right">{day}</div>
                    {day % 5 === 0 && (
                      <div className="text-xs truncate bg-blue-100 text-blue-800 rounded px-1">
                        {day % 10 === 0 ? 'Dr. Smith' : 'Follow-up'}
                      </div>
                    )}
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="font-medium text-gray-700 mb-4">Upcoming Appointments</h2>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-start p-3 border border-gray-200 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">Patient {i+1}</h3>
                  <span className="text-sm text-gray-500">Oct {25+i}, 2023</span>
                </div>
                <p className="text-sm text-gray-500">10:{i+1}0 AM - Follow-up consultation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}