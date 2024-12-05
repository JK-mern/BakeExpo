import React from "react";
import { ActionLink } from "./ActionLink";

interface WorkItemProps {
  time: string;
  place: string;
  job: string;
  link: string;
  workDetails?: React.ReactNode;
  className?: string;
}

export const WorkItem: React.FC<WorkItemProps> = ({
  time,
  place,
  job,
  link,
  workDetails,
  className,
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 space-y-2 relative ${className}`}
    >
      <div>
        <h3 className="text-sm font-bold">{job}</h3>
        <p className="text-xs text-gray-600">
          {place} | {time}
        </p>
      </div>
      {workDetails && (
        <div className="mt-2 text-gray-800 text-xs">{workDetails}</div>
      )}
      <div className="absolute bottom-2 right-2">
        <ActionLink label={link} path="#" />
      </div>
    </div>
  );
};
