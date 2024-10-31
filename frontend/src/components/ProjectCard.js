import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={20} sm={6} md={4}>
      <button className="proj-imgbx" cursor="pointer">
        <a href={link} rel="noreferrer" target="_blank">
          <img src={imgUrl} alt="img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </button>
    </Col>
  );
};
