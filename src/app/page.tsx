import Image from "next/image";

import { getSortedWorkExperience } from "@/services/work-experience/work-experience-service";

import LandingPageImage from "@/assets/landing-image.png";
import ProfileImage from "@/assets/me.jpeg";

export default function Home() {
  console.log(getSortedWorkExperience({ asc: true }));
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-montserrat)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section>
          <h1>Engineer, Dreamer.</h1>
          <p>
            Driven to Engineer Software That Solves Problems, Sparks Innovation,
            and Fuels Dreams.
          </p>
          <button>Let's Chat</button>
          <Image src={LandingPageImage} alt="abstract image" />
        </section>
        <section>
          <Image
            src={ProfileImage}
            alt="Jonathan Ferreras"
            width={200}
            height={200}
          />
          <h2>Hi, I'm Jonathan.</h2>
          <div>
            <div>
              <div>Based in</div>
              <div>New York City</div>
            </div>
            <div>
              <div>27F</div>
              <div>
                <div>Sunny</div>
                <div>H:32 L:18</div>
              </div>
            </div>
          </div>
          <div>
            <h1>THAT'S ABOUT...</h1>
            <div>
              <div>15,080 WORK HOURS</div>
              <div>30+ APPS IN PROD</div>
              <div>5 INDUSTRIES</div>
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
    </div>
  );
}
