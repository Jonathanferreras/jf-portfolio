import Image from "next/image";

import {
  getHoursWorked,
  getAllIndustriesWorked,
  getWorkExperienceByName,
  getYearsWorked,
} from "@/services/work-experience/work-experience-service";
import location from "@/services/weather/data/location.json";
import WeatherWidget from "@/components/WeatherWidget";
import MailIcon from "@/components/MailIcon";
import StatRing from "@/components/StatRing";

export default function Home() {
  const hoursWorked = getHoursWorked();
  const yearsWorked = getYearsWorked();
  const industriesWorked = getAllIndustriesWorked();
  const drlWorkExperience = getWorkExperienceByName("drl");
  const mtaWorkExperience = getWorkExperienceByName("mta");

  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <div className="container mx-auto px-4">
        <section className="flex flex-col items-center justify-center md:min-h-[calc(100vh-80px)] sm:min-h-screen relative">
          <div className="flex flex-col items-center justify-center text-center px-4 z-10">
            <h1 className="mt-10 text-6xl sm:text-9xl md:text-8xl">
              Engineer, Dreamer.
            </h1>
            <blockquote className="mt-10 mb-6 text-center">
              <p className="text-xl md:text-3xl sm:text-2xl text-gray-400 font-light w-full mb-0.5">
                Driven to Engineer Software That Solves Problems, <br /> Sparks
                Innovation, and Fuels Dreams.
              </p>
            </blockquote>
            <a
              href="/contact"
              className="group flex items-center justify-center border border-white py-2 px-6 rounded-full md:text-2xl sm:text-xl text-white mb-6 transition-colors duration-300 hover:bg-[color:var(--accent)] hover:text-black hover:border-black"
            >
              Let's Chat
              <MailIcon
                size={30}
                className="text-[color:var(--accent)] animate-pulse group-hover:text-black transition-colors duration-300 ml-2"
              />
            </a>
          </div>
          <figure className="hidden md:flex justify-center items-center px-4 relative -top-20 w-screen">
            <div className="w-[800px] h-[518px] md:w-[1330px] md:h-[863px]">
              <Image
                src="/images/landing-image.png"
                alt="abstract image of metal object"
                width={1330}
                height={863}
                className="w-full h-full object-contain opacity-50"
                priority
              />
            </div>
          </figure>
        </section>
        <section className="flex flex-col items-center justify-center text-center px-4 mt-10 md:mx-20">
          <Image
            src="/images/me.jpeg"
            alt="Image of Jonathan Ferreras"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <h2 className="text-4xl sm:text-2xl md:text-5xl my-5">
            Hi, I'm <strong>Jonathan.</strong>
          </h2>
          <div className="w-24 h-1 bg-[color:var(--accent)] rounded-full my-4"></div>
          <WeatherWidget location={location} />
          <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-6  my-12 px-4">
            I am Senior Software Engineer with{" "}
            <span className="text-[color:var(--accent)] font-black">
              +{yearsWorked}
            </span>{" "}
            years in <br /> the industry specializing in full-stack <br />{" "}
            software engineering.
          </p>
          <div className="flex flex-col items-center gap-4 text-lg sm:text-xl md:text-2xl font-light mb-12 w-full">
            <h1 className="text-5xl sm:text-7xl font-black text-center sm:text-left sm:self-start sm:pl-10 mt-10 sm:mt-28 mb-10 sm:mb-20 text-gray-400">
              THAT'S ABOUT...
            </h1>
            <div className="flex flex-wrap justify-center gap-10 sm:gap-20 md:gap-40">
              <StatRing
                label="WORK HOURS"
                value={hoursWorked}
                strokeWidth={4}
                size={300}
                paddingRatio={0.2}
              />
              <StatRing
                label="APPS IN PROD"
                value={30}
                delay={0.2}
                strokeWidth={4}
                size={300}
              />
              <StatRing
                label="INDUSTRIES"
                value={industriesWorked}
                delay={0.4}
                strokeWidth={4}
                size={300}
                paddingRatio={0.2}
              />
            </div>
            <p className="text-center text-3xl sm:text-4xl sm:text-right sm:self-end sm:pr-4 mt-20 text-gray-400">
              "Success doesn't happen overnight; it requires <br /> persistence
              in effort and consistency in action."
            </p>
          </div>
        </section>
        <section>
          <h1 className="text-5xl sm:text-9xl font-black text-justify self-center sm:text-left sm:self-start mt-10 sm:mt-28 text-gray-400">
            CAREER <br /> HIGHLIGHTS
          </h1>
          <p className="text-xl sm:text-2xl text-justify sm:text-left self-center sm:self-start mt-1 mb-10 sm:mb-20 text-gray-400">
            From designing rich web & mobile applications to building API
            services, I have crafted <br /> scalable, user-focused solutions
            that bridge creativity and functionality, delivering <br />{" "}
            impactful digital experiences.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-start w-full">
            <div className="flex flex-col gap-4 order-1">
              <div className="border border-white rounded-md p-4 flex items-center gap-4">
                <Image
                  src={drlWorkExperience?.logo ?? ""}
                  alt={`${drlWorkExperience?.companyName ?? "Company"} logo`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-white font-bold text-lg uppercase">
                    {drlWorkExperience?.companyName}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase">
                    {drlWorkExperience?.position}
                  </p>
                </div>
              </div>

              <div className="block md:hidden">
                <video
                  src={drlWorkExperience?.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="rounded-md w-full max-w-xl"
                />
              </div>

              <div className="border rounded-md p-6 text-white text-sm leading-relaxed">
                <p className="mb-4 whitespace-pre-line">
                  {drlWorkExperience?.description}
                </p>
                <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  READ MORE
                </button>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center order-2">
              <video
                src={drlWorkExperience?.video}
                muted
                autoPlay
                loop
                playsInline
                className="rounded-md w-full max-w-xl"
              />
            </div>

            <div className="hidden md:flex justify-center items-center order-3">
              <video
                src={mtaWorkExperience?.video}
                muted
                autoPlay
                loop
                playsInline
                className="rounded-md w-full max-w-xl"
              />
            </div>

            <div className="flex flex-col gap-4 order-4">
              <div className="border border-white rounded-md p-4 flex items-center gap-4">
                <Image
                  src={mtaWorkExperience?.logo ?? ""}
                  alt={`${mtaWorkExperience?.companyName ?? "Company"} logo`}
                  width={50}
                  height={50}
                  className="object-contain bg-black rounded-full p-1"
                />
                <div>
                  <h3 className="text-white font-bold text-lg uppercase">
                    {mtaWorkExperience?.companyName}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase">
                    {mtaWorkExperience?.position}
                  </p>
                </div>
              </div>

              <div className="block md:hidden">
                <video
                  src={mtaWorkExperience?.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="rounded-md w-full max-w-xl"
                />
              </div>

              <div className="border border-white rounded-md p-6 text-white text-sm leading-relaxed">
                <p className="mb-4 whitespace-pre-line">
                  {mtaWorkExperience?.description}
                </p>
                <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center text-center px-4 py-20 sm:py-32 bg-[color:var(--background)]">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light mb-10">
              If you want to get in touch about any opportunities or just say
              hi.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center border border-white py-3 px-8 rounded-full text-white text-lg sm:text-xl transition-colors duration-300 hover:bg-[color:var(--accent)] hover:text-black hover:border-black"
            >
              Contact{" "}
              <MailIcon
                size={30}
                className="text-[color:var(--accent)] animate-pulse group-hover:text-black transition-colors duration-300 ml-2"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
