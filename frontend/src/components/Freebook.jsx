import React, { useEffect, useState } from "react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import axios from "axios"

import Cards from "./Cards"

function Freebook() {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getbook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        // console.log(res.data)
        const data= res.data.filter((data) =>  data.category=== "Free")
        console.log(data)
        setBook(data)
      } catch (error) {
        console.log(error)
      }
    }
    getbook();
  },[]);
  


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <h1 className="text-xl pb-2 font-semibold">Free Offrered Courses</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            repudiandae? Numquam qui officia rem aliquid excepturi blanditiis
            ratione, dicta in voluptatem maxime ab vero tempora sed quasi facere
            exercitationem sapiente?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
