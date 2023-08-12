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
  const checkingEnd = useAuth();

  // check auth
  useEffect(() => {
    if (checkingEnd && !user.access_token) {
      router.push("/");
    }
  }, [user, checkingEnd]);

  return checkingEnd ? (
    <AdminLayout>{children}</AdminLayout>
  ) : (
    <div className="text-white">
      <Spinner title="Authentication checking..." />
    </div>
  );
};

export default layout;
