import React from "react";
import { StatusBadge } from "../StatusBadge";

import type { StatusBadgeProps } from "../StatusBadge/StatusBadge";

interface ServiceCardProps {
  title: string;
  status: StatusBadgeProps["status"];
  statusText?: string;
  children?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  status,
  statusText,
  children,
}) => (
  <div className="border rounded-lg p-4 mb-4 shadow bg-white">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-bold text-lg">{title}</h3>
      <StatusBadge status={status}>{statusText}</StatusBadge>
    </div>
    <div>{children}</div>
  </div>
);
