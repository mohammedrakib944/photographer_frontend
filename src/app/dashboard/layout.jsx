"use client";
import AdminLayout from "@/components/dashboard/AdminLayout";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/common/Spinner";
import { useSelector } from "react-redux";

const layout = ({ children }) => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const isChecking = useAuth();

  // check auth
  // useEffect(() => {
  //   if (!user.access_token) {
  //     router.push("/login");
  //   }
  // }, [user, isChecking]);

  if (!isChecking)
    return (
      <div>
        <Spinner title="Authentication checking..." />
      </div>
    );

  return <AdminLayout>{children}</AdminLayout>;
};

export default layout;
