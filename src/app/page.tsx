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
        <figure className="flex justify-center items-center px-4 relative md:-top-20">
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
        <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 md:w-1/2 my-12 px-4">
          I am Senior Software Engineer with{" "}
          <span className="text-[color:var(--accent)] font-black">
            +{yearsWorked}
          </span>{" "}
          years in <br /> the industry specializing in full-stack <br />{" "}
          software engineering.
        </p>

        <div className="flex flex-col items-center gap-4 text-lg sm:text-xl md:text-2xl font-light mb-12 w-full">
          <h1 className="text-6xl sm:text-8xl font-black text-center sm:text-left sm:self-start sm:pl-10 mt-10 sm:mt-28 mb-10 sm:mb-20 text-gray-400">
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

          <p className="text-center text-4xl sm:text-6xl sm:text-right sm:self-end sm:pr-4 mt-20 text-gray-400">
            "Success doesn't happen overnight; it requires <br /> persistence in
            effort and consistency in action."
          </p>
        </div>
      </section>
      <section>
        <h1>CAREER HIGHLIGHTS</h1>
        <p>
          From designing rich web & mobile applications to building API
          services, I have crafted scalable, user-focused solutions that bridge
          creativity and functionality, delivering impactful digital
          experiences.
        </p>
        <div>
          <div>
            <Image
              src={drlWorkExperience?.logo ?? ""}
              alt={`${
                drlWorkExperience?.companyName ?? "Company"
              }'s company logo`}
              width={100}
              height={100}
            />
            <div>
              <h3>{drlWorkExperience?.companyName}</h3>
              <p>{drlWorkExperience?.position}</p>
            </div>
          </div>
          <div>
            <div>{drlWorkExperience?.description}</div>
            <video
              src={drlWorkExperience?.video}
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src={mtaWorkExperience?.logo ?? ""}
              alt={`${
                mtaWorkExperience?.companyName ?? "Company"
              }'s company logo`}
              width={100}
              height={100}
            />
            <div>
              <h3>{mtaWorkExperience?.companyName}</h3>
              <p>{mtaWorkExperience?.position}</p>
            </div>
          </div>
          <div>
            <div>{mtaWorkExperience?.description}</div>
            <video
              src={mtaWorkExperience?.video}
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>GET IN TOUCH</h2>
          <p>
            If you want to get in touch about any opportunities or just say hi
          </p>
        </div>
        <a href="/contact">Contact</a>
      </section>
    </div>
  );
}
