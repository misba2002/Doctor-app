"use client";


import {
  LayoutDashboard,
  Users,
  CalendarDays,
  MessageSquare,
  CreditCard,
  Link as LinkIcon,
  History,
  ChevronDown,
  BookOpen, // For Consultation icon (open book)
  Grid,     // For Affiliate icon
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function SideNavbar() {
  const pathname = usePathname();

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Patients", icon: Users, href: "/patients" },
    { label: "Doctor Schedule", icon: CalendarDays, href: "/docter-schedule" },
    { label: "Appointments", icon: CalendarDays, href: "/appointment" },
    { label: "Chat", icon: MessageSquare, href: "/chat" },
    { label: "Consultation", icon: BookOpen, href: "/consultation" }, // changed icon here
    { label: "Wallet", icon: CreditCard, href: "/wallet" },
  ];

  const affiliateItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/affiliate-dashboard" },
    { label: "Referral Tool", icon: LinkIcon, href: "/reffrel-tool" },
    { label: "Earning History", icon: History, href: "/earning-history" },
  ];

  const [affiliateOpen, setAffiliateOpen] = useState(false);

  useEffect(() => {
    if (pathname?.startsWith("/affiliate")) {
      setAffiliateOpen(true);
    }
  }, [pathname]);

  const linkClass = (href: string, isSubItem = false) =>
    `relative flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors duration-200
     ${
       pathname === href
         ? "bg-[#E9F5EE] text-[#3B755F] font-medium"
         : "text-gray-700 hover:bg-gray-100"
     }
     ${isSubItem ? "pl-10" : ""}`;

  const activeBar = (href: string) =>
    pathname === href ? (
      <span className="absolute left-0 top-0 h-full w-[3px] bg-[#3B755F] rounded-r-md" />
    ) : null;

  return (
    <aside
      className="fixed top-[74px] left-0 h-[calc(100vh-90px)] w-60 bg-white border-r border-gray-200 flex flex-col 
                 overflow-hidden shadow-[4px_4px_12px_rgba(0,0,0,0.1)] rounded-tr-[50px]"
    >
      <nav className="flex-1 overflow-y-scroll py-4 custom-scrollbar">
        {/* Main Header */}
        <div className="px-4 mb-3">
          <span className="text-xs font-semibold text-gray-400 uppercase">Main</span>
        </div>

        {/* Main Menu */}
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            {activeBar(item.href)}
            <item.icon size={18} strokeWidth={1.8} />
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}

        {/* Affiliate Section */}
        <div className="mt-6">
          <button
            onClick={() => setAffiliateOpen(!affiliateOpen)}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md transition-colors duration-200
              ${
                pathname.startsWith("/affiliate")
                  ? "bg-[#E9F5EE] text-[#3B755F] font-medium"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
          >
            <div className="flex items-center gap-2">
              <Grid size={16} strokeWidth={1.8} /> {/* Affiliate icon */}
              <span className="text-[11px] uppercase font-semibold tracking-wider">
                Affiliate
              </span>
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                affiliateOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {affiliateOpen && (
            <div className="mt-2 flex flex-col gap-1">
              {affiliateItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass(item.href, true)}
                >
                  {activeBar(item.href)}
                  <item.icon size={16} strokeWidth={1.8} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
