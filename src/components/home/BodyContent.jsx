import React from "react";

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
        <h1 className=" trending-now text-4xl opacity-70 mt-10">Trending Now</h1>
        <div className="wrapper-1 flex justify-between items-center mt-10"> 
          <div
            className="flex items-end w-[47%] p-5 h-[600px] mt-10 "
            style={{ backgroundImage: "url('home/trending_now/image 72.png')" }}
          >
            <div className="bg-cover bg-center backdrop-blur-sm bg-white/30 p-6 rounded-lg">
              <h1 className="text-bold">School Accessories</h1>
              <p>Black and white version of the PS% comming out on sale.</p>
              <button className="mr-4 p-2 bg-white rounded-full mt-4 border-b-2">
                {" "}
                Shop Now{" "}
              </button>
            </div>
          </div>
          <div className="wrapper-2 w-[48%] h-full">
            <div
              className="flex items-end w-full p-5  mt-10 "
              style={{
                backgroundImage: "url('home/trending_now/t2.svg')",
              }}
            >
              <div className="bg-cover bg-center backdrop-blur-sm bg-white/30 p-6 rounded-lg">
                <h1 className="text-bold">Stationary</h1>
                <p>Featured woman collections that give you another vibe.</p>
                <button className="mr-4 p-2 bg-white rounded-full mt-4 border-b-2">
                  {" "}
                  Shop Now{" "}
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
                  backgroundPosition:"top"
                }}
              >
                <div className="bg-cover bg-center backdrop-blur-sm bg-white/30 p-6 rounded-lg">
                  <h1 className="text-bold">ID Cards</h1>
                  <p>Amazon wireless speakers</p>
                  <button className="mr-4 p-2 bg-white rounded-full mt-4 border-b-2">
                    {" "}
                    Shop Now{" "}
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
                <div className="bg-cover bg-center backdrop-blur-sm bg-white/30 p-6 rounded-lg">
                  <h1 className="text-bold">Writing Supplies</h1>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <button className="mr-4 p-2 bg-white rounded-full mt-4 border-b-2">
                    {" "}
                    Shop Now{" "}
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
