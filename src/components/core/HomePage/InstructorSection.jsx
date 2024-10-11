import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-18">
      <div className="flex flex-row gap-20 items-center justify-between mb-20">
        <div className="w-[70%] mt-16">
          <img
            src={Instructor}
            alt="instructor"
            className="shadow-white shadow-[-20px_-20px_rgba(255,255,255)]"
          />
        </div>

        <div className="width-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semibold w-[50%]">
            Become an
            <HighlightText text={" Instructor"} />
          </div>

          <p className="font-medium text-[16px] w-[80%] text-richblack-300">
            Instructors from around the world teach millions of students on
            LearnSphere. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex flex-row items-center gap-2">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
