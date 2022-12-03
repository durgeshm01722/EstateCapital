import React from "react";
import { useState } from "react";
import Card from "./Card";
import Data from "../../Data/Data.json";
import applyFilters from "./Filter";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

var filters = { location: "", area: 0, price: "", propertyType: "" };

const Rent = () => {
  var [filteredData, setFilteredData] = useState(Data);
  var [searchName, setSearchName] = useState("");

  const search = (name) => {
    setSearchName(name);
    setFilteredData(
      Data.filter((item) => {
        return item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      })
    );
  };

  return (
    <div className="lg:h-[1400px] h-fit py-12 flex flex-col justify-center items-center bg-violet-100">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-[25px] lg:text-[30px] text-gray-700 inline-block">
          Search Properties to rent
        </h1>
        <input
          type="text"
          value={searchName}
          className="inline-block h-10 lg:h-10 w-[300px] focus:outline-0 hover:bg-white rounded-md p-2 text-sm cursor-pointer bg-gray-50 border-[1px] border-gray-300 lg:ml-[550px]"
          placeholder="Search with Name"
          onChange={(e) => {
            search(e.target.value);
          }}
        ></input>
      </div>
      <div
        className="w-[90%] lg:w-[80%] h-fit p-4 flex flex-col justify-center items-center lg:flex-row lg:h-[120px] relative rounded-lg bg-white mt-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="h-fit w-[90%] lg:h-fit lg:w-[15%] relative flex flex-col justify-center items-start lg:mx-4">
          <label className="text-gray-500 text-sm float-left">Location: </label>
          <select
            required
            className="block h-10 lg:h-12 w-[95%] focus:outline-0 hover:bg-purple-100 rounded-md p-2 text-sm cursor-pointer bg-gray-100"
            defaultChecked={filters.location}
            onChange={(e) => {
              filters = { ...filters, location: e.target.value };
              console.log(filters);
            }}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="New York">New York</option>
            <option value="Canada">Canada</option>
            <option value="Paris">Paris</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Banglore">Banglore</option>
            <option value="Mysore">Mysore</option>
            <option value="Dubai">Dubai</option>
          </select>
        </div>
        <div className="w-[80%] lg:w-[1px] lg:h-[45%] border-b-[1px] border-gray-300 my-2 lg:mx-4 lg:border-r-[1px]"></div>
        <div className="h-fit w-[90%] lg:h-fit lg:w-[15%] relative flex flex-col justify-center items-start lg:mx-4">
          <label className="text-gray-500 text-sm float-left">Area: </label>
          <select
            required
            className="block h-10 lg:h-12 w-[95%] focus:outline-0 hover:bg-purple-100 rounded-md p-2 text-sm cursor-pointer bg-gray-100"
            defaultChecked={filters.area}
            onChange={(e) => {
              filters = { ...filters, area: e.target.value };
            }}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="35">&gt; 35m2</option>
            <option value="37">&gt; 37m2</option>
            <option value="42">&gt; 42m2</option>
            <option value="45">&gt; 45m2</option>
          </select>
        </div>
        <div className="w-[80%] lg:w-[1px] lg:h-[45%] border-b-[1px] border-gray-300 my-2 lg:mx-2 lg:border-r-[1px]"></div>
        <div className="h-fit w-[90%] lg:h-fit lg:w-[15%] relative flex flex-col justify-center items-start lg:mx-4">
          <label className="text-gray-500 text-sm float-left">Price: </label>
          <select
            required
            className="block h-10 lg:h-12 w-[95%] focus:outline-0 hover:bg-purple-100 rounded-md p-2 text-sm cursor-pointer bg-gray-100"
            defaultChecked={filters.price}
            onChange={(e) => {
              filters = { ...filters, price: e.target.value };
            }}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="0,1500">Less than 1500$</option>
            <option value="1501,2000">1501$ - 2000$</option>
            <option value="2001,2500">2001$ - 2500$</option>
            <option value="2501,3000">2501$ - 3000$</option>
            <option value="3001,9999">Greater than 3001</option>
          </select>
        </div>
        <div className="w-[80%] lg:w-[1px] lg:h-[45%] border-b-[1px] border-gray-300 my-2 lg:mx-2 lg:border-r-[1px]"></div>
        <div className="h-fit w-[90%] lg:h-fit lg:w-[15%] relative flex flex-col justify-center items-start lg:mx-4">
          <label className="text-gray-500 text-sm float-left">
            Property Type:
          </label>
          <select
            required
            className="block h-10 lg:h-12 w-[95%] focus:outline-0 hover:bg-purple-100 rounded-md p-2 text-sm cursor-pointer bg-gray-100"
            defaultChecked={filters.propertyType}
            onChange={(e) => {
              filters = { ...filters, propertyType: e.target.value };
              console.log(filters);
            }}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="House">House</option>
            <option value="Bunglow">Bunglow</option>
            <option value="Farmhouse">Farmhouse</option>
            <option value="Garage">Garage</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>
        <div className="w-[80%] lg:w-[1px] lg:h-[45%] border-b-[1px] border-gray-300 my-2 lg:mx-2 lg:border-r-[1px]"></div>
        <div className="flex fle-row justify-center items-center gap-2">
          <button
            className="btn-violet lg:ml-4 inline-block"
            onClick={() => {
              setFilteredData(applyFilters(Data, filters));
            }}
          >
            Search
          </button>
          <button
            className="bg-white border-[1px] h-[45px] rounded w-[120px] border-gray-400 text-violet-600 hover:border-violet-600 inline-block"
            onClick={() => {
              setFilteredData(Data);
            }}
          >
            Clear filters
          </button>
        </div>
      </div>
      <div
        className="w-[90%] lg:w-[80%] h-[1800px] p-2 flex flex-row flex-wrap justify-center lg:flex-row lg:h-[1500px] mt-12 relative rounded-lg bg-white lg:px-12 overflow-y-scroll"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-[100%] h-fit flex flex-row flex-wrap justify-center items-center">
          {filteredData.map((item) => {
            return <Card key={item._ID} data={item}></Card>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Rent;
