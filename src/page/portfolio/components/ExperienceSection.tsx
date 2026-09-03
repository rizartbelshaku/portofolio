import Reveal from "../../../components/Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data";

const ExperienceSection = () => {
  return (
    <section id="experience" style={{ scrollMarginTop: "32px" }}>
      <SectionHeading
        title="Experience"
        icon={
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#3AE58C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="7.5" width="18" height="12" rx="3" />
            <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18" />
          </svg>
        }
      />

      <div className="flex flex-col gap-3.5">
        {experience.map((job, i) => (
          <Reveal
            key={job.company}
            index={i}
            className="rounded-[22px] border border-white/10 bg-[#0C0C0C] p-[clamp(18px,2.4vw,26px)] transition hover:-translate-y-1 hover:border-white/15 hover:bg-[#101010]"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-[18px] gap-y-3">
              <div className="flex min-w-0 gap-3.5">
                <span
                  className={`grid flex-none place-items-center text-[13px] font-bold text-[#3AE58C] ${
                    job.company === "BIZ360" ? "h-[64px] w-[64px]" : "h-[42px] w-[42px]"
                  }`}
                >
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <span className={job.logo ? "hidden" : undefined}>{job.mark}</span>
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 text-[1.12rem] font-semibold tracking-tight text-white">{job.role}</h3>
                  <p className="mt-[5px] text-[13.5px] text-white">
                    {job.company} · {job.place}
                  </p>
                </div>
              </div>
              <span className="whitespace-nowrap rounded-[11px] border border-white/10 bg-[#141414] px-[13px] py-[9px] text-[14px] font-medium text-white">
                {job.period}
              </span>
            </div>

            <div className="my-[18px] h-px bg-white/10" />

            <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
              {job.bullets.map((b) => (
                <li key={b} className="relative pl-[18px] text-[14.5px] leading-[1.7] text-white">
                  <span aria-hidden="true" className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-[#3AE58C]" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-[18px] flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span key={t} className="whitespace-nowrap rounded-full border border-white/10 bg-[#141414] px-[13px] py-[7px] text-[12.5px] text-white">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
