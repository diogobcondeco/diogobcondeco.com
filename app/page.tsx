import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        <SectionDivider />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
