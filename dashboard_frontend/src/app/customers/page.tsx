"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Card from "@/components/Card";
import { mockCustomers, Customer } from "@/data/mockData";

// PUBLIC_INTERFACE
/**
 * Customers page displaying all customer information and statistics
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
        <div>
          <h2 className="text-2xl font-bold text-[#111827] mb-2">Customers</h2>
          <p className="text-[#6B7280]">View and manage your customer base.</p>
        </div>

        {/* Search Bar */}
        <Card>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search customers by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
              />
            </div>
            <button className="px-6 py-2 bg-[#111827] text-white rounded-lg hover:bg-[#1f2937] transition-colors font-medium">
              Search
            </button>
          </div>
        </Card>

        {/* Customers Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Customer ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Phone</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Total Orders</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Total Spent</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Join Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-[#111827]">{customer.id}</td>
                    <td className="py-3 px-4 text-sm text-[#111827]">{customer.name}</td>
                    <td className="py-3 px-4 text-sm text-[#6B7280]">{customer.email}</td>
                    <td className="py-3 px-4 text-sm text-[#6B7280]">{customer.phone}</td>
                    <td className="py-3 px-4 text-sm text-[#111827]">{customer.totalOrders}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-[#111827]">
                      ${customer.totalSpent.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#6B7280]">{customer.joinDate}</td>
                    <td className="py-3 px-4">
                      <button className="text-[#16A34A] hover:text-[#15803D] text-sm font-medium">
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
