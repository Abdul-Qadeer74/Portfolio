import React from "react";
import { Link } from "react-router-dom";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const About = () => {
  return (
    <main className="w-full px-3 py-4 sm:px-5 sm:py-5 overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <div className=" w-full ">
        <div className="grid rounded-4xl sm:mt-10 xs:mt-20 border border-sky-400/40 bg-black shadow-xl shadow-sky-500/10 md:grid-cols-2">
          <section className="p-5 sm:p-6 md:border-r md:border-sky-400/20">
            <p className="text-sm text-sky-400">Hello, I'm</p>

            <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Abdul Qadeer
            </h2>

            <h3 className="mt-1 text-lg font-semibold text-sky-300">
              Frontend Developer
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-300">
              I enjoy turning ideas into clean, responsive, and interactive web
              experiences. I build modern websites and applications with React,
              JavaScript, and Tailwind CSS.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              I'm constantly learning and improving my development skills by
              building real-world projects.
            </p>

            <Link
              to="/Project"
              className="mt-5 inline-block rounded-lg bg-sky-400 px-5 py-2 text-sm font-bold text-black transition duration-300 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/30"
            >
              View Projects →
            </Link>
          </section>

          <section className="border-t border-sky-400/20 p-5 sm:p-6 md:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              What I Do
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-sky-400/30 bg-sky-400/5 p-4">
                <h3 className="mt-2 text-sm font-bold text-white">Frontend</h3>
                <p className="mt-1 text-xs leading-5 text-gray-400">
                  Modern and interactive web interfaces.
                </p>
              </div>

              <div className="rounded-xl border border-sky-400/30 bg-sky-400/5 p-4">
                <h3 className="mt-2 text-sm font-bold text-white">
                  Responsive
                </h3>
                <p className="mt-1 text-xs leading-5 text-gray-400">
                  Designs that work on every screen.
                </p>
              </div>

              <div className="rounded-xl border border-sky-400/30 bg-sky-400/5 p-4">
                <h3 className="mt-2 text-sm font-bold text-white">UI Design</h3>
                <p className="mt-1 text-xs leading-5 text-gray-400">
                  Clean and attractive user interfaces.
                </p>
              </div>

              <div className="rounded-xl border border-sky-400/30 bg-sky-400/5 p-4">
                <h3 className="mt-2 text-sm font-bold text-white">
                  Problem Solving
                </h3>
                <p className="mt-1 text-xs leading-5 text-gray-400">
                  Practical solutions through code.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-4 rounded-3xl border border-sky-400/30 bg-black p-4 sm:p-5">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-sky-400">
            My Skills
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1.5 text-xs font-medium text-sky-300 transition hover:bg-sky-400 hover:text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
