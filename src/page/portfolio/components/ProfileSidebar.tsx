const profilePhoto = "/profile.jpeg";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rizartbelshaku",
    path: "M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 4.5-1.8 4.5-5a4 4 0 0 0-1.1-2.8c.2-.7.2-1.7-.1-2.6 0 0-1.2-.4-3.4 1.2a10 10 0 0 0-5 0C7.2 3.7 6 4.1 6 4.1c-.3.9-.3 1.9-.1 2.6A4 4 0 0 0 4.8 9.5c0 3.2 1.7 4.7 4.5 5-.5.5-.5 1.1-.5 2V21",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rizart-belshaku/",
    path: "M4.5 9.5V19M4.5 5.6v.1M10 19v-9.5M10 13.8a3 3 0 0 1 6 0V19",
  },
  {
    label: "Email",
    href: "mailto:rizartbelshaku2@gmail.com",
    path: "",
    rect: true,
  },
  {
    label: "Phone",
    href: "tel:+355692932128",
    path: "M7 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 5 5.7 2 2 0 0 1 7 3.5Z",
  },
];

const ProfileSidebar = () => {
  return (
    <aside className="flex w-full flex-col gap-5 rounded-[34px] border border-[#232323] bg-[#121212] p-[18px] shadow-[0_28px_70px_rgba(0,0,0,.55)] lg:sticky lg:top-6 lg:p-6">
      <div className="relative aspect-square overflow-hidden rounded-[26px] border border-[#262626] bg-[#1A1A1A] shadow-[inset_0_1px_0_rgba(255,255,255,.04)]">
        <img
          src={profilePhoto}
          alt="Rizart Belshaku"
          width={1024}
          height={1024}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="flex justify-center">
        <span className="inline-flex items-center gap-[11px] whitespace-nowrap rounded-full border border-[#262626] bg-[#171717] px-5 py-3 text-sm font-semibold text-white">
          <span
            className="h-[9px] w-[9px] rounded-full bg-[#2FE38A]"
            style={{ animation: "lcPulse 2.2s cubic-bezier(.4,0,.6,1) infinite" }}
          />
          Available for work
        </span>
      </div>

      <div className="text-center">
        <p className="m-0 text-2xl font-bold tracking-tight text-white">Rizart Belshaku</p>
        <p className="mt-[7px] text-[13.5px] text-white">Frontend Developer</p>
      </div>

      <div className="flex justify-center gap-[9px]">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener" : undefined}
            aria-label={s.label}
            className="grid h-11 w-11 place-items-center rounded-[14px] border border-white/10 bg-[#121212] text-white transition hover:border-[#3AE58C] hover:bg-[#181818] hover:text-[#3AE58C]"
          >
            {s.rect ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5.5" width="18" height="13" rx="3" />
                <path d="m3.8 7 8.2 6 8.2-6" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={s.path} />
              </svg>
            )}
          </a>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-[9px]">
        <a
          href="/Rizart_Belshaku_CV.pdf"
          download="Rizart_Belshaku_CV.pdf"
          className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-white/10 bg-[#141414] px-2.5 py-3.5 text-[13.5px] font-medium text-white transition hover:bg-[#1C1C1C] hover:text-white"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" />
          </svg>
          Download CV
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-transparent bg-[#3AE58C] px-2.5 py-3.5 text-[13.5px] font-semibold text-[#04150C] transition hover:-translate-y-0.5 hover:bg-[#6FF0AD]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 4 3 11l7 2.5L12.5 21 21 4Z" />
          </svg>
          Contact Me
        </a>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
