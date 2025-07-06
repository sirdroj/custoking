import React from "react";
import { activitys, events } from "../constants";

const Events = () => {
  return (
    <div className="px-32 py-20 font-inter text-[#274C5B]">
      <div className="flex justify-between items-center ">
        <div className="w-[45%]">
          <h1 className="text-4xl text-[#2F5DC0] font-bold mb-5">School Events Management in Hydrabad</h1>
          <p>
            A school event is always a special ones, because every single
            activity that happens in school becomes an unforgettable memory in a
            student’s life.<br/> At Evergreen groups we are specialized in all the
            school events that includes Annual days, Sports days, Admission
            events, International study programs, School Conferences & Seminars
            etc.<br/> We are specialized in organizing school annual days and
            graduation days. We bring the best possible artist and the MCs with
            maximum activities and entertainment where everyone will be
            entertained.<br/> We pick the best venue for the sports days and make
            sure all the safety protocols has been followed so that we can
            ensure the safety of the students and the reputation of the schools
          </p>
        </div>
        <img src="./events/envato-labs-image-edit.png"  className="w-[45%]"/>
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
  );
};

export default Events;
