import FeatureBox from "../../components/HomePage/FeatureBox";
import { IoMdPin } from "react-icons/io";
import { RiProgress5Line } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="pn-10 mx-auto flex h-fit w-full max-w-[1200px] flex-col items-center justify-center px-4 pt-20"
    >
      <h2 className="text-3xl font-bold tracking-wide text-green-700">
        Main Features
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-4 py-4">
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <IoMdPin size={30} color="#00bf33" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            Login/Logout Function
          </h3>
          <p className="text-start text-[#8890a0]">
            Standard grade login/logout function for user authentication, user credentials are stored in a MongoDB DB
          </p>
        </FeatureBox>
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <RiProgress5Line size={30} color="#00bf33" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            Physics Lab
          </h3>
          <p className="text-start text-[#8890a0]">
            The only lab I have for now, planned to also make maths and chemistry but was busy with other things therefore I did not have time to explore more before the deadline
          </p>
        </FeatureBox>
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <FaShareAlt size={30} color="#00bf33" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            "Opened" Checker
          </h3>
          <p className="text-start text-[#8890a0]">
            A simple checker to see if the user has opened the lab, the status is also kept in a Mongo table
          </p>
        </FeatureBox>
      </div>
    </section>
  );
};

export default FeaturesSection;
