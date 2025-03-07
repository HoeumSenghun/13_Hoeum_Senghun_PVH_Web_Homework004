import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ project }) {
  const dueDate = new Date(project.dueDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timeDiff = dueDate - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // deadline
  let deadlineLabel = "";
  if (daysLeft > 6) {
    deadlineLabel = `${Math.floor(daysLeft / 6)} weeks left`;
  } else if (daysLeft > 1) {
    deadlineLabel = `${daysLeft} days left`;
  } else if (daysLeft === 1) {
    deadlineLabel = `1 day left`;
  } else {
    deadlineLabel = "Overdue";
  }

  // dynamic color for duedate & progress
  const getDynamicColor = (progress) => {
    if (progress == 100) return "text-[#59D5E0]";
    if (progress == 75) return "text-[#FAA300]";
    if (progress == 50) return "text-[#F5DD61]";
    if (progress == 25) return "text-[#F4538A]";
  };

  return (
    <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800">
      <div className="flex justify-between mb-5">
        {/* Due Date with Dynamic Color */}
        <p className={`text-sm font-medium ${getDynamicColor(project.progress)}`}>
          {dueDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <EllipsisVertical size={20} color="#374957" />
      </div>

      <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {project.projectName}
      </h5>
      <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
        {project.description}
      </p>

      {/* Progress Section */}
      <div className="w-full flex justify-between items-center font-medium mb-1">
        <p>Progress</p>
        <p className="text-gray-900">{project.progress}%</p>
      </div>
      <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`h-2.5 rounded-full ${getDynamicColor(project.progress).replace("text-", "bg-")}`}
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>

      {/* Deadline with dynamic time display */}
      <div className="flex justify-end">
        <p className={`font-medium py-1.5 px-4 rounded-lg max-w-30 text-center bg-gray-200`}>
          {deadlineLabel}
        </p>
      </div>
    </div>
  );
}
