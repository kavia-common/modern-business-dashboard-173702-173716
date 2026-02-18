"use client";

import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import Card from "@/components/Card";
import { dashboardStats, mockOrders } from "@/data/mockData";
import { DollarSign, ShoppingCart, Users, TrendingUp, Clock, Package, Eye } from "lucide-react";

// PUBLIC_INTERFACE
/**
 * Modern dashboard analytics page with enhanced visuals, icons, and improved layout
 */
export default function Home() {
  const recentOrders = mockOrders.slice(0, 5);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h2 className="text-3xl font-bold text-[#111827] mb-2">Dashboard Analytics</h2>
          <p className="text-[#6B7280] text-lg">Welcome back! Here&apos;s your business overview for today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value={`$${dashboardStats.totalRevenue.toLocaleString()}`}
            change={dashboardStats.revenueChange}
            changeType="positive"
            icon={DollarSign}
            iconBgColor="from-emerald-500 to-emerald-600"
          />
          <StatCard
            title="Total Orders"
            value={dashboardStats.totalOrders.toLocaleString()}
            change={dashboardStats.ordersChange}
            changeType="positive"
            icon={ShoppingCart}
            iconBgColor="from-blue-500 to-blue-600"
          />
          <StatCard
            title="Total Customers"
            value={dashboardStats.totalCustomers.toLocaleString()}
            change={dashboardStats.customersChange}
            changeType="positive"
            icon={Users}
            iconBgColor="from-purple-500 to-purple-600"
          />
          <StatCard
            title="Avg Order Value"
            value={`$${dashboardStats.averageOrderValue}`}
            change={dashboardStats.avgOrderChange}
            changeType="positive"
            icon={TrendingUp}
            iconBgColor="from-orange-500 to-orange-600"
          />
        </div>

        {/* Recent Orders */}
        <Card 
          title="Recent Orders" 
          subtitle="Your latest customer transactions"
          icon={Clock}
          actions={
            <button className="text-[#16A34A] hover:text-[#15803D] text-sm font-medium flex items-center gap-1 transition-colors">
              View All
              <TrendingUp className="w-4 h-4" />
            </button>
          }
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
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-sm font-semibold text-[#111827]">{order.id}</td>
                    <td className="py-4 px-4 text-sm text-[#111827] font-medium">{order.customer}</td>
                    <td className="py-4 px-4 text-sm text-[#6B7280] flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#6B7280]" />
                      {order.product}
                    </td>
                    <td className="py-4 px-4 text-sm font-bold text-[#111827]">
                      ${order.amount.toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold ${
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
