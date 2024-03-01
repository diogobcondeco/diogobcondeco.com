import Greeting from "../Greeting";
import SocialLink from "../SocialLink";
import {
  faGithub,
  // faTwitch,
  // faDiscord,
  faTwitter,
  faLinkedin,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <div className="h-screen bg-background flex relative">
      <div className="absolute h-full w-full blur-md brightness-50">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="object-cover	w-screen h-screen"
        >
          <source src="bg.webm" type="video/webm" />
        </video>
        <div className="absolute h-full w-full opacity-80 bg-background z-10"></div>
      </div>
      <div className="absolute h-full w-full z-10 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <Greeting />
          <div className="mt-2 text-md sm:text-lg">Frontend Developer</div>
          <div>
            <div className="mt-4 font-medium flex justify-center gap-5 sm:gap-6">
              <SocialLink
                link="https://github.com/diogobcondeco/"
                icon={faGithub}
              />
              {/* <SocialLink link='https://twitch.com/frostvicious' icon={faTwitch} /> */}
              {/* <SocialLink link='https://discord.gg/' icon={faDiscord} /> */}
              <SocialLink
                link="https://twitter.com/diogobcondeco/"
                icon={faTwitter}
              />
              <SocialLink
                link="https://www.linkedin.com/in/diogobcondeco/"
                icon={faLinkedin}
              />
              <SocialLink
                link="https://drive.google.com/file/d/1HYoU2bt5HLD67oL7sMsf9lzXHJ1_rKON/view?usp=sharing"
                icon={faGoogleDrive}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
