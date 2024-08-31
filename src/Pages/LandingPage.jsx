//import React from 'react'
import Auth from "./auth/Auth";
const LandingPage = () => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="logo flex flex-row justify-center align-baseline">
              <img
                src="/images/logo.png"
                alt="logo"
                style={{ width: "144px" }}
              />
              <h1 className="text-black text-center">CoinSplits</h1>
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Where convenience and community thrives.
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Here at CoinSplits we prioritize ease and comfortability to pay,
              invest and raise capital for any product or service as a group.
            </p>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Read more about our app
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
          <div>
            <div className="mx-auto flex justify-center w-full lg:max-w-xl p-12 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              
              <Auth />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
