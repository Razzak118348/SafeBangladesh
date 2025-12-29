import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  const { theme } = useTheme();

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      className="
        min-h-screen transition-colors duration-300 ease-in-out
        bg-white text-black
        dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 dark:text-white
      "
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className="
          pt-16 mx-auto
          w-full
          px-4 sm:px-6 md:px-8 lg:px-10
          max-w-7xl
          2xl:max-w-screen-2xl
          3xl:max-w-[1650px]
        "
      >
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
