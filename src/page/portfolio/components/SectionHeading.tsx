import type { ReactNode } from "react";
import Reveal from "../../../components/Reveal";

const SectionHeading = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <Reveal className="mb-5 flex items-center gap-[11px]">
    {icon}
    <h2 className="m-0 text-[1.3rem] font-medium tracking-tight text-white">{title}</h2>
  </Reveal>
);

export default SectionHeading;
