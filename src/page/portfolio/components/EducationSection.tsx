import Reveal from "../../../components/Reveal";
import SectionHeading from "./SectionHeading";
import { education, languages } from "../data";

const EducationSection = () => {
  return (
    <section id="education" style={{ scrollMarginTop: "32px" }}>
      <SectionHeading
        title="Education & Training"
        icon={
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#3AE58C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
            <path d="M7 12v4.2c0 1.3 2.2 2.3 5 2.3s5-1 5-2.3V12" />
          </svg>
        }
      />

      <div className="flex flex-col gap-3.5">
        {education.map((e, i) => (
          <Reveal
            key={e.title}
            index={i}
            className="rounded-[22px] border border-white/10 bg-[#0C0C0C] p-[clamp(18px,2.4vw,26px)] transition hover:-translate-y-1 hover:border-white/15"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-[18px] gap-y-2.5">
              <div className="min-w-0">
                <h3 className="m-0 text-[1.1rem] font-semibold tracking-tight text-white">{e.title}</h3>
                <p className="mt-[5px] text-[13.5px] text-white">{e.school}</p>
              </div>
              <span className="whitespace-nowrap rounded-[11px] border border-white/10 bg-[#141414] px-[13px] py-[9px] text-[12.5px] font-medium text-white">
                {e.period}
              </span>
            </div>
            <div className="my-4 h-px bg-white/10" />
            <p className="m-0 text-[14.5px] leading-[1.7] text-white">{e.note}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-3.5 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
        {languages.map((l) => (
          <div key={l.name} className="rounded-[18px] border border-white/10 bg-[#0C0C0C] p-4">
            <span className="block text-[15px] font-semibold text-white">{l.name}</span>
            <span className="mt-1 block text-[12.5px] text-white">{l.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
