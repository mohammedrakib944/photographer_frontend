import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";

const useAuth = () => {
  const [isAuthChecking, setIsAuthChecking] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      if (auth.access_token && auth.user) {
        dispatch(setUser(auth));
      }
    }
    setIsAuthChecking(true);
  }, []);

  return isAuthChecking;
};

export default useAuth;
