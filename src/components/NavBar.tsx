import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex top-0 sticky  bg-violet-300 bg-opacity-70 justify-between items-center py-3 px-2 border-b border-blue-200 shadow-xl">
      <div className="text-3xl">
        <a href="#Home">AITS</a>
      </div>
      <div className="md:flex gap-5 py-2 hidden">
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl hover:-translate-y-1  px-3 py-1 "
        >
          <a href="#Home">Home</a>
        </li>
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl  hover:-translate-y-1 px-3 py-1"
        >
          <a href="#About">About</a>
        </li>
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl hover:-translate-y-1  px-3 py-1"
        >
          <Link to="/blog">Blog</Link>
        </li>
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl hover:-translate-y-1  px-3 py-1 "
        >
          <a href="#Courses">Courses</a>
        </li>
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl hover:-translate-y-1  px-3 py-1 "
        >
          <a href="#Contact">Contact</a>
        </li>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden bg-violet-300 w-full absolute top-16 left-0 z-10 flex-col gap-2 py-2`}
      >
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl hover:-translate-y-1  px-3 py-1 "
        >
          <a href="#Home">Home</a>
        </li>
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl  hover:-translate-y-1 px-3 py-1"
        >
          <a href="#About">About</a>
        </li>
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl hover:-translate-y-1  px-3 py-1"
        >
          <Link to="/blog">Blog</Link>
        </li>
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl hover:-translate-y-1  px-3 py-1 "
        >
          <a href="#Courses">Courses</a>
        </li>
        <li
          style={{
            transition: "all 0.3s",
          }}
          className="hover:shadow-xl hover:-translate-y-1  px-3 py-1 "
        >
          <a href="#Contact">Contact</a>
        </li>
      </div>
    </div>
  );
};

export default NavBar;
