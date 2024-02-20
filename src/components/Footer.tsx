import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="h-full text-white bg-zinc-800 w-full md:px-20 pt-36 px-4 pb-5">
      <div className="flex justify-center items-center ">
        <div className="  mb-10 text-center ">
          <h1 className="font-bold text-2xl ">◯ Dine Market</h1>
          <p className="pt-5  text-xl md:text-3xl md:px-56 mb-5">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex justify-center gap-5 pt-2 pb-4 cursor-pointer">
            <BsTwitter className="w-8 h-8" />
            <FaFacebookF className="w-7 h-7" />
            <LiaLinkedinIn className="w-9 h-9" />
          </div>
          <div></div>
        </div>
      </div>

      <div className="md:grid grid-cols-3 flex flex-col md:pl-56 items-start pl-10  ">
        <div>
          <h1 className="font-bold text-2xl ">Company</h1>
          <div className="flex flex-col gap-1 pt-5 text-xl cursor-pointer pb-10">
            <p>About</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>How it Works</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-2xl ">Support</h1>
          <div className="flex flex-col gap-1 pt-5 text-xl cursor-pointer pb-10">
            <p>Support Carrer</p>
            <p>24h Service</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl ">Contact</h1>
          <div className="flex flex-col gap-1 pt-5 text-xl cursor-pointer pb-10">
            <p>Whatsapp</p>
            <p>Support 24h</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap justify-evenly pt-2">
        <h1 className="font-semibold text-xl opacity-40">
          Code By: Resheph Inayat
        </h1>
        <h1 className="font-semibold text-xl opacity-40">
          All Rights Reserved
        </h1>
        <h1 className="font-semibold text-xl opacity-40">
          Github:ReshephInayat
        </h1>
      </div>
    </footer>
  );
}
