import Image from "next/image";

import {
  getHoursWorked,
  getAllIndustriesWorked,
  getWorkExperienceByName,
} from "@/services/work-experience/work-experience-service";
import location from "@/services/weather/data/location.json";
import WeatherWidget from "@/components/WeatherWidget";
import MailIcon from "@/components/MailIcon";

export default function Home() {
  const hoursWorked = getHoursWorked();
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
              Driven to Engineer Software That Solves Problems,
            </p>
            <p className="text-xl md:text-3xl sm:text-2xl text-gray-400 font-light w-full">
              Sparks Innovation, and Fuels Dreams.
            </p>
          </blockquote>

          <a
            href="/contact"
            className="group flex items-center justify-center border border-white py-2 px-6 rounded-full md:text-2xl sm:text-xl text-white mb-6 transition-colors duration-300 hover:bg-[#cdfc4d] hover:text-black hover:border-black"
          >
            Let's Chat
            <MailIcon
              size={30}
              className="text-accent animate-pulse text-[color:var(--accent)] group-hover:text-black transition-colors duration-300 ml-2"
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

      <section className="flex flex-col items-center justify-center text-center px-4 mt-10">
        <Image
          src="/images/me.jpeg"
          alt="Image of Jonathan Ferreras"
          width={200}
          height={200}
          className="rounded-full object-cover"
        />

        <h2>
          Hi, I'm <strong>Jonathan.</strong>
        </h2>
        <WeatherWidget location={location} />
        <div>
          <h1>THAT'S ABOUT...</h1>
          <div>
            <div>{hoursWorked} WORK HOURS</div>
            <div>30+ APPS IN PROD</div>
            <div>{industriesWorked} INDUSTRIES</div>
          </div>
          <p>
            "Success doesn't happen overnight; it requires persistence in effort
            and consistency in action.
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
