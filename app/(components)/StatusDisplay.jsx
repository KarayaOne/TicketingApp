import React from "react";

const StatusDisplay = ({ status }) => {
  function getStatusColor(status) {
    switch (status) {
      case "Not Started":
        return "text-gray-700 bg-green-200"; // Adjust color classes accordingly
      case "In Progress":
        return "text-gray-700 bg-yellow-200";
      case "Completed":
        return "text-gray-700 bg-blue-200";
      default:
        return "text-gray-700 bg-gray-200"; // Default color if status doesn't match
    }
  }
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
