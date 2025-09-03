import { Download, ExternalLink, Github, Linkedin } from "lucide-react";
import DetailsButton from "./components/DetailsButton.client";
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
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">
        {/* Header Section */}
        <header className="flex flex-col gap-12">
          <h1 className="text-4xl font-light tracking-wide text-gray-50">
            Vaggelis Magonezos
          </h1>

          {/* Contact Information */}
          <section className="flex flex-col gap-6">
            <h2 className="text-lg font-medium text-gray-400">Contact</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <address className="not-italic flex flex-col gap-2">
                <span className="text-gray-400 text-sm">Email</span>
                <a
                  href="mailto:vaggelis@example.com"
                  className="text-gray-50 hover:text-blue-400 transition-colors  break-words"
                >
                  evaggelos.magonezos@gmail.com
                </a>
              </address>

              <address className="not-italic flex flex-col gap-2">
                <span className="text-gray-400 text-sm">Phone</span>
                <a
                  href="tel:+1234567890"
                  className="text-gray-50 hover:text-blue-400 transition-colors flex items-center"
                >
                  +30 (694) 78-13-200
                </a>
              </address>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-sm">Based</span>
                <p className="text-gray-50 flex items-center">
                  {`Athens, Greece ${athensTime}`}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-sm">Links</span>
                <nav className="flex flex-col gap-2">
                  <a
                    href="https://github.com/vmagonezos"
                    className="text-gray-50 hover:text-blue-400 transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="text-gray-400" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/vmagonezos"
                    className="text-gray-50 hover:text-blue-400 transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={16} className="text-gray-400" />
                    LinkedIn
                  </a>
                  <a
                    href="/resume.pdf"
                    className="text-gray-50 hover:text-blue-400 transition-colors flex items-center gap-2"
                    download
                  >
                    <Download size={16} className="text-gray-400" />
                    Resume
                  </a>
                </nav>
              </div>
            </div>
          </section>

          {/* Welcome Section */}
          <section className="max-w-3xl flex flex-col gap-6">
            <h2 className="text-lg font-medium text-gray-400">
              A few things about me
            </h2>
            <p className="text-gray-50 leading-relaxed text-lg">
              Hello World 👋 ! <br />
              I'm Vaggelis and I got into web development back in 2018 when I
              started building small tools to make my job easier, and I quickly
              realized how much I enjoy creating stuff for the web. Most of what
              I know comes from just doing projects, breaking things, and
              figuring out how to fix them. These days I mainly work with
              JavaScript with tools like React, React Native, Next.js, and
              Node.js. I lean more toward the front end because I like making
              clean, simple, and fast UIs, but I enjoy picking up new tech
              whenever I can. For me, it's all about learning by building and
              keeping things straightforward.
            </p>
          </section>
        </header>

        <div className="border-t border-gray-800"></div>

        {/* Projects Section */}
        <main>
          <section className="flex flex-col gap-8">
            <h2 className="text-2xl font-light tracking-wide text-gray-50">
              What I've been creating
            </h2>

            <div className="flex flex-col gap-6">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="border-b border-gray-800 pb-6 last:border-b-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-xl font-medium text-gray-50">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        {project.projectUrl && (
                          <a
                            href={project.projectUrl}
                            className="text-gray-50 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={14} className="text-gray-400" />
                            Have a look
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="text-gray-50 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={14} className="text-gray-400" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <DetailsButton href={`/projects/${project.slug}`} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-16 pt-8 border-t border-gray-800">
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
