import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex gap-5">
        {dashboard.map((item) => (
          <div key={item.id} className="flex w-69 h-20 bg-white gap-5 py-3.5 px-4 rounded-xl">
            <div className={`p-3 rounded-xl ${item.color}`}>
              <img src={item.icon} alt="file icon" className="w-6 h-6"/>
            </div>
            <div>
              <p className="text-xl font-semibold">{item.totalTasks}</p>
              <p className="text-gray-400">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
