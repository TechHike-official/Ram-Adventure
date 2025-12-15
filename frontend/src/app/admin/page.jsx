"use client"

import React, { useState } from "react"
import {
  LayoutDashboard,
  Users,
  MapPinned,
  LogOut,
  Menu,
  X,
} from "lucide-react"

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex bg-gray-100 h-[calc(100vh-64px)]">

      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-gray-900 text-white
        transform transition-transform duration-300 flex flex-col
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <h1 className="text-xl font-extrabold">Admin Panel</h1>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarItem icon={<Users size={18} />} label="Users" />
          <SidebarItem icon={<MapPinned size={18} />} label="Packages" />
        </nav>

        <div className="mt-auto p-4 border-t border-gray-600">
          <SidebarItem icon={<LogOut size={18} />} label="Logout" />
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex items-center justify-between md:hidden">
          <button onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <h2 className="font-semibold">Admin Dashboard</h2>
        </header>

        <main className="flex-1 overflow-y-auto p-6"></main>
      </div>

    </div>
  )
}

function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 cursor-pointer transition">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
