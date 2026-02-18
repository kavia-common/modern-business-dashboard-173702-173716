"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Card from "@/components/Card";
import { mockTickets, SupportTicket } from "@/data/mockData";

// PUBLIC_INTERFACE
/**
 * Support Tickets page displaying all customer support requests
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
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2">Support Tickets</h2>
            <p className="text-[#6B7280]">Manage and respond to customer support requests.</p>
          </div>
          <button className="px-6 py-2 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D] transition-colors font-medium">
            + New Ticket
          </button>
        </div>

        {/* Filters */}
        <Card>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#6B7280] mb-2">
                Filter by Status
              </label>
              <div className="flex gap-2 flex-wrap">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                      filterStatus === status
                        ? "bg-[#111827] text-white"
                        : "bg-white text-[#6B7280] border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {status.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#6B7280] mb-2">
                Filter by Priority
              </label>
              <div className="flex gap-2 flex-wrap">
                {priorities.map((priority) => (
                  <button
                    key={priority}
                    onClick={() => setFilterPriority(priority)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                      filterPriority === priority
                        ? "bg-[#111827] text-white"
                        : "bg-white text-[#6B7280] border border-gray-200 hover:bg-gray-50"
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
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Ticket ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Subject</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Priority</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-[#111827]">{ticket.id}</td>
                    <td className="py-3 px-4 text-sm text-[#111827]">{ticket.customer}</td>
                    <td className="py-3 px-4 text-sm text-[#6B7280]">{ticket.subject}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                          ticket.priority
                        )}`}
                      >
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          ticket.status
                        )}`}
                      >
                        {ticket.status.replace("-", " ")}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-[#6B7280]">{ticket.date}</td>
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
