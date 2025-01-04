import React from "react";
import AOS from "aos";

export default function Footer() {
  AOS.init();
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500">
        <footer className="text-white text-center py-4">
          <p>&copy; Footer</p>
        </footer>
      </div>
    </>
  );
}
