import React, { useState } from "react";
import { Key, Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

export default function LearningMaterialsComponent() {

  const [materials, setMeterials] = useState(learningMaterials);

  const toggleFavorite = (id) => {
    setMeterials((prevMaterials) => prevMaterials.map((material) => material.id === id ? { ...material, isFavorite: !material.isFavorite } : material));
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3 p-4">
        {materials.map((material) => (
          
          <div key={material.id} className="bg-light-gray px-4 py-2 flex gap-5 items-center">
          <img
            src={material.image}
            alt={material.title}
            width={50}
            height={50}
            className="rounded-xl"
          />

          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-base font-medium">{material.title}</p>
              <Star onClick={() => toggleFavorite(material.id)} size={20} className={material.isFavorite ? "text-yellow-500 cursor-pointer" : "text-gray-500 cursor-pointer"} />
            </div>
            <p className="text-gray-400 text-sm">Posted at: {formatDate(material.postedAt)}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
