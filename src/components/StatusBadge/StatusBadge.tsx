import React from "react";

export interface StatusBadgeProps {
  status: "loading" | "good" | "invalid" | "standby" | "inactive" | "unknown";
  children?: React.ReactNode;
}

const statusMap = {
  loading: "bg-yellow-200 text-yellow-800 border-yellow-400",
  good: "bg-green-200 text-green-800 border-green-400",
  invalid: "bg-red-200 text-red-800 border-red-400",
  standby: "bg-blue-200 text-blue-800 border-blue-400",
  inactive: "bg-gray-200 text-gray-800 border-gray-400",
  unknown: "bg-gray-100 text-gray-500 border-gray-200",
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  children,
}) => (
  <span
    className={`inline-block px-2 py-1 rounded border text-xs font-semibold ${
      statusMap[status] || statusMap.unknown
    }`}
  >
    {children || status}
  </span>
);
