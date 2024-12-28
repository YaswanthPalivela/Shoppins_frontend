import React from "react";
import logo from "../assets/logo.jpeg";
import WatchCase from "../assets/watch-case.png";
import Black_Band from "../assets/Black_Band.jpeg";
import { useNavigate } from "react-router-dom";

const Applestudio = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/AppleWatch");
  };

  return (
    <section className="h-full m-3">
      <header className="m-6">
        <nav>
          <img src={logo} className=" h-6" />
        </nav>
      </header>
      <section
        className="flex flex-col justify-center items-center "
        id="Main_Content"
      >
        <div className="mt-6">
          <div className="text-left">
            <h5 className="text-xl font-semibold">Apple Watch Studio</h5>
            <h3 className="text-7xl font-bold">
              Choose a Case <br />
              Pick a band <br />
              Create your own style. <br />
            </h3>
          </div>

          <div className="mt-8">
            <button
              onClick={handleClick}
              className=" bg-blue-600 rounded-3xl text-xl text-white m-5 p-3 px-5"
            >
              Get started
            </button>
          </div>
        </div>
      </section>
      <div className="relative flex justify-center items-center ">
        <img src={WatchCase} className="absolute object-contain " />

        <img src={Black_Band} className="absolutes object-contain" />
      </div>
      <img />
    </section>
  );
};

export default Applestudio;
