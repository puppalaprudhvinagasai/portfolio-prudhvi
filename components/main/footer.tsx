import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-20 relative border-t border-[#2A0E61]"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl pt-10">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-8 pb-10">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-start justify-start"
            >
              <h3 className="font-bold text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target={link.startsWith("http") ? "_blank" : undefined}
                  rel={link.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="flex flex-row items-center my-[8px] text-gray-300 hover:text-white transition"
                >
                  {Icon && <Icon className="mr-2 h-4 w-4 text-purple-400" />}
                  <span className="text-[14px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[14px] text-center text-gray-400 border-t border-[#7042f833] w-full pt-6">
          &copy; {new Date().getFullYear()} Puppala Prudhvi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
