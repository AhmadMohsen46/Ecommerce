import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between w-full  px-4 sm:items-start gap-12 sm:gap-2  text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="sm:w-1/3">
        <img src={assets.exchange_icon} className=" m-auto mb-5" alt="" />
        <p className="font-semibold">
          Hassle-free. Quick. Guaranteed to make it right.
        </p>
        <p className="text-gray-400">We want you to love what you ordered!</p>
      </div>
      <div className="sm:w-1/3">
        <img src={assets.quality_icon} className=" m-auto mb-5" alt="" />
        <p className="font-semibold">Return Policy</p>
        <p className="text-gray-400">
          If something’s not quite right, you can exchange your item within 14
          days of delivery.
        </p>
      </div>
      <div className="sm:w-1/3">
        <img src={assets.support_img} className=" m-auto mb-5" alt="" />
        <p className="font-semibold">24/7 Customer Support</p>
        <p className="text-gray-400">
          We're here to help—every step of the way. Whether you have a question
          about your order, need styling advice, or just want to say hi, our
          support team is ready to assist.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
