import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun, FaChevronDown } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import "../../utils/color.css";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();
const {user,LogOut}=useAuth();
//   console.log(user);
// console.log(user?.photoURL);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Activities",
      subItems: [
        { name: "Informal Settlement", path: "/activities/informal-satelment" },
        { name: "SAFE Materials", path: "/activities/safe-materials" },
        { name: "Workshops", path: "/activities/workshops" },
        { name: "Demonstration House", path: "/activities/demo-house" },
        { name: "Technical Support", path: "/activities/technical-support" },
        { name: "Tree Planting", path: "/activities/tree-planting" },
        { name: "Savings Groups", path: "/activities/savings-groups" },
        {name:"Prototype & Design",path:"/activities/prototype"},
      ],
    },
    {
      name: "About Us",
      subItems: [
        { name: "Background", path: "/aboutus/background" },
        { name: "People", path: "/aboutus/people" },
        { name: "Team", path: "/aboutus/team" },
        { name: "Goals & Vision", path: "/aboutus/goals-vision" },
        { name: "Supporters", path: "/aboutus/supporters" },
      ],
    },
    {
      name: "News & Blogs",
      subItems: [
        { name: "Blog", path: "/blog" },
        { name: "News", path: "/news" },
        {name : "Reports", path:"/reports"},
      ],
    },
    { name: "Contact", path: "/contact" },

    // Conditional Admin link
    ...(user?.email === "abdurrazzak118348@gmail.com" ||
      user?.email === "jahinkabir2024@gmail.com" || user?.email === "info@nirapodbangladesh.org"
      ? [{ name: "Admin", path: "/admin" }]
      : []),
  ];

  //  RESPONSIVE FIX (Resize / Multitasking)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      } else {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //all code
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">

      <div className="flex justify-start">
         {/* Logo */}
        <img
  src="/NBSLogo.svg"
  alt="logo"
  className="w-8 md:w-12 h-auto object-contain"
/>

        <NavLink
          to="/"
          className="text-lg md:text-xl pt-2 md:pt-4 font-bold bg-gradient-to-r from-[#3e5a41] via-[#428576] to-[#223d26]
          text-transparent bg-clip-text dark:text-white"
        >
          Nirapod Bangladesh Songstha
        </NavLink>
      </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {navItems.map((item, idx) => (
              <li key={idx} className="relative">
                {item.subItems ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(idx)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 hover:text-[#55835b]">
                      {item.name}
                      <FaChevronDown
                        className={`transition ${
                          openDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === idx && (
                        <motion.ul
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800
                          rounded-md shadow-lg border"
                        >
                          {item.subItems.map((sub, i) => (
                            <li key={i}>
                              <NavLink
                                to={sub.path}
                                className="block px-4 py-2 hover:text-[#55835b] hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                {sub.name}
                              </NavLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className="hover:text-[#55835b]"
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

        {/* Auth Buttons */}
<div className="relative group">
  {user ? (
    <div className="relative">
      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full border-2 border-green-700 cursor-pointer overflow-hidden"
        title={user?.displayName || "User"}
      >
        <img
        src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/219/219986.png"}
        alt="user"
        className="w-10 h-10 rounded-full border"
      />
      </div>

      {/* Hover Card */}
      <div
        className="
          absolute right-0 mt-3 w-52
          bg-white dark:bg-gray-800
          rounded-xl shadow-lg
          border dark:border-gray-700
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-300
          z-50
        "
      >
        <div className="px-4 py-3 border-b dark:border-gray-700">
          <p className="text-sm font-semibold text-gray-800 dark:text-white">
            {user?.displayName || "User"}
          </p>
          <p className="text-xs text-gray-500 truncate">
            {user?.email}
          </p>
        </div>

        <div className="p-3">
          <button
            onClick={LogOut}
            className="
              w-full py-2 text-sm font-medium
              rounded-lg
              bg-[#3e5a41] hover:bg-[#2b422d]
              text-white
              transition
            "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Link
      to="/login"
      className="px-4 py-2 rounded-lg text-white bg-[#549c5d] hover:bg-[#55c766] active:scale-95 transition-all shadow-lg"
    >
      Login
    </Link>
  )}
</div>


        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-3">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  {item.subItems ? (
                    <details>
                      <summary className="flex justify-between cursor-pointer">
                        {item.name}
                        <FaChevronDown />
                      </summary>
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.subItems.map((sub, i) => (
                          <li key={i}>
                            <NavLink
                              to={sub.path}
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}

              {/*mobile Auth Section */}
<li className="pt-3 border-t">
  {user ? (
    <div className="flex items-center gap-3">
      <img
        src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/219/219986.png"}
        alt="user"
        className="w-10 h-10 rounded-full border"
      />
      <button
        onClick={() => {
          LogOut();
          setMenuOpen(false);
        }}
        className="btn p-4 btn-sm bg-[#3e5a41] text-white"
      >
        Logout
      </button>
    </div>
  ) : (
    <Link
      to="/login"
      onClick={() => setMenuOpen(false)}
      className="btn p-4 bg-[#3e5a41] hover:bg-[#2b422d] text-white w-full"
    >
      Login
    </Link>
  )}
</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
