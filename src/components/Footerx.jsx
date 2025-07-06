import React from "react";
import { footer_links } from "../constants";

export const Footerx = () => {
  return (
    <footer className="bg-[#2F5DC0]  w-full z-10 relative top-2 text-white">
      <div className="flex flex-wrap justify-between items-start max-w-screen-xl mx-auto text-white">
        {footer_links.map((section, index) => (
          <div key={index} className="flex flex-col items-start p-4  ">
            <a href={section.link} className="text-sm font-bold mb-2">{section.title}</a>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className=" text-xs font-thin mb-2 ">
                  <a href={link.link} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col items-start p-4">
          <h1 className="text-sm font-bold mb-2">Partner With us</h1>
          <ul>
            <li className="text-white text-sm mb-2">
              <a className="hover:underline">
                Partner with us to enjoy school benefits
              </a>
            </li>
            <li className="text-white text-sm my-4">
              <a className="hover:underline p-2 border-[1px] rounded-full px-4">
                Contact Us-: 7478004111
              </a>
            </li>
            <li className="text-white text-sm mb-2">
              <a className="hover:underline text-lg font-thin">Get 10% off your first order </a>
            </li>
            <li className="bg-white text-sm mb-2 flex items-center justify-evenly rounded-full px-0 ">
              <input className="text-sm text-black rounded-full outline-none px-2 p-1" placeholder="Enter your email" type="text" />
              <img src="./icons/paper_plane.svg" className="px-1 h-1/2"/>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm p-4">
        <p>
          Browse Alphabetically Onetouch | Showroom | Country Search | Affiliate
        </p>
        <p>
          Product Listing Policy-Intellectual Property Protection-Privacy
          Policy-Terms of Use-User Information Legal Enquiry Guide
        </p>
      </div>
    </footer>
  );
};
