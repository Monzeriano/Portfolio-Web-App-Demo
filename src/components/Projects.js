import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; 
import { ProjectCard } from "./ProjectCard"; 
import projImg1 from "../assets/img/project-img1.png"; 
import projImg2 from "../assets/img/project-img2.png"; 
import projImg3 from "../assets/img/project-img3.png"; 
import TrackVisibility from 'react-on-screen'; 
 
export const Projects = () => { 
    function LeftTabsExample() {
        return (
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        );
      }


  const projects = [ 
    { 
      title: "Project Image A", 
      description: "Description A", 
      imgUrl: projImg1, 
    }, 
    { 
        title: "Project Image B", 
        description: "Description B", 
        imgUrl: projImg2, 
      }, 
    { 
      title: "Project Image C", 
      description: "Description C", 
      imgUrl: projImg3, 
    }, 
  ]; 
 
  return ( 
    <section className="project" id="projects"> 
      <Container> 
        <Row> 
          <Col size={12}> 
            <TrackVisibility> 
              {({ isVisible }) => 
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2> 
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                <Nav variant="pills" className="nav-pills mb-5 justify-content
center align-items-center" id="pills-tab"> 
                    <Nav.Item> 
                      <Nav.Link eventKey="first">Tab 1</Nav.Link> 
                    </Nav.Item> 
                    <Nav.Item> 
                      <Nav.Link eventKey="second">Tab 2</Nav.Link> 
                    </Nav.Item> 
                    <Nav.Item> 
                      <Nav.Link eventKey="third">Tab 3</Nav.Link> 
                    </Nav.Item> 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? 
"animate__animated animate__slideInUp" : ""}> 
                    <Tab.Pane eventKey="first"> 
                      <Row> 
                        { 
                          projects.map((project, index) => { 
                            return ( 
                              <ProjectCard 
                                key={index} 
                                {...project} 
                                /> 
                            ) 
                          }) 
                        } 
                      </Row> 
                    </Tab.Pane> 
                    <Tab.Pane eventKey="second"> 
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis.</p> 
                    </Tab.Pane> 
                    <Tab.Pane eventKey="third"> 
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis.</p> 
                    </Tab.Pane> 
                  </Tab.Content> 
                </Tab.Container> 
              </div>} 
            </TrackVisibility> 
          </Col> 
        </Row> 
      </Container> 
    </section> 
  ) 
} 