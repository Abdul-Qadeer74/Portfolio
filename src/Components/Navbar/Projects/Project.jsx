import { useState } from "react";

export default function OverLap() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Weather App",
      description:
        "App that shows the current weather condition of every country.",
      link: "https://weatherbymq.netlify.app",
      x: 4,
      y: 4,
      z: 1,
    },
    {
      id: 2,
      title: "Spitfire Homes",
      description:
        "App that shows which is the best location for you to buying house.",
      link: "https://spitfirebymq.netlify.app",
      x: 12,
      y: 10,
      z: 2,
    },
    {
      id: 3,
      title: "Todo App",
      description: "App that stores your daily tasks.",
      link: "https://todobymq.netlify.app",
      x: 20,
      y: 16,
      z: 3,
    },
    {
      id: 4,
      title: "Calulator",
      description: "Calculator to help you calculate value.",
      link: "https://calculatorbymq.netlify.app",
      x: 28,
      y: 22,
      z: 4,
    },
    {
      id: 5,
      title: "Calculator",
      description: "Calculator to help you calculate value.",
      link: "https://calculatorbymq.netlify.app",
      x: 36,
      y: 28,
      z: 5,
    },
    {
      id: 6,
      title: "Task App",
      description: "Daily task save app.",
      link: "https://taskbymq.netlify.app",
      x: 44,
      y: 34,
      z: 6,
    },
  ]);

  const handleClick = (id) => {
    setProjects((prev) => {
      const highestZ = Math.max(...prev.map((project) => project.z));

      return prev.map((project) =>
        project.id === id
          ? {
              ...project,
              z: highestZ + 1,
            }
          : project,
      );
    });
  };

  return (
    <div className="relative sm:w-full xs:w-[95%] sm:h-135 xs:h-[60%] overflow-hidden rounded-4xl  mt-2 border border-sky-400/50">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => handleClick(project.id)}
          className=" absolute flex h-[60%] w-[50%]  cursor-pointer flex-col justify-between rounded-2xl border border-sky-400 bg-black p-6 text-white shadow-xl shadow-sky-400/50 transition-all duration-500
          "
          style={{
            left: `${project.x}%`,
            top: `${project.y}%`,
            zIndex: project.z,
          }}
        >
          <div>
            <p className="flex w-fit items-center justify-center rounded-full border-2 border-sky-600 bg-sky-400/50 px-4 py-1 text-sm font-bold shadow-xl shadow-sky-200/30">
              Project 0{project.id}
            </p>

            <h2 className="mt-5 text-3xl font-bold">{project.title}</h2>

            <p className="mt-4 text-sm leading-6 text-gray-300">
              {project.description}
            </p>
          </div>

          <button
            onClick={(e) => e.stopPropagation()}
            className=" w-fit rounded-lg bg-sky-400/50 px-5 py-2 font-semibold text-white transition duration-500 hover:bg-sky-400 hover:text-black
            "
          >
            <a href={project.link} target="_blank">
              View Project
            </a>
          </button>
        </div>
      ))}
    </div>
  );
}
