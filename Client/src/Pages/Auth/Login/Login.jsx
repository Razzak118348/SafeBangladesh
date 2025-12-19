


import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../../../Components/SocialMediaLogin/SocialLogin";

const PRIMARY = "#55835b";


const pageAnimation = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const imageFloat = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Login = () => {
  const { SignInUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const destination = location?.state || "/";

  const onSubmit = ({ email, password }) => {
    SignInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Welcome back!", {
            position: "top-right",
            onClose: () => navigate(destination),
          });
        }
      })
      .catch(() => {
        toast.error("Invalid email or password", {
          position: "top-right",
        });
      });
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef4ef] to-[#dfe9e2] dark:from-gray-900 dark:to-gray-800 p-4"
    >
      <ToastContainer autoClose={700} />

      <div className="w-full max-w-6xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">


        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="p-10 flex flex-col justify-center"
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-center text-gray-800 dark:text-white"
          >
            Welcome Back
          </motion.h2>

          <motion.p
            variants={item}
            className="text-center text-gray-500 dark:text-gray-400 mt-2"
          >
            Login to continue to your dashboard
          </motion.p>

          <motion.div variants={item} className="mt-6">
            <SocialLogin />
          </motion.div>

          <motion.div variants={item} className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="px-3 text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          </motion.div>

          <motion.form
            variants={container}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Email */}
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#55835b] bg-transparent text-gray-800 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">Email is required</p>
              )}
            </motion.div>

            {/* Password */}
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-3 rounded-xl border pr-12 focus:outline-none focus:ring-2 focus:ring-[#55835b] bg-transparent text-gray-800 dark:text-white"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">Password is required</p>
              )}
            </motion.div>

            {/* Remember */}
            <motion.div
              variants={item}
              className="flex items-center justify-between text-sm"
            >
              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <input type="checkbox" className="accent-[#55835b]" />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-[#55835b] hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </motion.div>

            {/* Button */}
            <motion.button
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold tracking-wide bg-[#55835b] hover:bg-[#466d4c] transition duration-300 shadow-lg"
            >
              Login
            </motion.button>

            {/* Footer */}
            <motion.p
              variants={item}
              className="text-center text-sm text-gray-600 dark:text-gray-400"
            >
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#55835b] font-semibold hover:underline"
              >
                Create Account
              </Link>
            </motion.p>
          </motion.form>
        </motion.div>


        <motion.div
          variants={imageFloat}
          animate="animate"
          className="hidden md:flex items-center justify-center"
        >
          <img
            src="/images/login.png"
            alt="Login Illustration"
            className="w-4/5 object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;

