import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function AddNewProjectComponent({ onAddProject }) {
  const [projectName, setProjectName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [progress, setProgress] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!projectName || !dueDate || !progress || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const newProject = { projectName, dueDate, progress, description };
    onAddProject(newProject);

    // clear form
    setProjectName("");
    setDueDate("");
    setProgress("");
    setDescription("");


    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800/50 z-50">
          <div className="bg-white p-5 rounded-2xl shadow-sm dark:bg-gray-700 w-full max-w-md">
            <div className="flex items-center justify-between border-b border-gray-300 pb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Project
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-900"
              >
                ✖
              </button>
            </div>
            <form onSubmit={handleSubmit} className="pt-4">
              <div className="grid gap-4 mb-4 grid-cols-2">
                {/* Project Name */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Project Name</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                    placeholder="Enter project name"
                    required
                  />
                </div>

                {/* Due Date */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Due Date</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                    required
                  />
                </div>

                {/* Progress */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Progress</label>
                  <select
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                    className="border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                    required
                  >
                    <option value="">Select Progress</option>
                    <option value="100">100%</option>
                    <option value="75">75%</option>
                    <option value="50">50%</option>
                    <option value="25">25%</option>
                  </select>
                </div>

                {/* Description */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                    placeholder="Project description"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 rounded-lg text-sm px-5 py-2.5"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
