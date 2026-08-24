import { useState } from "react";

export default function OverLap() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Weather App",
      description:
        "App that shows the current weather condition of every country.",
      link: "https://weatherbymq.netlify.app",
    },
    {
      id: 2,
      title: "Spitfire Homes",
      description:
        "App that shows which is the best location for you to buying house.",
      link: "https://spitfirebymq.netlify.app",
    },
    {
      id: 3,
      title: "Todo App",
      description: "App that stores your daily tasks.",
      link: "https://todobymq.netlify.app",
    },
    {
      id: 4,
      title: "Calculator",
      description: "Calculator to help you calculate value.",
      link: "https://calculatorbymq.netlify.app",
    },
    {
      id: 5,
      title: "Calculator",
      description: "Calculator to help you calculate value.",
      link: "https://calculatorbymq.netlify.app",
    },
    {
      id: 6,
      title: "Task App",
      description: "Daily task save app.",
      link: "https://taskbymq.netlify.app",
    },
  ]);

  const handleClick = (id) => {
    console.log("Clicked project:", id);
  };

  return (
    <div
      className=" mt-15 h-[80vh] w-full
         rounded-4xl border border-sky-400/50 bg-black p-3 sm:p-5
      "
    >
      {/* SCROLL AREA */}
      <div className=" flex h-ful  flex-col gap-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-black scrollbar-thumb-sky-500sm:gap-5 ">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleClick(project.id)}
            className=" flex min-h-[250px] w-full shrink-0 cursor-pointer flex-col justify-between rounded-2xl border border-sky-400 bg-black p-5 text-white shadow-xl shadow-sky-500/30 transition duration-300 hover:shadow-sky-500/60sm:min-h-[280px] sm:p-6
            "
          >
            <div>
              <p
                className=" w-fit rounded-full border-2 border-sky-600 bg-sky-400/50 px-3 py-1 text-xs font-bold sm:px-4 sm:text-sm
                "
              >
                Project 0{project.id}
              </p>

              <h2
                className=" mt-4 text-2xl font-bold sm:text-3xl
                "
              >
                {project.title}
              </h2>

              <p className=" mt-3 max-w-2xl text-sm leading-6 text-gray-300 ">
                {project.description}
              </p>
            </div>

            <button
              onClick={(e) => e.stopPropagation()}
              className="  mt-5  w-fit  rounded-lg  bg-sky-400/50  px-5  py-2  font-semibold  text-white  transition  duration-300  hover:bg-sky-400  hover:text-black "
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
