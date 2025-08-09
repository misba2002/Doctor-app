// components/Header.tsx
import { Bell, Mail, Menu, Settings,Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-full overflow-hidden items-center justify-between px-1 py-4 bg-white border border-transparent border-b shadow-sm h-15  text-[#6A9955]">
      {/* Left: Burger + Logo */}
      <div className="flex items-center justify-center gap-4 [@media(max-width:550px)]:gap-0 ">
        <h1 className="text-xl w-auto font-semibold  text-[#6A9955]  [@media(max-width:600px)]:w-1/2 ">AMRUTAM</h1>
         <Menu className="w-8 h-8 text-[#6A9955]-700 cursor-pointer  [@media(max-width:600px)]:w-5 [@media(max-width:600px)]:h-5" />

       {/* search container */}
       <div className="flex-1 ml-0 mx-0.5 max-w-lg  [@media(max-width:600px)]:h-6">
     <div className="relative    w-full [@media(max-width:600px)]:w-auto ">
    {/* Search Icon inside input */}
    <Search className="absolute left-0 top-1 w-1/6 h-4 text-[#6A9955]" />

    <input
      type="text" 
      placeholder="Search here"
      className="w-full h-5 pl-10 pr-2 py-2 text-[#6A9955]-400 border border-transparent  bg-[#f6f2f2] rounded-[6px] shadow-sm focus:outline-none [@media(max-width:600px)]:pl-4 [@media(max-width:600px)]:h-[2px] [@media(max-width:600px)]:placeholder:text-xs "
    />
  </div>
</div>
         
      </div>

  

      {/* Right: Mail, Bell, Profile */}
      <div className="flex items-center justify-between gap-4  [@media(max-width:550px)]:gap-2  [@media(max-width:550px)]:gap-0">
        <div className="relative">
        <Mail className="w-5 h-5 text-[#6A9955]-600 cursor-pointer " />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </div>
         <div className="relative">
        <Bell className="w-5 h-5 text-[#6A9955]-600 cursor-pointer" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </div>
        <div className="flex items-center gap-2 [@media(max-width:500px)]:gap-1">
          <div className="text-right">
            <p className="text-sm font-medium [@media(max-width:600px)]:text-xs text-[#6A9955]-500">Dr. Liam Michael</p>
            <p className="text-xs text-[#6A9955]-300">Doctor</p>
          </div>
          <img
            src="https://imgs.search.brave.com/-FrkOH5jjXGn7vlF3vIbiBf4y0viq2mPX8zXAjwqXmM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vYXJvc29mdC9h/cm9zb2Z0MTQwMy9h/cm9zb2Z0MTQwMzAw/MzI3LzI2NjU2OTc2/LXByb2Zlc3Npb25h/bC15b3VuZy1kb2N0/b3ItYXQtd29yay1j/bG9zZS11cC5qcGc_/dmVyPTY" // <-- You can use public/profile.jpg or any online image URL
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <Settings className=" w-5 h-5 text-[#6A9955]-700 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
