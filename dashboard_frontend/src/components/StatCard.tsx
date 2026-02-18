import React from "react";
import { TrendingUp, TrendingDown, Minus, LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: LucideIcon;
  iconBgColor?: string;
}

// PUBLIC_INTERFACE
/**
 * Modern statistical card component with icons, gradients, and trend indicators
 */
export default function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  iconBgColor = "from-[#16A34A] to-[#15803D]",
}: StatCardProps) {
  const changeColor =
    changeType === "positive"
      ? "text-[#16A34A] bg-green-50"
      : changeType === "negative"
      ? "text-[#EF4444] bg-red-50"
      : "text-[#6B7280] bg-gray-50";

  const TrendIcon =
    changeType === "positive"
      ? TrendingUp
      : changeType === "negative"
      ? TrendingDown
      : Minus;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-[#6B7280] mb-1">{title}</p>
          <p className="text-3xl font-bold text-[#111827] tracking-tight">{value}</p>
        </div>
        {Icon && (
          <div className={`w-12 h-12 bg-gradient-to-br ${iconBgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
      </div>
      {change && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${changeColor}`}>
          <TrendIcon className="w-4 h-4" />
          <span>{change}</span>
        </div>
      )}
    </div>
  );
}
