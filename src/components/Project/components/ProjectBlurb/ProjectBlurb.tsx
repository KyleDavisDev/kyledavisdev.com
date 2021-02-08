import * as React from "react";

export interface IProjectBlurb {
  title: string;
  text?: string;
}

const ProjectBlurb: React.FC<IProjectBlurb> = props => {
  const { title, text } = props;

  if (!text) return null;

  return (
    <div style={{ maxWidth: "800px" }}>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default ProjectBlurb;
