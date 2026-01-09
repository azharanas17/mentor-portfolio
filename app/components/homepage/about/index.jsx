// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gray-300 w-fit text-slate-900 rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gray-300"></span>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1 flex flex-col justify-end mr-0">
          <p className="font-medium mb-5 text-[#10b981] text-xl uppercase">
            Who am I?
          </p>
          <p className="text-slate-700 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        {/* <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Profile Picture"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;