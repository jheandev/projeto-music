import React from "react";
import {Navbar, Container, Button, Row, Col} from "react-bootstrap";
import "./style.css"
import logo from "../../assets/img/logo.svg";
import person from "../../assets/img/person.svg";




// 1 parte 

function Home() {
    return (
        <>
          <Navbar id="navbar"> 
            <Container>
                <Navbar.Brand>
                    <img src={logo} width="70" // height="75" 
                    alt="logo do site soud ware"/>
                    <strong id="nav-title" className="font-color">Sound ware </strong>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Row>
                        <Col >  
                        <Button variant="outline-light">Discover</Button> 
                        </Col>
                        <Col >  
                        <Button variant="outline-light">JOIN</Button>
                        </Col>
                    </Row>             
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <Container id="home-content" className="home-backgound">
            <Row>
                <Col className="home-test">
                <img src={person} alt="Pessoa ouvindo musica" width="100%" />
             
                </Col>

                <Col>
                <Row>
                    <Col>
                    <h1 className="font-color">Fell the Music</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p>Stream over 20 thousand songs with ame play</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Button variant="info" id="btn-join" classNome="font-color"size="lg">Join now </Button>
                    </Col>
                  </Row>
                 </Col>
                </Row>
         </Container>

        

    
      
         <Navbar id="navbar">
            <Container>
                <Navbar.Brand>
                    <img src={logo} width="70" // height="75" 
                    alt="logo do site soud ware"/>
                    <strong id="nav-title" className="font-color">Sound ware </strong>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Row>
                        <Col >  
                        <Button variant="outline-light">Discover</Button>
                        </Col>
                        <Col >  
                        <Button variant="outline-light">JOIN</Button>
                        </Col>
                    </Row>             
               </Navbar.Collapse>
            </Container>
         </Navbar>


         <Container id="home-content" className="home-backgound">
            <Row>
                <Col className="home-test">
                     
                </Col>

                <Col>
                <Row>
                    <Col>
                    <h1 className="font-color">Discover new music</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <p>Best Music you will ever want to listen to,is here</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Button variant="info" id="btn-join" classNome="font-color"size="lg">Charts </Button>
                    <Button variant="info" id="btn-join" classNome="font-color"size="lg">Charts </Button>
                    <Button variant="info" id="btn-join" classNome="font-color"size="lg">Charts </Button>
                   
                    </Col>
                  </Row>
                 </Col>
                </Row>
         </Container>




         <Navbar id="navbar">
            <Container>
                <Navbar.Brand>
                    <img src={logo} width="70" // height="75" 
                    alt="logo do site soud ware"/>
                    <strong id="nav-title" className="font-color">Sound ware </strong>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Row>
                        <Col >  
                        <Button variant="outline-light">Discover</Button>
                        </Col>
                        <Col >  
                        <Button variant="outline-light">JOIN</Button>
                        </Col>
                    </Row>             
               </Navbar.Collapse>
            </Container>
         </Navbar>


         <Container id="home-content" className="home-backgound">
            <Row>
                <Col className="home-test">
   
          
                </Col>

                <Col>
                <Row>
                    <Col>
                    <h1 className="font-color">Join the fun.</h1>
                    </Col>
                </Row>

                

                <Row>
                    <Col>
                    <Button variant="info" id="btn-join" classNome="font-color"size="lg">Join now </Button>
                    
                    </Col>
                  </Row>
                 </Col>
                </Row>
         </Container>





         </>
    );  
}


export default Home;