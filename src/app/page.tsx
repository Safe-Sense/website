"use client";
import Image from "next/image";
// import React, {  useRef, setState } from 'react';

export default function Home() {
  function scrollToBottom() {
    const scrollHeight = document.body.scrollHeight;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(timestamp: number) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / 500, 1); // Duration: 500 milliseconds

      window.scrollTo(
        0,
        startPosition + (scrollHeight - startPosition) * progress
      );

      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      }
    }

    window.requestAnimationFrame(scrollStep);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-10 md:p-24 lg:p-24 ">
      <div className="w-full md:w-4/5 lg:w-4/5  md:mb-32 lg:mb-32">
        <h1 className="mt-12 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Safe Sense
        </h1>
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5  mb-32 block justify-between md:flex lg:flex  justify-between ">
        <div className="w-full md:w-3/5 lg:w-3/5 ">
          <h3 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Making our roads safer{" "}
            </span>{" "}
            using easy-to-install External Sensors and Machine Learning
          </h3>
          <p className="mt-12 text-lg font-normal text-gray-500 lg:text-xl dark:text-white">
            Safe Sense is a unit of four easy-to-install sensors that anyone
            (Even a child!) can install for their cars and get access to both
            audio and visual feedback for any object that comes close to your
            car. This helps in{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              navigating blind spots
            </strong>{" "}
            when driving,{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              parking
            </strong>{" "}
            in tight spaces, accessing{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              collision reports
            </strong>{" "}
            using advanced algorithms, and even advice on{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              preventive measures
            </strong>{" "}
            that could be taken 3-5 seconds before sideswipe accident occurs, as
            well as{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              suggesting the at-fault driver
            </strong>
            after an accident occurs.
          </p>
          {/*     window.scrollTo(0, document.body.scrollHeight); */}
          <div onClick={scrollToBottom}>
            <a
              // href="mailto:sarahguelzim@gmail.com"
              className="mt-16 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Learn more
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
        </div>
        <div className="w-full md:w-1/5 lg:w-1/5 mt-10 md:mt-0 lg:mt-0 ">
          <video width={"100%"} height={"auto"} controls poster={"/poster.png"}>
            <source src={"./mhw.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5  ">
        <h3 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          {" "}
          Inspiration
        </h3>
        <p className="mt-12 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          As per the National Safety Commission, there are around 242,000
          side-swipe accidents in the US alone. Of that number, there are more
          than 2,500 deaths and 27,000 injuries. Those statistics are
          unacceptable.
        </p>
        <div className="flex justify-center align-middle">
          <Image
            className="relative dark:invert mt-5 mb-5"
            src="./ADAS stats.jpg"
            alt="ADAS Stats"
            width={1000}
            height={591.37}
            priority
          />
        </div>

        <p className="mt-12 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Around 62% of vehicles on the road today are models from before the
          year 2015, meaning they lack the Advanced Driver Assistance Systems
          (ADAS) found in newer models. This significant portion of older
          vehicles is missing out on critical enhancements that could greatly
          improve their operational security and efficiency. As a result, many
          drivers are navigating without the support of technology that could
          prevent accidents and save lives. We must bridge this gap by
          considering upgrades or finding viable alternatives that equip these
          vehicles with modern advancements. Why should safety be a luxury? Your
          life is invaluable; making roads safer starts with us.{" "}
        </p>
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5   mt-16">
        <h3 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          {" "}
          How it Works
        </h3>
        <p className="mt-12 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Dominic Toretto places four sensors on the four corners of his 2009
          Dodge Challenger and downloads a platform-agnostic application that
          automatically connects to the sensors. Simple as that!
        </p>
        <div className="flex justify-center align-middle">
          <Image
            className="relative  mt-5 mb-5"
            src="./phone mhw.png"
            alt="phone"
            width={1000}
            height={591.37}
            priority
          />
        </div>
        <p className="mt-12 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Dom now has access to blind spot navigation, visual alerts when an
          object is getting close to his vehicle, audio alerts when an object is
          getting too close to his car, prediction of when a sideswipe accident
          is about to happen based on the behaviors of the cars next to
          collision reports when an accident occurs including data such as the
          exact time of impact, speed of the current car and any neighboring
          cars as well as preventive measures that could have been taken and the
          suggested at-fault driver.
        </p>
        <div className="flex justify-center align-middle">
          <Image
            className="relative  mt-5 mb-5"
            src="./sensor detection.png"
            alt="Sensor Positioning"
            width={1000}
            height={591.37}
            priority
          />
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5  ">
        <h3 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          {" "}
          Reach out
        </h3>

        <p className="mt-12 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          We are always looking for investors to make this dream a reality. Our team is made up of very talented
          hardware, mobile and machine learning engineers, an amazing product
          designer and a strategic marketing lead. If you are interested in
          learning more about the product, our roadmap, projected Monthly recurring revenue etc. , please contact our managing director at{" "}
          <a
            href="mailto:sarahguelzim@gmail.com"
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
          >
            sarahguelzim@gmail.com
          </a>
          .
        </p>

        <a
          href="mailto:sarahguelzim@gmail.com"
          className="mt-16 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Reach out
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
    </main>
  );
}
