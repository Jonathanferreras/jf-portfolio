import Image from "next/image";

import {
  getHoursWorked,
  getAllIndustriesWorked,
  getWorkExperienceByName,
} from "@/services/work-experience/work-experience-service";
import location from "@/services/weather/data/location.json";
import WeatherWidget from "@/components/WeatherWidget";

export default function Home() {
  const hoursWorked = getHoursWorked();
  const industriesWorked = getAllIndustriesWorked();
  const drlWorkExperience = getWorkExperienceByName("drl");
  const mtaWorkExperience = getWorkExperienceByName("mta");

  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <section>
        <h1>Engineer, Dreamer.</h1>
        <p>
          Driven to Engineer Software That Solves Problems, Sparks Innovation,
          and Fuels Dreams.
        </p>
        <button>Let's Chat</button>
        <Image
          src={"/images/landing-image.png"}
          alt="abstract image of metal object"
          width={500}
          height={500}
        />
      </section>
      <section>
        <Image
          src={"/images/me.jpeg"}
          alt="Image of Jonathan Ferreras"
          width={200}
          height={200}
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
