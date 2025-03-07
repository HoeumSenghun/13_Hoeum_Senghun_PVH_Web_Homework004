import { useState } from "react";
import "./App.css";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import CardComponent from "./components/CardComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SideBarComponent from "./components/SideBarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";

function App() {

  const [projects, setProjects] = useState([]);
  const handleAddProject = (newProject) =>{ setProjects ([...projects, newProject])};

  return (
    <>
      <div className="overflow-hidden grid grid-cols-12">
        <div className="col-span-2"><SideBarComponent /></div>
        <div className="col-span-10 p-5 bg-gray-200">
          <div><TopNavbarComponent /></div>
          <div className="grid grid-cols-10 mt-5">
            <div className="col-span-8">
                <div><DashboardComponent projects={projects} /></div>
                <div className="mt-5 flex justify-between pr-18">
                  <AssignmentsComponent />
                  <AddNewProjectComponent onAddProject={handleAddProject}/>
                </div>
                <div className="mt-7 grid grid-cols-3 w-6xl overflow-y-auto h-[560px]">
                {projects.map((project, index) => (
                  <div className="p-4">
                    <CardComponent key={index} project={project} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2"><LearningMaterialsComponent /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
