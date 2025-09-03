import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import DetailsButton from "./components/DetailsButton";
import Image from "next/image";
import projects from "./projects.json";

//--------------------------------------------------------------

const Home = () => {
  // Get Athens local time on server render
  const athensTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Athens",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short", // gives EET/EEST
  }).format(new Date());

  return (
    <div className="min-h-screen bg-black text-gray-50">
      <div className="max-w-7xl mx-auto px-8 pt-12 flex flex-col gap-16">
        {/* Header Section */}
        <header className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            {/* Name and Profile Photo */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/IMG_1925.jpg"
                  alt="Vaggelis Magonezos"
                  width={64}
                  height={64}
                  className="rounded-full ring-1 ring-gray-800"
                  priority
                />
              </div>
              <h1 className="text-2xl font-normal tracking-tight text-gray-100">
                Vaggelis Magonezos
              </h1>
            </div>

            {/* Contact Information*/}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-400">
              <a
                href="mailto:evaggelos.magonezos@gmail.com"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <Mail size={14} className="text-gray-600" />
                evaggelos.magonezos@gmail.com
              </a>

              <a
                href="tel:+306947813200"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} className="text-gray-600" />
                +30 694 781 3200
              </a>

              <span className="text-gray-400 flex items-center gap-1.5">
                <MapPin size={14} className="text-gray-600" />
                Athens, Greece {athensTime}
              </span>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/vmagonezos"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} className="text-gray-600" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/vmagonezos"
                  className="hover:text-gray-300 transition-colors flex items-center gap-1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={14} className="text-gray-600" />
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={14} className="text-gray-600" />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          <section className="max-w-3xl flex flex-col gap-4 mt-4">
            <p className="text-gray-300 leading-relaxed">
              Hello World 👋 ! <br />
              I'm Vaggelis and I got into web development back in 2018 when I
              started building small tools to make my job easier, and I quickly
              realized how much I enjoy creating stuff for the web. Most of what
              I know comes from just doing projects, breaking things, and
              figuring out how to fix them. These days I mainly work with
              JavaScript with tools like React, React Native, Next.js, and
              Node.js. I lean more toward the front end because I like making
              clean, fast and mobile-first UIs, but I enjoy picking up new tech
              whenever I can. For me, it's all about learning by building and
              keeping things straightforward.
              <br />I have been involved in various projects, ranging from
              enterprise-grade full-stack applications to small, niche, useful
              tools, as well as company websites, e-shops, and published mobile
              apps.
            </p>
          </section>
        </header>

        <div className="border-t border-gray-800"></div>

        {/* Projects Section */}
        <main>
          <section className="flex flex-col gap-6">
            <h2 className="text-lg font-normal text-gray-400 mb-2">
              What I've been working on
            </h2>

            <div className="flex flex-col gap-5">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 py-3 border-b border-gray-900 last:border-b-0"
                >
                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-base font-medium text-gray-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm mt-1">
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          className="text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={12} className="text-gray-600" />
                          Visit
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={12} className="text-gray-600" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="md:ml-6 mt-1 md:mt-0">
                    <DetailsButton href={`/projects/${project.slug}`} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-16 p-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Vaggelis Magonezos. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
