import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGithub} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const PRIMARY = "#55835b";

const SocialLogin = () => {
  const { googleLogin, gitHubLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location?.state || "/";

  const handleSocialLogin = (provider) => {
    provider()
      .then((result) => {
        if (result.user) {
          navigate(destination);
        }
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Google */}
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        className="group flex items-center justify-center gap-4 w-full py-3 rounded-xl
        bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
        hover:border-[#55835b] hover:shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[#55835b] dark:hover:border-green-800 dark:border-2"
      >
      <FcGoogle  className="text-white text-xl group-hover:scale-110 transition "/>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Continue with Google
        </span>
      </button>

      {/* GitHub
      <button
        onClick={() => handleSocialLogin(gitHubLogin)}
        className="group flex items-center justify-center gap-4 w-full py-3 rounded-xl
        bg-[#111827] border border-gray-800
        hover:border-[#55835b] hover:shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[#55835b] dark:hover:border-green-800 dark:border-2"
      >
        <FaGithub className="text-white text-xl group-hover:scale-110 transition" />
        <span className="text-sm font-semibold text-white">
          Continue with GitHub
        </span>
      </button> */}
    </div>
  );
};

export default SocialLogin;
