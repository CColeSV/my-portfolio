import * as React from "react";

import "./projects.scss";
import Project, { IProject } from "../../shared/project/project";
import ProjectModal from "../../shared/project-modal/project-modal";

interface IState {
  selectedProject?: IProject;
}

interface IProps {
  projectList: IProject[];
  themeClass: string;
}

class Projects extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = { selectedProject: undefined };
  }

  public handleProjectClick = (projectId: number) => {
    this.setState({
      selectedProject: this.props.projectList.find(x => x.id === projectId)
    });
  };

  public handleModalExit = () => {
    this.setState({ selectedProject: undefined });
  };

  public render() {
    const { projectList } = this.props;
    const { selectedProject } = this.state;

    return (
      <section
        className={`section section-secondary ${
          this.props.themeClass === "Dark" ? "proj-dark" : ""
        }`}
      >
        <h2>Projects</h2>

        <div className="projects-container">
          {projectList.map(project => (
            <Project
              key={project.id}
              projectDetails={project}
              projectClick={this.handleProjectClick}
              themeClass={this.props.themeClass}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            modalExitEvent={this.handleModalExit}
            themeClass={this.props.themeClass}
          />
        )}
      </section>
    );
  }
}

export default Projects;
