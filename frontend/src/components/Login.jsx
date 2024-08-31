import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successful");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("login Error: " + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    document.getElementById("my_modal_3").close();
    navigate("/");
  };

  const handleSignup = () => {
    document.getElementById("my_modal_3").close(); // Close the modal
    navigate("/signup"); // Navigate to the signup page
  };

  useEffect(() => {
    const modal = document.getElementById("my_modal_3");
    if (location.pathname === "/login") {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [location.pathname]);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:dark:bg-slate-600"
              onClick={handleClose}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-8 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 my-3 border outline-none px-3 py-1 rounded-md dark:bg-slate-600 dark:text-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required!
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-6 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 my-3 border outline-none px-3 py-1 rounded-md dark:bg-slate-600 dark:text-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required!
                </span>
              )}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white hover:bg-pink-600 px-3 py-1 rounded-md "
              >
                Login
              </button>
              <p className="mt-4">
                Not Registered?{" "}
                <span
                  onClick={handleSignup}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
