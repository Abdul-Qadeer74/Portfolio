import React, { useState } from "react";
import { Menu } from "lucide-react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const clickBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={clickBtn}>{isOpen ? <Menu /> : <Menu />}</button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className="bg-black p-6 rounded-4xl flex flex-col gap-4 w-full shadow-xl shadow-sky-200/20 border border-sky-200 "
            id="menu"
          >
            <button className="px-4 py-2 bg-black/70 border border-sky-200 text-sky-200 rounded-4xl shadow-xl shadow-sky-200/10 [text-shadow:0_0_1px_white,0_0_2px_white,0_0_3px_white,0_0_1px_white]">
              About Us
            </button>
            <button
              className="px-4 py-2  bg-black/70 border border-sky-200 text-sky-200 rounded-4xl shadow-xl shadow-sky-200/10
            [text-shadow:0_0_1px_white,0_0_2px_white,0_0_3px_white,0_0_1px_white]"
            >
              Projects
            </button>
            <button
              className="px-4 py-2  bg-black/70 border border-sky-200 text-sky-200 rounded-4xl shadow-xl shadow-sky-200/10
            [text-shadow:0_0_1px_white,0_0_2px_white,0_0_3px_white,0_0_1px_white]"
            >
              Contacts
            </button>

            <button
              onClick={clickBtn}
              className="mt-2 px-4 py-2 bg-sky-300 text-red-500 rounded-4xl font-bold "
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
