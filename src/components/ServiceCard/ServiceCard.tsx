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
      "border rounded-lg p-2 flex flex-col gap-4 shadow bg-white",
      className
    )}
  >
    <div className="flex items-center justify-between gap-4">
      <div className="text-md">{title}</div>
      {status && <StatusBadge status={status} />}
    </div>
    {children && (
      <div className="border-blue-400 border-1 rounded-md p-2 m-2">
        {children}
      </div>
    )}
  </div>
);
