import barbershopImg from "@/public/assets/projects/barbershop/barbershop.png";
import massageImg from "@/public/assets/projects/wellnesscentre/massagetherapy.png"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto md:px-2 ">
        <p className="text-xl tracking-widest uppercase text-[#176d51c4] dark:text-[#00ba7cc4]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Barber Shop"
            backgroundImg={barbershopImg} 
            projectUrl="/project/barbershop"
            technolog="Next JS"
          />
          <ProjectItem
            title="Wellness Centre"
            backgroundImg={massageImg}
            projectUrl="/project/wellnesscentre"
            technolog="Tailwind"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
