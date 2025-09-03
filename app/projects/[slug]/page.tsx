import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/app/projects.json";
import Image from "next/image";

//--------------------------------------------------------------

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-8">
        {/* Back Navigation */}
        <nav>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
          >
            <ArrowLeft size={14} />
            Back
          </Link>
        </nav>

        {/* Project Header */}
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-normal tracking-tight text-gray-100">
              {project.name}
            </h1>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Project Links and Tech Stack */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  className="text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} className="text-gray-600" />
                  Visit
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} className="text-gray-600" />
                  GitHub
                </a>
              )}
            </div>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-gray-600">Built with:</span>
                {project.techStack.map((tech, index) => (
                  <span key={tech} className="text-gray-500">
                    {tech}
                    {index < project.techStack.length - 1 && (
                      <span className="text-gray-700 mx-1">•</span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot: string, index: number) => (
                <div
                  key={screenshot}
                  className="border border-gray-900 rounded overflow-hidden"
                >
                  <Image
                    src={screenshot}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="w-full h-auto object-cover"
                    width={300}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Page;
