import { useContext } from "react";
import {AuthContext} from "../Context/ContextApi.jsx";

const useAuth = () => {
const all = useContext(AuthContext)
return all;
};

export default useAuth;