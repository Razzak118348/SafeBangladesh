import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import app from "../Firebase/firebase.config.js";
import { useEffect, useState, createContext } from "react";
import axios from "axios";

//this is auth context for export auth context api
export const AuthContext = createContext(null);

//those are social media providers
const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

const ContextApi = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const [allService, setallService] = useState([]);


  useEffect(() => {
    axios.get("https//:backendlink") // your backend endpoint
      .then(res => setallService(res.data))
      .catch(err => console.error("Service fetch error:", err));
  }, []);

  // create user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

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
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);

      // if(currentUser?.email){
      //   const userData={email:currentUser.email}
      //   //give backend link
      //   axios.post("https//:localhost backend ",userData)
      //   .then(res=>{
      //     console.log('token after jwt',res.data)

      //   })
      //   .catch(err=>console.error(err))
      // }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);


  const authInfo = {
    user,
    creatUser,
    SignInUser,
    LogOut,
    loading,
    setLoading,
    googleLogin,
    // gitHubLogin,
    allService
  };

  return (
    <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
  );
};

export default ContextApi;
