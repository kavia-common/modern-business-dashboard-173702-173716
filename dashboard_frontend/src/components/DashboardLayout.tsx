"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  MessageSquare,
  Menu,
  X,
  Bell,
  Search,
  Settings,
  ChevronDown,
  LogOut,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// PUBLIC_INTERFACE
/**
 * Modern dashboard layout with enhanced sidebar navigation, header with search, and improved UX
 */
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/orders", label: "Orders", icon: ShoppingCart },
    { href: "/customers", label: "Customers", icon: Users },
    { href: "/products", label: "Products", icon: Package },
    { href: "/support", label: "Support", icon: MessageSquare },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#111827] via-[#1a2332] to-[#111827] text-white transition-all duration-300 z-40 shadow-2xl ${
          sidebarOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#16A34A] to-[#15803D] rounded-lg flex items-center justify-center shadow-lg">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Admin Panel</h1>
                <p className="text-xs text-gray-400">v2.0</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                        active
                          ? "bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white shadow-lg shadow-green-500/20"
                          : "hover:bg-gray-800/50 text-gray-300 hover:text-white"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${active ? "text-white" : "text-gray-400 group-hover:text-white"}`} />
                      <span className="font-medium">{item.label}</span>
                      {active && (
                        <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer Section */}
          <div className="p-4 border-t border-gray-700/50">
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800/50 text-gray-300 hover:text-white transition-all w-full">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Toggle sidebar"
              >
                {sidebarOpen ? (
                  <X className="w-5 h-5 text-[#111827]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#111827]" />
                )}
              </button>

              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <Bell className="w-5 h-5 text-[#6B7280]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-[#16A34A] to-[#15803D] rounded-xl flex items-center justify-center text-white font-semibold shadow-md">
                    A
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-[#111827]">Admin User</p>
                    <p className="text-xs text-[#6B7280]">admin@company.com</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#6B7280] transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                    <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left">
                      <Settings className="w-4 h-4 text-[#6B7280]" />
                      <span className="text-sm text-[#111827]">Account Settings</span>
                    </button>
                    <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left">
                      <LogOut className="w-4 h-4 text-[#6B7280]" />
                      <span className="text-sm text-[#111827]">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 md:p-8">{children}</main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
