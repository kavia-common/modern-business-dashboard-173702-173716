"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Card from "@/components/Card";
import { mockOrders, Order } from "@/data/mockData";
import { ShoppingCart, Filter, Eye, Download, Search } from "lucide-react";

// PUBLIC_INTERFACE
/**
 * Modern orders page with enhanced filtering, search, and visual improvements
 */
export default function OrdersPage() {
  const [filter, setFilter] = useState<string>("all");
  const [orders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter((order) => {
    const matchesFilter = filter === "all" || order.status === filter;
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusCounts = {
    all: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    completed: orders.filter((o) => o.status === "completed").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-2">Orders Management</h2>
            <p className="text-[#6B7280] text-lg">Track and manage all customer orders</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white rounded-xl hover:shadow-lg transition-all font-medium">
            <Download className="w-5 h-5" />
            Export Orders
          </button>
        </div>

        {/* Search and Filter Bar */}
        <Card>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by order ID, customer, or product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent transition-all"
              />
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111827] text-white rounded-xl hover:bg-[#1f2937] transition-colors font-medium whitespace-nowrap">
              <Filter className="w-5 h-5" />
              Advanced Filters
            </button>
          </div>
        </Card>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          {Object.entries(statusCounts).map(([status, count]) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === status
                  ? "bg-gradient-to-r from-[#111827] to-[#1f2937] text-white shadow-lg"
                  : "bg-white text-[#6B7280] border border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              <span className="capitalize">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                filter === status ? "bg-white/20 text-white" : "bg-gray-100 text-[#111827]"
              }`}>
                {count}
              </span>
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <Card 
          title="All Orders" 
          subtitle={`Showing ${filteredOrders.length} orders`}
          icon={ShoppingCart}
        >
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Order ID</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Customer</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Product</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Amount</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Status</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Date</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-sm font-semibold text-[#111827]">{order.id}</td>
                    <td className="py-4 px-4 text-sm text-[#111827] font-medium">{order.customer}</td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{order.product}</td>
                    <td className="py-4 px-4 text-sm font-bold text-[#111827]">
                      ${order.amount.toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                          order.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "processing"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          order.status === "completed" ? "bg-green-500" : 
                          order.status === "processing" ? "bg-blue-500" :
                          order.status === "pending" ? "bg-yellow-500" : "bg-red-500"
                        }`}></div>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{order.date}</td>
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
