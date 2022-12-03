import React, { useState } from "react";
import heartEmpty from "../../Images/svgs/heart-regular.svg";
import heartFull from "../../Images/svgs/heart-solid.svg";
import bed from "../../Images/svgs/bed-solid.svg";
import sink from "../../Images/svgs/sink-solid.svg";
import area from "../../Images/svgs/chart-pie-solid.svg";

const Card = (props) => {
  const [data, setData] = useState({
    _ID: props.data._ID,
    name: props.data.name,
    price: props.data.price,
    address: props.data.address,
    location: props.data.location,
    propertyType: props.data.propertyType,
    beds: props.data.beds,
    bathrooms: props.data.bathrooms,
    area: props.data.area,
    favourite: props.data.favourite,
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const makeFav = () => {
    setData({ ...data, favourite: true });
  };

  const remFav = () => {
    setData({ ...data, favourite: false });
  };

  return (
    <div className="w-[320px] h-[340px] lg:w-[320px] lg:h-[340px] rounded-md overflow-hidden flex flex-col items-start relative lg:my-4 lg:mx-4 my-2 shadow-lg">
      <img
        src={require(`../../Images/images/${data._ID}.jpg`)}
        alt="house"
        className="w-[100%] h-[45%]"
      ></img>
      <div className="px-2 lg:px-4 pt-4 w-[100%] h-[55%] flex flex-col items-start relative">
        <div>
          <h1 className="text-violet-700 text-[22px] inline">
            {formatter.format(data.price)}
          </h1>
          <h3 className="inline text-gray-500 font-sans"> /month</h3>
          {data.favourite ? (
            <button
              className="h-8 w-8 p-2 ml-24 inline border-[1px] border-gray-400 rounded-full absolute top-4 right-4"
              onClick={() => {
                remFav();
              }}
            >
              <img src={heartFull} alt="favourite" className=""></img>
            </button>
          ) : (
            <button
              className="h-8 w-8 p-2 ml-24 inline border-[1px] border-gray-400 rounded-full absolute top-4 right-4"
              onClick={() => {
                makeFav();
              }}
            >
              <img src={heartEmpty} alt="favourite" className=""></img>
            </button>
          )}
        </div>
        <div className="h-8 overflow-hidden">
          <h1 className="text-gray-700 text-[22px] inline">{data.name}</h1>
        </div>
        <div className="h-8 overflow-hidden">
          <h4 className="text-gray-500 text-[12px] inline">{data.address}</h4>
        </div>
        <div className="w-[100%] border-b-[1px] border-gray-300 my-2"></div>
        <div className="flex flex-row justify-center items-center mt-2">
          <div className="mr-[1px] lg:mr-2">
            <button className="text-xs text-gray-500 flex flex-row justify-center items-center">
              <img src={bed} alt="bed" className="w-5 h-5 inline mr-2"></img>
              <p className="inline">{data.beds + " Beds"}</p>
            </button>
          </div>
          <div className="mx-2 lg:mx-2">
            <button className="text-xs text-gray-500 flex flex-row justify-center items-center">
              <img src={sink} alt="bed" className="w-4 h-4 inline mr-2"></img>
              <p className="inline">{data.bathrooms + " Bathrooms"}</p>
            </button>
          </div>
          <div className="ml-[1px] lg:ml-2">
            <button className="text-xs text-gray-500 flex flex-row justify-center items-center">
              <img src={area} alt="bed" className="w-4 h-4 inline mr-2"></img>
              <p className="inline">
                {data.area[0] + "x" + data.area[1] + " m2"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
