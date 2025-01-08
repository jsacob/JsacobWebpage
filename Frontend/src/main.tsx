import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import "aos/dist/aos.css";
import AOS from "aos";
import { delay } from "framer-motion";

AOS.init({
  once: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    {/* <Footer /> */}
  </StrictMode>,
);
