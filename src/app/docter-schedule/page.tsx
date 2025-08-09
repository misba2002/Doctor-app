// components/DoctorSchedulePage.tsx
"use client";

export default function DoctorSchedulePage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Main <span className="mx-2">{">"}</span>
        <span className="text-black font-medium">Doctor Schedule</span>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Doctor Schedule</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
            + Add Schedule
          </button>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-600 text-left">Time</th>
                {days.map(day => (
                  <th key={day} className="px-4 py-3 font-medium text-gray-600 text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {timeSlots.map(time => (
                <tr key={time}>
                  <td className="px-4 py-3 text-sm text-gray-500">{time}</td>
                  {days.map((day, i) => (
                    <td key={day} className="px-4 py-3 text-center">
                      {i % 2 === 0 && time !== '12:00 PM' ? (
                        <div className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          Booked
                        </div>
                      ) : time === '12:00 PM' ? (
                        <span className="text-xs text-gray-400">Lunch</span>
                      ) : (
                        <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          Available
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}