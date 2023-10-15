"use client";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdPerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { useRouter } from "next/navigation";

// redux
import { useLoginMutation } from "@/redux/features/loginApi";
import { useSelector } from "react-redux";

const Login = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // redux
  const [login, { data: authData, error, isLoading }] = useLoginMutation();

  const loginHandler = (e) => {
    e.preventDefault();
    // redux function
    login({ username, password });
  };

  // handle error
  useEffect(() => {
    if (!isLoading && error) {
      toast.error(error.data?.message);
    }
    if (!isLoading && authData) {
      localStorage.setItem("auth", JSON.stringify(authData));
      router.push("/dashboard");
    }
  }, [error, authData]);

  // check auth
  useEffect(() => {
    if (user.access_token) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className="max-w-[600px] mt-20 mx-auto flex flex-col items-center justify-center text-gray-200">
      <Toaster />
      <div className="text-xl flex gap-3 justify-center items-center">
        <p className="font-bold py-3 text-3xl text_gradient">Admin login</p>
      </div>
      <form className="min-w-[360px] text-gray-700">
        <label className="text-sm">Username</label>
        <div className="flex gap-2 mt-1 items-center rounded px-2 border border-gray-600 mb-2">
          <span className="text-2xl text-gray-600 border-r pr-2">
            <MdPerson />
          </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="focus:outline-none py-3 w-full bg-transparent"
          />
        </div>
        <label className="text-sm ">Password</label>
        <div className="flex gap-2 mt-1 items-center rounded px-2 border border-gray-600">
          <span className="text-xl text-gray-600 border-r pr-3">
            <RiLockPasswordFill />
          </span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="focus:outline-none py-3 w-full bg-transparent"
          />

          <button
            type="button"
            className="text-xl text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        </div>
        <div className="w-full flex items-center gap-3 justify-center mt-6">
          <button onClick={loginHandler} type="submit" className="btn btn_blue">
            Login
          </button>
          <Link className="text-center btn_black" href="/">
            Cancle
          </Link>
        </div>

        {/* <p className="mt-5">
          Don't have account?{" "}
          <Link href="/auth/registration" className="text_link">
            Create Account
          </Link>
        </p> */}
      </form>
    </div>
  );
};

export default Login;
