import { useState } from "react";
import Reveal from "../../../components/Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";

const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section id="projects" style={{ scrollMarginTop: "32px" }}>
      <SectionHeading
        title="Projects"
        icon={
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#3AE58C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 15c-1.5 3 0 5 0 5s2-.5 3.5-2M13.5 4.5C16 3 20.5 3.5 20.5 3.5s.5 4.5-1 7l-6.5 6.5-5.5-5.5 6-7Z" />
            <circle cx="14.5" cy="9.5" r="1.6" />
          </svg>
        }
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-3.5">
        {projects.map((p, i) => {
          const open = openProject === p.id;
          return (
            <Reveal
              key={p.id}
              index={i}
              className="flex flex-col rounded-3xl border border-white/10 bg-[#0C0C0C] p-3 transition hover:-translate-y-1 hover:border-white/15"
            >
              <div
                className={`relative flex aspect-[16/11] items-center justify-center overflow-hidden ${
                  p.image ? "" : "rounded-[18px] border border-white/5 bg-[#131313]"
                }`}
              >
                {p.image ? (
                  <img src={p.image} alt={p.name} className="h-full w-full object-contain" />
                ) : (
                  <span className="px-4 text-center text-sm text-white">{p.name}</span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-[11px] px-2.5 pb-2.5 pt-[18px]">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="m-0 text-[1.18rem] font-semibold tracking-tight text-white">{p.name}</h3>
                    <p className="mt-[6px] text-[13px] text-white">{p.meta}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenProject(open ? null : p.id)}
                    aria-label={open ? "Hide details" : "Show details"}
                    className="group grid h-[42px] w-[42px] flex-none place-items-center rounded-full border border-white/10 bg-[#141414] text-white transition hover:-translate-y-0.5 hover:bg-[#3AE58C] hover:text-[#04150C]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="transition-transform duration-300"
                      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>

                <p className="m-0 text-[14.5px] leading-[1.7] text-white">{p.summary}</p>

                {open && (
                  <p className="m-0 border-l-2 border-[#3AE58C] pl-3.5 text-sm leading-[1.7] text-white">
                    {p.detail}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {p.tech.map((t) => (
                    <span key={t} className="whitespace-nowrap rounded-full border border-white/10 bg-[#141414] px-[13px] py-[7px] text-[12.5px] text-white">
                      {t}
                    </span>
                  ))}
                </div>

                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noopener" className="text-[13px] font-medium text-[#3AE58C]">
                    View on GitHub ↗
                  </a>
                )}
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener" className="text-[13px] font-medium text-[#3AE58C]">
                    Visit Site ↗
                  </a>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
