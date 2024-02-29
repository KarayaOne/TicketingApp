import React from "react";

const ProgressBar = ({ progress }) => {
  function getProgressBarColor(progress) {
    // You can adjust the logic based on your requirements
    if (progress < 25) {
      return "bg-red-500";
    } else if (progress < 50) {
      return "bg-yellow-500";
    } else if (progress < 75) {
      return "bg-blue-500";
    } else {
      return "bg-green-500";
    }
  }
  const progressBarClassName = getProgressBarColor(progress);
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`${progressBarClassName} h-2.5 rounded-full`}
        style={{
          width: progress,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
