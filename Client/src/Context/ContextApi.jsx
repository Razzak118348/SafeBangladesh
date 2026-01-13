import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import app from "../Firebase/firebase.config.js";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//this is auth context for export auth context api
export const AuthContext = createContext(null);

//those are social media providers
const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

const ContextApi = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allBanners, setAllBanners] = useState([]);
  const [bannerLoading, setBannerLoading] = useState(true);

    //load all bannner data
  useEffect(() => {
    axios.get("http://localhost:5000/allbanner")
      .then(res => {
        setAllBanners(res.data);
        setBannerLoading(false);
      })
      .catch(err => {
        console.error("Banner load error:", err);
        setBannerLoading(false);
      });

  }, []);


  // create user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //forgate password
  const forgatePassword = async (email) => {
    return await sendPasswordResetEmail(auth, email).then(() => {
      // password reset email sent
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })

  }

  // sign in
  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer
useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);

    if (currentUser?.email) {
      // POST to backend to generate JWT and set it as HTTP-only cookie
      await axios.post(
        "http://localhost:5000/jwt",
        { email: currentUser.email },
        { withCredentials: true }
      );
    } else {
      // Optional: clear cookie if logged out
      await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
    }

    setLoading(false);

    // Manually set auto logout (e.g., 12 hours)
    const timeout = 5 * 60 * 1000; // 12 hours in ms
    const logoutTimer = setTimeout(async () => {
      await LogOut(); // firebase logout
      await axios.post("http://localhost:5000/logout", {}, { withCredentials: true }); // clear cookie
      setUser(null);
    }, timeout);

    // Clear timeout if component unmounts or user changes
    return () => clearTimeout(logoutTimer);
  });

  return () => unSubscribe();
}, []);


  const authInfo = {
    user,
    creatUser,
    SignInUser,
    forgatePassword,
    LogOut,
    loading,
    setLoading,
    googleLogin,

    // Banner data
    banner: allBanners,
    bannerLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextApi;
