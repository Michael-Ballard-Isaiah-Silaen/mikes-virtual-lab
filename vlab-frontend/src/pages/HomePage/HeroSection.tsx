import { NavLink } from "react-router-dom";
import SvgBottomLeft from "./SvgBottomLeft";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineFunction } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[70vh] w-full">
      <SvgBottomLeft />
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2 py-4">
          <h1 className="text-5xl font-bold tracking-wide text-green-700">
            Mike's VLab 1.0
          </h1>
          <h2 className="text-green-700">TPB Virtual Lab</h2>
        </div>
        <TypeAnimation
          sequence={[
            "Studying Something?",
            1000,
            "Maths?",
            1000,
            "Maths? Physics?",
            1000,
            "Maths? Physics? Chemistry?",
            1000,
            "Come try out Mike's VLab 1.0!",
            1000,
            "But I only have Physics for now hehehe",
            1000,
          ]}
          wrapper="h3"
          className="max-w-[70vw] text-center"
          speed={50}
          repeat={Infinity}
        />

        <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-1 md:gap-8 md:py-12">
          <NavLink to="/physics" className="group">
            <button className="relative aspect-square h-auto w-[150px] rounded-lg md:w-[200px]">
              <div className="absolute -inset-[1px] aspect-auto h-auto w-[152px] rounded-lg bg-gradient-to-tr from-green-400 to-green-900 blur-sm duration-200 ease-in group-hover:blur md:w-[202px]" />
              <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-white">
                <div className="relative flex h-full w-full flex-col items-center justify-between rounded-lg bg-white p-4 md:p-8">
                  <div className="flex flex-col items-center space-y-3">
                    <h2 className="text-2xl font-bold uppercase text-green-700">
                      Physics
                    </h2>
                    <AiOutlineFunction size={45} color="#00bf33" />
                  </div>
                </div>
              </div>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
