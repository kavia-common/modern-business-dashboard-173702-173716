"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Card from "@/components/Card";
import { mockCustomers, Customer } from "@/data/mockData";
import { Users, Search, Mail, Phone, Calendar, Eye, UserPlus } from "lucide-react";

// PUBLIC_INTERFACE
/**
 * Modern customers page with enhanced search and visual improvements
 */
export default function CustomersPage() {
  const [customers] = useState<Customer[]>(mockCustomers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-2">Customers</h2>
            <p className="text-[#6B7280] text-lg">View and manage your customer base</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white rounded-xl hover:shadow-lg transition-all font-medium">
            <UserPlus className="w-5 h-5" />
            Add Customer
          </button>
        </div>

        {/* Search Bar */}
        <Card>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </Card>

        {/* Customers Table */}
        <Card 
          title="All Customers" 
          subtitle={`Showing ${filteredCustomers.length} customers`}
          icon={Users}
        >
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Customer ID</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Name</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Email</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Phone</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Total Orders</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Total Spent</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Join Date</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-sm font-semibold text-[#111827]">{customer.id}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#16A34A] to-[#15803D] rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                          {customer.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-[#111827]">{customer.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <Mail className="w-4 h-4" />
                        {customer.email}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <Phone className="w-4 h-4" />
                        {customer.phone}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                        {customer.totalOrders} orders
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm font-bold text-[#111827]">
                      ${customer.totalSpent.toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <Calendar className="w-4 h-4" />
                        {customer.joinDate}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button className="inline-flex items-center gap-1 text-[#16A34A] hover:text-[#15803D] text-sm font-medium transition-colors">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
