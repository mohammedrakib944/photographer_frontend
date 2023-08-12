"use client";
import { MdLogout } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import AdminNav from "./AdminNav";
import Link from "next/link";
import { SideLinks } from "./SideLinks";
import { usePathname } from "next/navigation";

const AdminLayout = ({ children }) => {
  const pathname = usePathname();

  const handleLogout = () => {
    if (!confirm("You want to Logout?")) return;
    localStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Admin Nabbar */}
        <AdminNav />

        {/* Page content here  */}
        <div className="py-4 px-6 w-full min-h-screen bg-gray-100">
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-black z-20">
          <li className="text-3xl font-extrabold text-blue-400 pl-4">
            R.Admin{" "}
          </li>
          <li>
            <Link
              className="text-white text-xs hover:text-blue-400 w-fit mb-4"
              href="/"
            >
              Visit Site <AiOutlineArrowRight />
            </Link>
          </li>
          {/* Sidebar content here  */}
          {SideLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={"/dashboard" + item.link}
                className={
                  pathname === "/dashboard" + item.link
                    ? "text-gray-300 text-base hover:text-gray-100 py-3 active"
                    : "text-gray-300 text-base hover:text-gray-100 py-3"
                }
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              onClick={handleLogout}
              className="text-gray-300 hover:text-gray-100"
            >
              <MdLogout />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
