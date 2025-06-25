import Image from "next/image";

import {
  getHoursWorked,
  getAllIndustriesWorked,
} from "@/services/work-experience/work-experience-service";
import location from "@/services/weather/data/location.json";

import LandingPageImage from "@/assets/images/landing-image.png";
import ProfileImage from "@/assets/images/me.jpeg";
import WeatherWidget from "@/components/WeatherWidget";

export default function Home() {
  const hoursWorked = getHoursWorked();
  const industriesWorked = getAllIndustriesWorked();
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <main className="">
        <section>
          <h1>Engineer, Dreamer.</h1>
          <p>
            Driven to Engineer Software That Solves Problems, Sparks Innovation,
            and Fuels Dreams.
          </p>
          <button>Let's Chat</button>
          <Image src={LandingPageImage} alt="abstract image of metal object" />
        </section>
        <section>
          <Image
            src={ProfileImage}
            alt="Image of Jonathan Ferreras"
            width={200}
            height={200}
          />
          <h2>Hi, I'm Jonathan.</h2>
          <WeatherWidget location={location} />
          <div>
            <h1>THAT'S ABOUT...</h1>
            <div>
              <div>{hoursWorked} WORK HOURS</div>
              <div>30+ APPS IN PROD</div>
              <div>{industriesWorked} INDUSTRIES</div>
            </div>
            <p>
              "Success doesn't happen overnight; it requires persistence in
              effort and consistency in action.
            </p>
          </div>
        </section>
        <section>
          <h1>CAREER HIGHLIGHTS</h1>
          <p>
            From designing rich web & mobile applications to building API
            services, I have crafted scalable, user-focused solutions that
            bridge creativity and functionality, delivering impactful digital
            experiences.
          </p>
          <div>
            <div>
              DRL
              <div>
                <h3>THE DRONE RACING LEAGUE</h3>
                <p>SOFTWARE ENGINEER II</p>
              </div>
            </div>
            <div>
              <div>Company description</div>
              <div>Video</div>
            </div>
          </div>
          <div>
            <div>
              MTA
              <div>
                <h3>METROPOLITAN TRANSPORTATION AUTHORITY</h3>
                <p>APPLICATION DEVELOPMENT SPECIALIST</p>
              </div>
            </div>
            <div>
              <div>Video</div>
              <div>Company description</div>
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
      </main>
      <footer>
        <section>
          <a href="https://github.com/Jonathanferreras/jf-portfolio">
            View source code
          </a>
        </section>
      </footer>
    </div>
  );
}
