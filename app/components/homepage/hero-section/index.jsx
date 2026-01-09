// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="absolute -top-[98px] -z-10 w-full h-full bg-gradient-to-b from-emerald-50 via-emerald-100 to-emerald-200 opacity-50"></div>

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-slate-900 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-[#10b981]">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#10b981]">{personalData.designation}</span>
            .
          </h1>
          <div className="mt-6 mb-4">
            {/* use align justify */}
            <p className="text-slate-700 text-sm lg:text-lg text-justify">
              I'm a {personalData.description}
            </p>
          </div>

          <div className="my-12 flex items-center gap-5">
            
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-[#10b981] from-emerald-600 p-[1px] rounded-full transition-all duration-300 hover:from-[#10b981] hover:to-emerald-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-white rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-slate-900 no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
          </div>

        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={405}
            height={720}
            alt="Profile Picture"
            // use center vertically
            className="rounded-lg transition-all duration-1000 grayscale-0 hover:scale-110 cursor-pointer flex items-center justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;