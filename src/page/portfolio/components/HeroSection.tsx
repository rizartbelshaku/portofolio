import { useRevealOnLoad } from "../../../hooks/useRevealOnLoad";
import { useTypewriter } from "../../../hooks/useTypewriter";

const stats = [
  { value: "5+", label: "Completed Projects" },
  { value: "3+", label: "Years of Experience" },
  { value: "5+", label: "Happy Clients" },
  { value: "5+", label: "Awards Received" },
];

const HeroSection = () => {
  const isVisible = useRevealOnLoad();
  const typed = useTypewriter();

  return (
    <section
      id="about"
      style={{
        scrollMarginTop: "32px",
        ...(isVisible ? { animation: "lcUp .65s cubic-bezier(.22,.7,.3,1) 0ms forwards" } : { opacity: 0 }),
      }}
    >
      <div className="mb-8 flex items-center gap-[11px]">
        <h2
          className="m-0 inline-flex items-center gap-3 text-[clamp(1.9rem,3.4vw,2.5rem)] leading-[1.15] tracking-[0.01em] text-white"
          style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
        >
          Hello
          <span
            role="img"
            aria-label="waving hand"
            className="inline-block text-[0.78em] leading-none"
            style={{ transformOrigin: "75% 85%", animation: "lcWave 3.4s cubic-bezier(.36,.07,.19,.97) infinite" }}
          >
            👋
          </span>
        </h2>
      </div>

      <h1 className="m-0 text-balance text-[clamp(2rem,4.4vw,3.35rem)] font-semibold leading-[1.4] tracking-tight text-white">
        I&apos;m Rizart Belshaku,
        <br />
        <span className="text-[#3AE58C]">
          {typed}
          <span
            className="ml-1 inline-block h-[0.82em] w-[2px] align-[-0.08em] bg-[#3AE58C]"
            style={{ animation: "lcCaret 1s steps(1) infinite" }}
          />
        </span>
        <br />
        based in Tirana, Albania.
      </h1>

      <p className="mt-10 max-w-[90ch] text-[clamp(1rem,1.3vw,1.09rem)] leading-[1.75] text-white">
        I specialize in creating clean, user-friendly digital experiences by blending creativity
        with functionality. With a strong background in interactive design, I focus on crafting
        designs that not only look great but also provide smooth and engaging user interactions,
        helping ideas come to life seamlessly.
      </p>

      <div className="mt-14 flex flex-wrap gap-x-12 gap-y-8">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="m-0 text-3xl font-bold tracking-tight text-white sm:text-4xl">{s.value}</p>
            <p className="mt-3 text-sm text-white">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
