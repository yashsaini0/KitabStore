import React from "react";

function Cards({ item }) {
  return (
    <div className="mx-3 my-4">
      <div className="card bg-base-100 w-94 shadow-xl hover:scale-105 dark:bg-slate-800 dark:text-white">
        <figure>
          <img
            src={item.image}
            alt="Book"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">₹{item.price}</div>
            <button className="badge badge-outline hover:bg-pink-500 cursor-pointer duration-300 p-3 hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
