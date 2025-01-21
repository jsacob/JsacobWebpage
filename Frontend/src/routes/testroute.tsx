// import React, { useEffect, useState } from "react";
//
// export default function App() {
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem("theme") || "dark",
//   );
//
//   const themes = [
//     { value: "light", label: "Light Mode" },
//     { value: "dark", label: "Dark Mode" },
//     { value: "blueberry", label: "Blueberry" },
//     { value: "grape", label: "Grape" },
//     { value: "kiwi", label: "Kiwi" },
//     { value: "strawberry", label: "Strawberry" },
//   ];
//
//   useEffect(() => {
//     document.documentElement.classList.remove(
//       "light",
//       "dark",
//       "blueberry",
//       "grape",
//       "kiwi",
//       "strawberry",
//     );
//     document.documentElement.classList.add(theme);
//
//     localStorage.setItem("theme", theme);
//   }, [theme]);
//
//   return (
//     <div className="text-text flex flex-col items-center justify-center">
//       <select
//         id="theme-selector"
//         className="p-2 border-2 border-border rounded bg-card text-text appearance-none"
//         value={theme}
//         onChange={(e) => setTheme(e.target.value)}
//       >
//         {themes.map((t) => (
//           <option key={t.value} value={t.value}>
//             {t.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
