import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import sanikaImage from "../../assets/sanikaImage/sanika.jpg";

export const Home = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center justify-center px-6 md:px-20 py-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Left Content */}
        <RevealOnScroll className="flex-1">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm Sanika Kemdhare
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              A Passionate Web Developer. I specialize in building responsive,
              user-friendly, and scalable web applications using modern
              technologies. Whether it's crafting elegant front-end interfaces or
              developing robust back-end systems, I love turning ideas into reality
              through code. 🚀 <br />
              I’m currently working on projects that blend creativity with technology
              to solve real-world problems. <br />
              📫 Let’s connect and build something amazing together!
            </p>

            <div className="flex gap-4 mb-6">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-4">
              <FaLinkedin
                size={35}
                className="text-white hover:text-blue-400 transition-transform transform hover:scale-125 hover:rotate-3 cursor-pointer"
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/sanika-kemdhare")
                }
              />
              <FaInstagram
                size={35}
                className="text-white hover:text-pink-400 transition-transform transform hover:scale-125 hover:-rotate-3 cursor-pointer"
                onClick={() =>
                  openInNewTab("https://www.instagram.com/sanika_kemdhare")
                }
              />
              <FaGithub
                size={35}
                className="text-white hover:text-gray-400 transition-transform transform hover:scale-125 hover:rotate-6 cursor-pointer"
                onClick={() => openInNewTab("https://github.com/skemdhare")}
              />
              <FaFacebook
                size={35}
                className="text-white hover:text-blue-600 transition-transform transform hover:scale-125 hover:rotate-1 cursor-pointer"
                onClick={() =>
                  openInNewTab("https://www.facebook.com/Sanika Kemdhare")
                }
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* Right Side Image */}
        <RevealOnScroll className="flex-1 flex justify-center">
          <div className="w-64 h-96 md:w-80 md:h-[32rem] bg-gradient-to-br from-blue-500 to-cyan-400 p-1 rounded-full overflow-hidden shadow-xl">
            <img
              src={sanikaImage}
              alt="Sanika"
              className="w-full h-full object-cover rounded-[100px]"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
