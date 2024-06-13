import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] border-t-2 border-[#7042f867] rounded-t-3xl ">
      <div className="w-full flex flex-col items-center justify-center m-auto pt-2">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap pb-10">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Community{" "}
              </span>
            </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaTelegramPlane />
              <a href="https://t.me/Rudram2"><span className="text-[15px] ml-[6px]">Telegram</span></a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/sakshamagarwalm2"><span className="text-[15px] ml-[6px]">Github</span>
</a>            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <a href="https://discord.gg/sFxEWUgR"><span className="text-[15px] ml-[6px]">Discord</span></a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Social Media{" "}
              </span>
            </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              < RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              < FaWhatsapp />
              <span className="text-[15px] ml-[6px]">Whatsapp</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                About{" "}
              </span>
            </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">+91 9216778386</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                saksham.hkrm@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center p-[25px] border-t-2 border-[#7042f867] rounded-t-3xl ">
          &copy; HKRM 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
