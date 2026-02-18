"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Card from "@/components/Card";
import { mockOrders, Order } from "@/data/mockData";

// PUBLIC_INTERFACE
/**
 * Orders page displaying all customer orders with filtering
 */
export default function OrdersPage() {
  const [filter, setFilter] = useState<string>("all");
  const [orders] = useState<Order[]>(mockOrders);

  const filteredOrders =
    filter === "all" ? orders : orders.filter((order) => order.status === filter);

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
        <div>
          <h2 className="text-2xl font-bold text-[#111827] mb-2">Orders</h2>
          <p className="text-[#6B7280]">Manage and track all customer orders.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          {Object.entries(statusCounts).map(([status, count]) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? "bg-[#111827] text-white"
                  : "bg-white text-[#6B7280] border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Product</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-[#111827]">{order.id}</td>
                    <td className="py-3 px-4 text-sm text-[#111827]">{order.customer}</td>
                    <td className="py-3 px-4 text-sm text-[#6B7280]">{order.product}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-[#111827]">
                      ${order.amount.toFixed(2)}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "processing"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-[#6B7280]">{order.date}</td>
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
