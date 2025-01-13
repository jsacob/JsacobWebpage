import React, { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.classList.remove(
      "light",
      "dark",
      "blueberry",
      "grape",
      "kiwi",
      "strawberry",
    );
    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <h1 className="text-3xl text-center font-bold text-text">
        Theme selector test
      </h1>
      <div className="bg-background text-text p-10 border-4 border-border justify-center items-center flex ">
        <button
          className="bg-card text-text hover:bg-blue-500 p-10 border-4 border-border"
          onClick={() => setTheme("light")}
        >
          Light Mode
        </button>
        <button
          className="bg-card text-text hover:bg-blue-500 p-10 border-4 border-border"
          onClick={() => setTheme("dark")}
        >
          Dark Mode
        </button>
        <button
          className="bg-card text-text hover:bg-blue-500 p-10 border-4 border-border"
          onClick={() => setTheme("blueberry")}
        >
          Blueberry
        </button>
        <button
          className="bg-card text-text hover:bg-blue-500 p-10 border-4 border-border"
          onClick={() => setTheme("grape")}
        >
          Grape
        </button>
        <button
          className="bg-card text-text hover:bg-blue-500 p-10 border-4 border-border"
          onClick={() => setTheme("kiwi")}
        >
          Kiwi
        </button>
        <button
          className="bg-card text-text hover:bg-blue-500 p-10 border-4 border-border"
          onClick={() => setTheme("strawberry")}
        >
          Strawberry
        </button>
      </div>
    </>
  );
}
