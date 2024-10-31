import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import twitterPng from "../assets//img/twitter-clone.png";
import blogify from "../assets/img/blogify.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Ecommerce",
      description: "Backend & Development",
      imgUrl: projImg1,
      link: "https://github.com/Rahull-Adk/Ecommerce/",
    },
    {
      title: "Twitter-Clone",
      description: "Full Stack Twitter Clone using MERN",
      imgUrl: twitterPng,
      link: "https://github.com/Rahull-Adk/twitter-clone/",
    },
    {
      title: "Blogify",
      description: "A Full Stack Blog App",
      imgUrl: blogify,
      link: "https://github.com/Rahull-Adk/blogify/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I am experienced with multiple backend structure with
                    includes User Authentications, CRUD operations, Securities,
                    and Mongo Database queries. Currently Learning more about
                    the payment gateway system with stripes.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="pic" src={colorSharp2}></img>
    </section>
  );
};
