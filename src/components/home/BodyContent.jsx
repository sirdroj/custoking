import React from "react";
import { writing_supplies } from "../../constants";

const browse_by_category = [
  {
    img: "./home/vectors/v1.svg",
    title: "School Uniforms",
  },
  {
    img: "./home/vectors/v2.svg",
    title: "School Stationery",
  },
  {
    img: "./home/vectors/v3.svg",
    title: "Writing Supplies",
  },
  {
    img: "./home/vectors/v4.svg",
    title: "ID Cards",
  },
  {
    img: "./home/vectors/v5.svg",
    title: "Bags & Accessories",
  },
  {
    img: "./home/vectors/v6.svg",
    title: "Digital Marketing",
  },
];

const BodyContent = () => {
  return (
    <div className="py-16 z-10">
      <div className="flex w-[1168px] border-[1px]">
        <img src="./home/girl.png" alt="hero" className=" h-[422px]" />
        <div className="flex justify-center items-center">
          <div className="">
            <h1 className="text-[63px] leading-[70px] font-semibold text-[#2F5DC0]">
              One Stop School
              <br /> Solutions
            </h1>
            <div className="flex mt-4 item-center text-[20px] font-bold items-center text-white bg-[#2F5DC0] w-fit p-2 rounded-full px-4">
              Explore Now
              <img
                src="./home/Aerrow.svg"
                alt="arrow"
                className="w-4 h-4 ml-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#EAF1FF] p-4 mt-10 rounded-3xl">
        <div className="flex justify-between items-center w-[1168px] ">
          <h1 className="text-4xl opacity-70">Browse By Category</h1>
          <div className="flex items-center">
            <button className="mr-4 p-2 bg-white rounded-full">
              <img src="icons/arrow-left.svg" cla />
            </button>
            <button className="mr-4 p-2 bg-white rounded-full">
              <img src="icons/arrow-left.svg" className=" rotate-180" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-[1168px] mt-10">
          {browse_by_category.map((item, index) => (
            <div
              className="flex flex-col items-center justify-end h-max"
              key={index}
            >
              <img src={item.img} />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className=" trending-now text-4xl opacity-70 mt-10">
          Trending Now
        </h1>
        <div className="wrapper-1 flex justify-between items-center mt-10">
          <div
            className="flex items-end w-[47%] p-5 h-[600px] mt-10 "
            style={{ backgroundImage: "url('home/trending_now/image 72.png')" }}
          >
            <div className="bg-cover bg-center backdrop-blur-sm bg-white/30 p-6 rounded-lg">
              <b className="text-bold">School Accessories</b>
              <p className="text-xs">
                Black and white version of the PS% comming out on sale.
              </p>
              <button className="mr-4 p-2 rounded-full mt-4 ">
                {" "}
                <u>
                  <b>Shop Now </b>
                </u>
              </button>
            </div>
          </div>
          <div className="wrapper-2 w-[48%] h-[600px] ">
            <div
              className="flex items-end w-full p-5  mt-10 "
              style={{
                backgroundImage: "url('home/trending_now/t2.svg')",
              }}
            >
              <div className="bg-cover bg-center backdrop-blur-sm bg-white/30 text-sm w-2/5 p-6 rounded-lg">
                <b className="text-bold">Stationary</b>
                <p>Featured woman collections that give you another vibe.</p>
                <button className="mr-4 p-2  rounded-full mt-4 font-bold">
                  {" "}
                  <u>Shop Now</u>{" "}
                </button>
              </div>
            </div>
            <div className="wrapper-3 h-1/2 flex justify-between items-center w-full mt-10">
              <div
                className="flex items-end w-1/2 p-10  mt-10 "
                style={{
                  backgroundImage: "url('home/trending_now/t3.svg')",
                  backgroundSize: "centre",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                }}
              >
                <div className="bg-cover bg-center backdrop-blur-sm bg-white/30 text-sm mt-8 py-1 p-6 rounded-lg">
                  <b className="text-bold">ID Cards</b>
                  <p className="text-xs">Amazon wireless speakers</p>
                  <button className="mr-4 p-2  rounded-full mt-4 font-bold">
                    {" "}
                    <u>Shop Now</u>{" "}
                  </button>
                </div>
              </div>
              <div
                className="flex items-end w-1/2 p-10  mt-10 "
                style={{
                  backgroundImage: "url('home/trending_now/t4.svg')",
                  backgroundSize: "centre",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="bg-cover bg-center backdrop-blur-sm bg-white/30 text-sm mt-8 py-1 p-6 rounded-lg">
                  <b className="text-bold">Writing Supplies</b>
                  <p className="text-xs">GUCCI INTENSE OUD EDP</p>
                  <button className="mr-4 p-2  rounded-full mt-4 font-bold">
                    {" "}
                    <u>Shop Now</u>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="flex justify-between mt-20 min-h-[400px]">
  {/* Card 1 */}
  <div className="w-[47%] flex flex-col justify-between">
    <div>
      <h1 className="font-bold text-gray-700 text-xl">Digital Marketing Services</h1>
      <p className="text-sm text-gray-600 mt-2">
        Provides most effective digital marketing services with the promise to increase admission by 20%
      </p>
    </div>
    <div
      className="h-[290px] mt-10 p-2 pt-32 flex items-end"
      style={{
        backgroundImage: "url('home/products/digital_marketing.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop-blur-[1px]  rounded-lg w-full flex items-start justify-between p-4 text-gray-800">
        <div>
          <b className="text-bold text-xl">Marketing Flyers Banners</b>
          <p className="text-xs">Explore our digital marketing services</p>
        </div>
        <button className="mr-4 p-2 rounded-full font-semibold underline">Shop Now</button>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-[47%] flex flex-col justify-between">
    <div>
      <h1 className="font-bold text-gray-700 text-xl">Ready-to-ship products</h1>
      <p className="text-sm text-gray-600 mt-2">
        Source from 15 million products that are ready to ship, and leave the facility within 15 days.
      </p>
    </div>
    <div
      className="h-[290px] mt-10 p-2 pt-32 flex items-end"
      style={{
        backgroundImage: "url('home/products/readu_to_ship.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop-blur-[1px]  rounded-lg w-full flex items-start justify-between p-4 text-gray-800">
        <div>
          <b className="text-bold text-xl">Marketing Flyers Banners</b>
          <p className="text-xs">Explore our digital marketing services</p>
        </div>
        <button className="mr-4 p-2 rounded-full font-semibold underline">Shop Now</button>
      </div>
    </div>
  </div>
</div>

      <div>
        <div className="w-max">
          <h1 className="text-3xl font-bold opacity-70 mt-10 mb-2">
            Writing Supplies
          </h1>
          <div className="h-1 bg-[#2F5DC0] w-[70%] rounded-full"></div>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-3 items-center px-4fhfygufgh mt-10 text-center">
            {writing_supplies.map((item, index) => (
              <div className=" my-10 m-20">
                <img src={item.img} />
                <h1 className="font-bold">{item.title}</h1>
                <p className="font-thin">{item.discription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 w-full z-10">
        <div className="w-[50%] bg-[#2F5DC0] text-white p-10 rounded-3xl h-76">
          <h1 className="font-bold text-3xl">Source Smarter With RFQ</h1>
          <div className=" justify-between items-center mt-10 grid grid-cols-3 gap-4">
            {[
              {
                h: "3074000+",
                p: "RFQs",
              },
              {
                h: "21h",
                p: "Avg Response Time",
              },
              {
                h: "170000 +",
                p: "Customization",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center mt-4 bg-white p-2 rounded-3xl text-[#5CB0F6] space-y-2 py-7"
              >
                <h1 className="font-bold text-xl">{item.h}</h1>
                <p className="text-l">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%] bg-white p-5 rounded-3xl ml-10 border-[1px] border-gray-300 text-black space-y-3 h-76 shadow-md">
          <h1 className="text-3xl font-bold text-gray-600">
            One request, multiple quotes
          </h1>
          <p className="text-gray-600 text-sm">Enter your details below</p>
          <ul className="space-y-3">
            <li>
              <input
                type="text"
                className="border-gray-400 border-solid border-[1px] w-full rounded outline-none"
              />
            </li>
            <li className="text-gray-500">
              <input
                type="text"
                className="border-gray-400 border-solid border-[1px] w-1/2 rounded outline-none mr-3"
              />
              <span>Pice/Pices</span>
            </li>
            <li>
              <input
                type="text"
                className="border-gray-400 border-solid border-[1px] w-full rounded outline-none"
              />
            </li>
            <li className="flex justify-between gap-2">
              <button className="border-gray-500 border-solid border-[1px] w-full  outline-none text-white bg-[#2F5DC0] rounded-full p-2  py-4">
                {" "}
                Request for Quotation
              </button>
              <button className=" border-solid border-[3px] font-semibold w-full rounded-full outline-none p-1 text-[#2F5DC0] border-[#2F5DC0] py-4">
                {" "}
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
