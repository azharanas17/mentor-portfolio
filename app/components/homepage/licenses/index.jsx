// @flow strict
import { licenses } from "@/utils/data/licenses";
import Image from "next/image";
import { BsAward } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/license-marketing.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Licenses() {
  return (
    <div id="license" className="relative z-50 border-t my-12 lg:my-24 border-gray-200">
        <div className="absolute top-0 -z-10 w-full h-96 bg-gradient-to-b from-emerald-50 via-emerald-100 to-emerald-200 opacity-40"></div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-gray-300"></span>
          <span className="bg-gray-200 w-fit text-slate-900 p-2 px-5 text-xl rounded-md">
            Licenses & Certifications
          </span>
          <span className="w-24 h-[2px] bg-gray-300"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                licenses.map(license => (
                  <GlowCard key={license.id} identifier={`license-${license.id}`}>
                    <div className="p-3 relative">
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-600 to-emerald-400 opacity-30"></div>
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#10b981]">
                          {license.issueDate}
                        </p>
                      </div>
                      <div className="flex items-center gap-6 px-3 py-5 relative">
                        <BsAward className="text-2xl text-[#10b981] flex-shrink-0" />
                        <div>
                          <p className="text-base sm:text-xl text-slate-900 font-semibold">
                            {license.title}
                          </p>
                          <p className="text-sm text-slate-600 mt-1">
                            {license.issuer}
                          </p>
                          {license.credentialUrl && (
                            <a
                              href={license.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#10b981] text-xs sm:text-sm mt-2 inline-block hover:underline"
                            >
                              View Credential →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Licenses;
