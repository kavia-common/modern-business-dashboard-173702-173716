import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

// PUBLIC_INTERFACE
/**
 * Reusable Card component for dashboard content sections
 */
export default function Card({ children, className = "", title }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>
      {title && <h3 className="text-lg font-semibold text-[#111827] mb-4">{title}</h3>}
      {children}
    </div>
  );
}
