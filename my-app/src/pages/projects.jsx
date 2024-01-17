import DefaultLayer from 'layers/default';

import ProjectCard from 'components/cards/ProjectCard';

import projects from 'configs/projects';

function Projects() {
  return (
    <DefaultLayer>
      <div className="projects-page">
        <div className="container">
          <div className="projects-page__title">
            <h2 className="projects-page__font projects-page__font--title">Projects</h2>
          </div>

          <div className="projects-page__grid">
            {
                    projects.map((project) => (
                      <ProjectCard
                        className="some-projects-section__project"
                        key={project.id}
                        title={project.title}
                        text={project.text}
                        link={project.link}
                        image={project?.image}
                      />
                    ))
                }
          </div>
        </div>
      </div>
    </DefaultLayer>
  );
}

export default Projects;
