import React from "react";
import { StatusBadge } from "../StatusBadge";

import type { StatusBadgeProps } from "../StatusBadge/StatusBadge";
import { cn } from "../../utils/cn";

interface ServiceCardProps {
  title: string;
  status?: StatusBadgeProps["status"];
  children?: React.ReactNode;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  status,
  children,
  className,
}) => (
  <div
    className={cn(
      "border-1 border-fuchsia-200 rounded-lg p-2  flex flex-col gap-4  bg-white shadow-gray-400 shadow-lg",
      className
    )}
  >
    <div className="flex items-center justify-between gap-4">
      <div className="text-md text-fuchsia-900">{title}</div>
      {status && <StatusBadge status={status} />}
    </div>
    {children && (
      <div className="border-blue-300 border-1 rounded-md p-2 text-blue-900">
        {children}
      </div>
    )}
  </div>
);
