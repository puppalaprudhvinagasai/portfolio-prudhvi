import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  src: string;
  title: string;
  domain?: string;
  description: string;
  link: string;
  tech?: string;
  status?: string;
  isLive?: boolean;
};

export const ProjectCard = ({
  src,
  title,
  domain,
  description,
  link,
  tech,
  status,
  isLive,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.65)] backdrop-blur-md flex flex-col justify-between hover:border-[#7042f88b] hover:shadow-[0_0_20px_rgba(112,66,248,0.25)] transition-all duration-300">
      <div>
        <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#030014]/60 border-b border-[#2A0E61]">
          <Image
            src={src}
            alt={title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
          {domain && (
            <div className="absolute top-3 left-3 bg-[#030014]/85 backdrop-blur-md border border-[#7042f88b] text-[#c4b5fd] text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
              {domain}
            </div>
          )}
        </div>

        <div className="relative p-6 flex flex-col gap-2.5">
          <h1 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {title}
          </h1>

          {tech && (
            <div className="text-xs font-medium text-cyan-400 py-0.5">
              <span className="text-gray-400 font-normal">Tech:</span> {tech}
            </div>
          )}

          <p className="mt-1 text-gray-300 text-sm leading-relaxed">
            {description}
          </p>

          {status && (
            <div className="text-xs text-yellow-300/90 italic mt-1 font-medium">
              Status: {status}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg button-primary text-white text-sm font-semibold hover:border-[#7042f8] transition-all"
        >
          {isLive ? (
            <>
              <span>Live Demo</span>
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              <span>View on GitHub</span>
              <FaGithub className="w-4 h-4" />
            </>
          )}
        </Link>
      </div>
    </div>
  );
};
