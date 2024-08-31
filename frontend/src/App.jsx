import React from "react";
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/signup";
import Contactus from "./components/Contactus";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;