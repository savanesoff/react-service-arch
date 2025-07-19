import type { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import React, { useMemo } from "react";

type QueryStatus = Pick<
  UseQueryResult,
  "isLoading" | "isError" | "isSuccess" | "isEnabled"
>;
type MutationStatus = Pick<
  UseMutationResult,
  "isPending" | "isError" | "isSuccess" | "isPaused"
>;

export interface StatusBadgeProps {
  status: QueryStatus | MutationStatus;
  children?: React.ReactNode;
}

const statusMap = {
  loading: "bg-yellow-200 text-yellow-800 border-yellow-400",
  success: "bg-green-200 text-green-800 border-green-400",
  error: "bg-red-200 text-red-800 border-red-400",
  inactive: "bg-gray-200 text-gray-800 border-gray-400",
  active: "bg-green-200 text-green-800 border-green-400",
  unknown: "bg-gray-100 text-gray-500 border-gray-200",
};

function isQueryStatus(s: StatusBadgeProps["status"]): s is QueryStatus {
  return "isEnabled" in s;
}

function isMutationStatus(s: StatusBadgeProps["status"]): s is MutationStatus {
  return "isPending" in s;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  children,
}) => {
  const statusType = useMemo(() => {
    if (isQueryStatus(status)) {
      if (status.isLoading) return "loading";
      if (status.isError) return "error";
      if (status.isSuccess) return "success";
      if (!status.isEnabled) return "inactive";
      if (status.isEnabled) return "active";
      return "inactive";
    }
    if (isMutationStatus(status)) {
      if (status.isPending) return "loading";
      if (status.isError) return "error";
      if (status.isSuccess) return "success";
      if (status.isPaused) return "inactive";
      return "inactive";
    }
    return "inactive";
  }, [status]);
  return (
    <span
      className={`inline-block px-2 py-1 rounded border text-xs font-semibold ${statusMap[statusType]}`}
    >
      {children || statusType}
    </span>
  );
};
