import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Signup Successful');
        navigate(from, { replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("Signup Error: " + err.response.data.message);
      }
    })
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[500px]">
          <div className="modal-box dark:bg-slate-800 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:dark:bg-slate-600"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name */}
              <div className="mt-8 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 my-3 border outline-none px-3 py-1 rounded-md dark:bg-slate-600 dark:text-white"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <p className="text-red-500">Name is required</p>}
              </div>

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
                {errors.email && <p className="text-red-500">Email is required</p>}
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
                {errors.password && <p className="text-red-500">Password is required</p>}
              </div>

              {/* Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white duration-200 hover:bg-pink-600 px-3 py-1 rounded-md"
                >
                  Signup
                </button>
                <span className="mt-4">
                  Have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </span>
              </div>
            </form>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
