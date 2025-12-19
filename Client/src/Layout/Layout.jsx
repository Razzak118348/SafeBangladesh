import { Outlet } from 'react-router-dom';

import useTheme from '../hooks/useTheme';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
// import Footer from '../Components/Footer/Footer';

const Layout = () => {
  const { theme } = useTheme();

  // Set dark mode class based on theme value
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <>

     <div
      className="min-h-screen transition-colors duration-300 ease-in-out
    bg-white text-black
          dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 dark:text-white"
    >
   <Navbar></Navbar>

      {/* Page Content */}
     <main className="pt-16">
  <Outlet />
</main>
    </div>
    </>


  );
};

export default Layout;
