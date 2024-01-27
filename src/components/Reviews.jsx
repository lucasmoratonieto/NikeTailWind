import React from "react";

const Reviews = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className=" items-center justify-center align-middle rounded-3xl p-5 border-4 transition-all shadow-3xl max-w-lg shadow-slate-200 lg:hover:shadow-slate-300 lg:hover:-translate-y-2 lg:hover:-translate-x-2">
      <img
        src={imgURL}
        alt={customerName}
        className=" w-32 rounded-full mx-auto"
      />
      <div className=" m-5 info-text">
        <p>{feedback}</p>
        <div className="">StarsIamge</div>
        <div>{rating}</div>
      </div>
    </div>
  );
};

export default Reviews;
