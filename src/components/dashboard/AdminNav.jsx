import { RiMenu2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { API_URL } from "@/secret";
//redux
import { useGetProfileImagesQuery } from "@/redux/features/profileImage";

const AdminNav = () => {
  const user = useSelector((state) => state.user);
  const { data: OnlineProfilePic } = useGetProfileImagesQuery();
  return (
    <div className="w-full bg-white shadow sticky top-0 px-6 py-4 lg:z-10">
      {/* Menu button */}
      <div className="flex items-center gap-2">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button text-xl cursor-pointer lg:hidden "
        >
          <RiMenu2Fill />
        </label>
        {OnlineProfilePic && (
          <img
            className="w-[45px] h-[45px] rounded-md border border-blue-600"
            src={`${API_URL}/images/profile/${OnlineProfilePic}`}
            width={45}
            height={45}
            alt="Profile Image"
          />
        )}
        <div>
          <h3 className="group-hover:text-gray-600 font-semibold">
            {user.user}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
