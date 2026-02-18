import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: string;
}

// PUBLIC_INTERFACE
/**
 * Statistical card component for displaying key metrics
 */
export default function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon,
}: StatCardProps) {
  const changeColor =
    changeType === "positive"
      ? "text-[#16A34A]"
      : changeType === "negative"
      ? "text-[#EF4444]"
      : "text-[#6B7280]";

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#6B7280] mb-1">{title}</p>
          <p className="text-3xl font-bold text-[#111827]">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${changeColor}`}>
              {changeType === "positive" ? "↑" : changeType === "negative" ? "↓" : "→"} {change}
            </p>
          )}
        </div>
        {icon && <span className="text-3xl">{icon}</span>}
      </div>
    </div>
  );
}
