import React, { useEffect, useState } from "react";
import axios from "axios"
import Cards from "./Cards.jsx";
import { Link } from "react-router-dom";
function Course() {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getbook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getbook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto p-2 md:p-10">
        <div className="items-center text-center mt-28 ">
          <h1 className="text-2xl  md:text-3xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            laudantium. Enim dolores ducimus, recusandae aut harum nulla magni
            cum quidem delectus odio adipisci cupiditate suscipit quo tenetur,
            modi quae! Voluptatibus, rerum quidem odio, delectus inventore enim
            iste corporis officia magni itaque placeat distinctio. Numquam, quo
            nisi doloribus incidunt obcaecati saepe?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-pink-600 duration-300 ">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
