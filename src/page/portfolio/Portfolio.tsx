import ProfileSidebar from "./components/ProfileSidebar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import StackSection from "./components/StackSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import PortfolioFooter from "./components/PortfolioFooter";

const Portfolio = () => {
  return (
    <div id="top" className="min-h-screen bg-black px-3.5 py-4 text-white sm:px-6 sm:py-8 lg:px-7 lg:py-11">
      <div className="mx-auto max-w-[1180px]">

        <div className="grid items-start gap-8 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-24">
          <ProfileSidebar />

          <main className="flex min-w-0 flex-col gap-[clamp(34px,4.5vw,58px)]">
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <StackSection />
            <EducationSection />
            <ContactSection />
            <PortfolioFooter />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
