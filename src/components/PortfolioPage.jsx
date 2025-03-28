import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
          Who am I? Just a tech nerd fueled by Java, caffeine, and an endless curiosity for how things work. 
          I build scalable apps, break things (intentionally!), and somehow always end up debugging at weird hours. 
          I geek out over Blockchain, AI, and making software that doesn’t crash (too often). 
          When I’m not coding, I’m probably playing chess, watching crime thrillers, or figuring out how to squeeze 
          one more feature into my projects. Let’s build the future—one line of code (and one bug fix) at a time!{" "}
            
          "Open-source keeps me sane—nothing like fixing bugs (mine and others') in the wild!" 😆🚀.
          <a className="text-[#4ECCA3] px-2" href="https://codolio.com/profile/Lucifer_7">
              The OG Coder
            </a>{" "}
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
