"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Card from "@/components/Card";
import { mockTickets, SupportTicket } from "@/data/mockData";
import { MessageSquare, Plus, Eye, AlertCircle, Clock } from "lucide-react";

// PUBLIC_INTERFACE
/**
 * Modern support tickets page with enhanced filtering and visual improvements
 */
export default function SupportPage() {
  const [tickets] = useState<SupportTicket[]>(mockTickets);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");

  const filteredTickets = tickets.filter((ticket) => {
    const statusMatch = filterStatus === "all" || ticket.status === filterStatus;
    const priorityMatch = filterPriority === "all" || ticket.priority === filterPriority;
    return statusMatch && priorityMatch;
  });

  const statuses = ["all", "open", "in-progress", "resolved", "closed"];
  const priorities = ["all", "low", "medium", "high", "urgent"];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority: string) => {
    return priority === "urgent" || priority === "high" ? AlertCircle : Clock;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "open":
        return "bg-yellow-100 text-yellow-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-2">Support Tickets</h2>
            <p className="text-[#6B7280] text-lg">Manage and respond to customer support requests</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white rounded-xl hover:shadow-lg transition-all font-medium">
            <Plus className="w-5 h-5" />
            New Ticket
          </button>
        </div>

        {/* Filters */}
        <Card title="Filters" subtitle="Filter tickets by status and priority">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#111827] mb-3">
                Status
              </label>
              <div className="flex gap-2 flex-wrap">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
                      filterStatus === status
                        ? "bg-gradient-to-r from-[#111827] to-[#1f2937] text-white shadow-lg"
                        : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"
                    }`}
                  >
                    {status.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#111827] mb-3">
                Priority
              </label>
              <div className="flex gap-2 flex-wrap">
                {priorities.map((priority) => (
                  <button
                    key={priority}
                    onClick={() => setFilterPriority(priority)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
                      filterPriority === priority
                        ? "bg-gradient-to-r from-[#111827] to-[#1f2937] text-white shadow-lg"
                        : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"
                    }`}
                  >
                    {priority}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Tickets Table */}
        <Card 
          title="All Tickets" 
          subtitle={`Showing ${filteredTickets.length} tickets`}
          icon={MessageSquare}
        >
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Ticket ID</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Customer</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Subject</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Priority</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Status</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Date</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket) => {
                  const PriorityIcon = getPriorityIcon(ticket.priority);
                  return (
                    <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-sm font-semibold text-[#111827]">{ticket.id}</td>
                      <td className="py-4 px-4 text-sm text-[#111827] font-medium">{ticket.customer}</td>
                      <td className="py-4 px-4 text-sm text-[#6B7280]">{ticket.subject}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getPriorityColor(
                            ticket.priority
                          )}`}
                        >
                          <PriorityIcon className="w-3 h-3" />
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(
                            ticket.status
                          )}`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            ticket.status === "resolved" ? "bg-green-500" : 
                            ticket.status === "in-progress" ? "bg-blue-500" :
                            ticket.status === "open" ? "bg-yellow-500" : "bg-gray-500"
                          }`}></div>
                          {ticket.status.replace("-", " ")}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-[#6B7280]">{ticket.date}</td>
                      <td className="py-4 px-4">
                        <button className="inline-flex items-center gap-1 text-[#16A34A] hover:text-[#15803D] text-sm font-medium transition-colors">
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
