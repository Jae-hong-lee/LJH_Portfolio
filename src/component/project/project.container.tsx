import ProjectUI from "./project.presenter";

export default function ProjectContainer(props: any) {
  return <ProjectUI projects={props.projects} />;
}
