import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import About from "../Main/Pages/About";
import Projects from "../Main/Pages/Projects";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const clickBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={clickBtn}>{<Menu />}</button>

      {isOpen && (
        <div className="inset-0 fixed h-full top-30 z-999 flex items-center justify-center bg-black/50 backdrop-blur-lg">
          <div
            className="bg-black p-6 rounded-4xl flex flex-col gap-4 w-full shadow-2xl shadow-sky-200/60 border border-sky-200 "
            id="menu"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2  bg-black/70 border border-sky-200 text-sky-200 rounded-4xl shadow-xl shadow-sky-200/10
            [text-shadow:0_0_1px_white,0_0_2px_white,0_0_3px_white,0_0_1px_white]"
            >
              <Link to="/">Home</Link>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-black/70 border border-sky-200 text-sky-200 rounded-4xl shadow-xl shadow-sky-200/10 [text-shadow:0_0_1px_white,0_0_2px_white,0_0_3px_white,0_0_1px_white]"
            >
              <Link to="/About">About us</Link>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2  bg-black/70 border border-sky-200 text-sky-200 rounded-4xl shadow-xl shadow-sky-200/10
            [text-shadow:0_0_1px_white,0_0_2px_white,0_0_3px_white,0_0_1px_white]"
            >
              <Link to="/Project">Project</Link>
            </button>

            <button
              onClick={clickBtn}
              className="mt-2 px-4 py-2 bg-sky-300 text-red-500 rounded-4xl font-bold hover:bg-sky-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
