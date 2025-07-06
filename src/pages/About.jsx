import React from "react";
import {founders,activitys,events} from "../constants";


function profile_card(item) {
  return (
    <div className="profile-card w-80 rounded-3xl shadow-lg">
      <img src={item.image} alt={item.name} className="" />
      <div className="p-4 text-[#2F5DC0]">
        <h3 className="text-2xl font-bold">{item.name}</h3>
        <div className="flex justify-between text-xl ">
          <p>{item.description}</p>
          <div className="social-links flex space-x-2 items-center">
            {item.facebook && (
              <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                <img src="./icons/Fb.svg" alt="Facebook" className="w-6" />
              </a>
            )}
            {item.twitter && (
              <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                <img src="./icons/Twiter.svg" alt="Twitter" className="w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div className="px-32 py-20 ">
      <div className="text-[#274C5B] ">
        <h1 className="text-4xl font-bold ">The Founder's</h1>
        <h2 className="font-semibold text-xl mt-14">Our Story</h2>
        <p className="text-lg text-[#525C60] mt-5">
          Meet our team is always a special ones, because every single activity
          that happens in school becomes an unforgettable memory in a student’s
          life. At Evergreen groups we are specialized in all the school{" "}
        </p>
        <div className="mt-14 flex flex-wrap gap-10 justify-center">
          {founders.map((item, index) => (
            <div key={index}>{profile_card(item)}</div>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 justify-center mt-20 ">
          {activitys.map((item, index) => (
            <div key={index} className="p-5 text-2xl bg-[#F1F1F1] rounded-full">
              {item.title}
            </div>
          ))}
        </div>
        <div className="flex justify-between p-5 mt-14">
          {events.map((item, index) => (
            <img src={item.img} className="w-80 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
