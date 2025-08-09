// components/DoctorDashboard.tsx
"use client";

import { FiActivity, FiCalendar, FiUsers, FiMessageSquare, FiDollarSign } from "react-icons/fi";

export default function DoctorDashboard() {
  // Sample data
  const stats = [
    { icon: <FiUsers size={24} />, title: "Total Patients", value: "142", trend: "+12%", color: "bg-blue-100 text-blue-600" },
    { icon: <FiCalendar size={24} />, title: "Today's Appointments", value: "8", trend: "+2", color: "bg-green-100 text-green-600" },
    { icon: <FiMessageSquare size={24} />, title: "Unread Messages", value: "5", trend: "Urgent", color: "bg-yellow-100 text-yellow-600" },
    { icon: <FiDollarSign size={24} />, title: "Monthly Earnings", value: "₹82,450", trend: "↑15%", color: "bg-purple-100 text-purple-600" }
  ];

  const appointments = [
    { id: 1, patient: "Rahul Sharma", time: "10:00 AM", type: "Follow-up", status: "Confirmed" },
    { id: 2, patient: "Priya Patel", time: "11:30 AM", type: "New Patient", status: "Confirmed" },
    { id: 3, patient: "Arjun Kumar", time: "2:15 PM", type: "Consultation", status: "Pending" }
  ];

  const recentPatients = [
    { id: 1, name: "Neha Gupta", lastVisit: "2 days ago", condition: "Diabetes" },
    { id: 2, name: "Vikram Singh", lastVisit: "1 week ago", condition: "Hypertension" },
    { id: 3, name: "Ananya Reddy", lastVisit: "3 days ago", condition: "Asthma" }
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Main <span className="mx-2">{">"}</span>
        <span className="text-black font-medium">Dashboard</span>
      </div>

      {/* Welcome Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome,Dr. Liam</h1>
          <p className="text-gray-500">Here is what is happening with your practice today</p>
        </div>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search dashboard..."
            className="w-full pl-8 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1  focus:border-green-500"
          />
          <svg
            className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                {stat.icon}
              </div>
              <span className="text-sm text-gray-500">{stat.trend}</span>
            </div>
            <h3 className="text-lg font-bold mt-2">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg text-gray-800">Today's Schedule</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
          </div>
          <div className="space-y-4">
            {appointments.map(appt => (
              <div key={appt.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <FiCalendar className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{appt.patient}</h3>
                  <p className="text-sm text-gray-500">{appt.time} • {appt.type}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  appt.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}>
                  {appt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Patients */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h2 className="font-semibold text-lg text-gray-800 mb-4">Recent Patients</h2>
          <div className="space-y-3">
            {recentPatients.map(patient => (
              <div key={patient.id} className="flex items-center p-2 hover:bg-gray-50 rounded">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                  {patient.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium">{patient.name}</h3>
                  <p className="text-xs text-gray-500">{patient.condition} • {patient.lastVisit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
        <h2 className="font-semibold text-lg text-gray-800 mb-4">Practice Health Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-500">Avg. Patient Wait Time</p>
            <p className="text-xl font-bold">12 mins</p>
          </div>
          <div className="p-3 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-500">Patient Satisfaction</p>
            <p className="text-xl font-bold">94%</p>
          </div>
          <div className="p-3 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-500">Prescriptions This Month</p>
            <p className="text-xl font-bold">78</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <h2 className="font-semibold text-lg text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button className="p-3 border border-gray-200 rounded-lg text-center hover:bg-gray-50">
            <div className="bg-blue-100 p-2 rounded-lg inline-block mb-2">
              <FiActivity className="text-blue-600" />
            </div>
            <p className="text-sm">New Appointment</p>
          </button>
          <button className="p-3 border border-gray-200 rounded-lg text-center hover:bg-gray-50">
            <div className="bg-green-100 p-2 rounded-lg inline-block mb-2">
              <FiUsers className="text-green-600" />
            </div>
            <p className="text-sm">Add Patient</p>
          </button>
          <button className="p-3 border border-gray-200 rounded-lg text-center hover:bg-gray-50">
            <div className="bg-purple-100 p-2 rounded-lg inline-block mb-2">
              <FiMessageSquare className="text-purple-600" />
            </div>
            <p className="text-sm">Send Message</p>
          </button>
          <button className="p-3 border border-gray-200 rounded-lg text-center hover:bg-gray-50">
            <div className="bg-yellow-100 p-2 rounded-lg inline-block mb-2">
              <FiDollarSign className="text-yellow-600" />
            </div>
            <p className="text-sm">Generate Bill</p>
          </button>
        </div>
      </div>
    </div>
  );
}