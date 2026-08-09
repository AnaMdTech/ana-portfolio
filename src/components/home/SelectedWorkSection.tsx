import ProjectCard, { ProjectData } from "@/components/shared/ProjectCard";
import { SELECTED_PROJECTS } from "@/lib/data";

export default function SelectedWorkSection({
  projects = SELECTED_PROJECTS,
}: {
  projects?: ProjectData[];
}) {
  return (
    <section className="work-section">
      <div className="w-full">
        <div>
          <p className="work-header-subtitle">Let me show you</p>
          <h2 className="work-header-title">Selected work</h2>
        </div>

        <div className="work-list-wrapper w-full">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="homepage"
              className={idx % 2 !== 0 ? "lg:items-end" : "lg:items-start"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
