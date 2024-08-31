import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handlelogout=()=>{
    try {
        setAuthUser({
            ...authUser,
            user: null,
        });
        localStorage.removeItem("Users");
        toast.success("Logout Successful");
        setTimeout(() => {
            window.location.reload();         
          }, 1000);
    } catch (error) {
        toast.error("Error: " + error.message);
        setTimeout(() => {}, 3000);
    }
  }
  return (
    <div>
      <button
        className="px-3 py-2 rounded-md  bg-red-500 text-white duration-200 cursor-pointer"
        onClick={handlelogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
