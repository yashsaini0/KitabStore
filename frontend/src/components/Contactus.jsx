import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useForm } from "react-hook-form"

function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow mx-20 my-12">
          <h1 className="text-3xl font-bold mb-8 flex items-center justify-center mt-28">Contact Us</h1>
          <form className="space-y-8 max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <label className="block text-lg mb-2 dark:text-white" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 dark:bg-slate-800 dark:text-white"
                {...register("name", { required: true })}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg mb-2 dark:text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 dark:bg-slate-800 dark:text-white"
                {...register("email", { required: true })}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg mb-2 dark:text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 dark:bg-slate-800 dark:text-white"
                {...register("message", { required: true })}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 dark:bg-slate-600 dark:text-white hover:dark:bg-slate-500 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;

