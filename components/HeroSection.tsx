"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import Carousel from "./Carousel";
import Marquee from "./ui/marquee";

// Updated SocialIcon component with proper icon typing
const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <a
    href="#"
    className="text-secondary-foreground hover:text-white transition-transform transform hover:scale-110"
  >
    <Icon size={18} />
  </a>
);

const Divider = () => <div className="w-[0.5px] h-2 bg-gray-600"></div>;

function HeroSection() {
  return (
    <div className="flex bg-background text-font-col transition-all duration-500 ease-in-out">
      {/* Left Sidebar with Rotated Text */}
      <div className="w-[15%] border-r-gray-600 border-l-gray-600 border-b-gray-600  border-2  mt-4 ">
        <div className="flex items-center justify-center h-screen bg-background transition-all duration-500 ease-in-out">
          <div className="rotate-90 transform text-gray-400 text-[5rem] tracking-wide font-bold vertical-text ">
            DIGISOL365
          </div>
        </div>
      </div>
      {/* Right Content Section */}
      <div className="w-[85%] pr-4">
        <div className="flex items-center justify-between mt-4">
          {/* Headings */}
          <div className="text-[4rem] text-card-foreground font-bold font-raleway">
            <h1>UNLOCK YOUR</h1>
            <h1>BUSINESS WEBSITE</h1>
          </div>
          {/* Social Media Icons */}
          <div className="flex flex-col items-center space-y-4">
            <SocialIcon Icon={FaFacebookF} />
            <Divider />
            <SocialIcon Icon={FaTwitter} />
            <Divider />
            <SocialIcon Icon={FaPinterestP} />
            <Divider />
            <SocialIcon Icon={FaInstagram} />
          </div>
        </div>
        {/* Additional Content */}
        <div className="flex justify-between items-start">
          <div className="leading-10 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            laboriosam voluptate reiciendis error a quam dignissimos alias
            molestiae mollitia nesciunt, qui, labore corrupti eos optio ratione
            saepe explicabo quas temporibus!{" "}
            <div>
              <button className="bg-buttoncolor text-foreground px-4 py-2 rounded-md mt-4">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 mt-10">
            <Carousel />
          </div>
        </div>
        <Marquee className="text-font-col border-2 border-t-gray-600 border-b-gray-600">
          <div>❤️ We are design agency.</div>
          <div>❤️ We are creative</div>
          <div>❤️ our team has software developers.</div>
          <div>❤️ Your vision our mission</div>
        </Marquee>
      </div>
    </div>
  );
}

export default HeroSection;
