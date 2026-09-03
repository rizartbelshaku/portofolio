import Reveal from "../../../components/Reveal";
import SectionHeading from "./SectionHeading";
import { stack } from "../data";

const StackSection = () => {
  return (
    <section id="stack" style={{ scrollMarginTop: "32px" }}>
      <SectionHeading
        title="Stack"
        icon={
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#3AE58C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8 12 3.5Z" />
            <path d="m4 12.5 8 4.2 8-4.2M4 16.8l8 4.2 8-4.2" />
          </svg>
        }
      />

      <div className="grid grid-cols-2 gap-3 min-[560px]:grid-cols-3">
        {stack.map((s, i) => (
          <Reveal
            key={s.name}
            index={i}
            className="flex flex-col items-center justify-center gap-3.5 rounded-[20px] border border-white/10 bg-[#0C0C0C] px-3.5 py-6 transition hover:-translate-y-1 hover:border-white/15 hover:bg-[#101010]"
          >
            <img src={s.icon} alt={`${s.name} logo`} loading="lazy" width={38} height={38} className="block h-[38px] w-[38px] object-contain" />
            <span className="text-center text-sm font-semibold tracking-tight text-white">{s.name}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
