import React from "react";
import { StatusBadge } from "../StatusBadge";

import type { StatusBadgeProps } from "../StatusBadge/StatusBadge";

interface ServiceCardProps {
  title: string;
  status?: StatusBadgeProps["status"];
  children?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  status,
  children,
}) => (
  <div className="border rounded-lg p-4 mb-4 shadow bg-white">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-bold text-lg">{title}</h3>
      {status && <StatusBadge status={status} />}
    </div>
    <div>{children}</div>
  </div>
);
