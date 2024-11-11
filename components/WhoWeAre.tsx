/* eslint-disable @next/next/no-img-element */
import React from "react";
// import HeroVideoDialog from "./ui/hero-video-dialog";

const WhoWeAre: React.FC = () => {
  //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  //   const handleVideoClick = () => {
  //     setIsVideoPlaying(true);
  //   };

  return (
    <section className="flex flex-col md:flex-row items-center p-8 bg-background text-foreground">
      {/* Content Section */}
      <div className="md:w-1/2 space-y-6">
        <button className="px-4 py-2 bg-buttoncolor text-xs font-bold rounded-md">
          OUR VALUES & CULTURE
        </button>
        <h2 className="text-4xl font-bold">Who We Are</h2>
        <p className="text-gray-400">
          Morbi interdum pellentesque nunc, luctus pretium nulla luctus at.
          Aliquam cursus nunc arcu, condimentum efficitur tellus iaculis
          faucibus. Quisque gravida vel magna quis aliquam. Nam semper posuere
          risus, a gravida sapien tincidunt ac. Nam ac lacinia arcu. Aliquam
          erat volutpat. Curabitur consectetur nisl.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-2 gap-4 text-lg">
          <span className="flex items-center">
            <span className="text-green-600 mr-2">●</span> Creative Strategy
          </span>
          <span className="flex items-center">
            <span className="text-green-600 mr-2">●</span> Rebranding Design
          </span>
          <span className="flex items-center">
            <span className="text-green-600 mr-2">●</span> Unique Production
          </span>
          <span className="flex items-center">
            <span className="text-green-600 mr-2">●</span> Corporate Identity
          </span>
        </div>

        <p className="text-gray-400">
          Morbi interdum pellentesque nunc, luctus pretium nulla luctus at.
          Aliquam cursus nunc arcu, condimentum efficitur tellus iaculis
          faucibus. Quisque gravida vel magna quis aliquam.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center items-center flex-col">
        <div className="">
          {" "}
          <img
            src="https://plus.unsplash.com/premium_photo-1663933534712-fc5cffc627f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
            alt="Team in office"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* <div className="absolute top-1/2  border-red-100 ">
          <HeroVideoDialog
            className="dark:hidden block w-50 h-30"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block w-50 h-30"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div> */}
      </div>
    </section>
  );
};

export default WhoWeAre;
