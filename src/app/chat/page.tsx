// components/ChatPage.tsx
"use client";

export default function ChatPage() {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Main <span className="mx-2">{">"}</span>
        <span className="text-black font-medium">Chat</span>
      </div>

      {/* Page Header */}
      <h1 className="text-xl font-semibold text-gray-800 mb-6">Chat</h1>

      {/* Chat Layout */}
      <div className="flex h-[calc(100vh-180px)] bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Contacts List */}
        <div className="w-1/3 border-r border-gray-200">
          <div className="p-3 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1  focus:border-green-500"
            />
          </div>
          <div className="overflow-y-auto h-[calc(100vh-240px)]">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flex items-center p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                i === 0 ? 'bg-blue-50' : ''
              }`}>
                <div className="relative mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                    {String.fromCharCode(65 + i)}
                  </div>
                  {i % 3 === 0 && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-medium">Patient {i+1}</h3>
                  <p className="text-xs text-gray-500 truncate">
                    {i % 2 === 0 ? 'Hello doctor, I have a question...' : 'Thank you for your help!'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-3 border-b border-gray-200 flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 mr-3">
              A
            </div>
            <div>
              <h3 className="font-medium">Patient 1</h3>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              {/* Received Message */}
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg rounded-tl-none bg-gray-100">
                  <p>Hello Doctor, I wanted to ask about my recent test results.</p>
                  <p className="text-xs text-gray-500 mt-1 text-right">10:30 AM</p>
                </div>
              </div>

              {/* Sent Message */}
              <div className="flex justify-end">
                <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg rounded-tr-none bg-blue-100">
                  <p>Hello, I've reviewed your results. Everything looks normal.</p>
                  <p className="text-xs text-gray-500 mt-1 text-right">10:35 AM</p>
                </div>
              </div>

              {/* Received Message */}
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg rounded-tl-none bg-gray-100">
                  <p>That's great to hear! Thank you for checking.</p>
                  <p className="text-xs text-gray-500 mt-1 text-right">10:36 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-400"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}