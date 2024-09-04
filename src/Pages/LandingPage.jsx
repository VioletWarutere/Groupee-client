import React from "react";
import Auth from "./auth/Auth";

const LandingPage = () => {
  return (
    <section className="bg-[#03045e] min-h-screen mt-0 pt-16 text-[#caf0f8]">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        {/* Left side: Logo and Heading */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="logo flex flex-row items-center mb-4">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-36 h-auto"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ml-4 text-[#caf0f8]">
              CoinSplits
            </h1>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-center md:text-left md:text-4xl lg:text-5xl text-[#00b4d8]">
            Empower Your Group to Save and Spend Together.
          </h1>
          <p className="mt-4 text-lg text-center md:text-left text-[#90e0ef]">
            CoinSplits helps you and your friends save together for common goals or split expenses effortlessly. Manage your finances as a team while keeping things simple.
          </p>
          <a
            href="#"
            className="mt-4 text-[#90e0ef] hover:text-[#caf0f8] hover:underline font-medium text-lg inline-flex items-center"
          >
            Learn more about our app
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        {/* Right side: Authentication Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-md p-6 bg-[#0077b6] rounded-lg shadow-lg">
            <Auth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
