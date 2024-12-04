import React from "react";

interface ActionLinkProps {
  label: string;
  path: string;
  className?: string;
}

export const ActionLink: React.FC<ActionLinkProps> = ({
  label,
  path,
  className,
}) => {
  return (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-500 hover:underline ${className}`}
    >
      {label}
    </a>
  );
};
