import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: LucideIcon;
  actions?: React.ReactNode;
}

// PUBLIC_INTERFACE
/**
 * Modern card component with optional header, icon, and action buttons
 */
export default function Card({ children, className = "", title, subtitle, icon: Icon, actions }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      {(title || subtitle || Icon || actions) && (
        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="w-10 h-10 bg-gradient-to-br from-[#16A34A] to-[#15803D] rounded-xl flex items-center justify-center shadow-md">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              )}
              <div>
                {title && <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>}
                {subtitle && <p className="text-sm text-[#6B7280] mt-0.5">{subtitle}</p>}
              </div>
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
