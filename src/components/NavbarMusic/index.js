import React from "react";


import {Navbar, Container, Button, Row, Col} from "react-bootstrap";
import logo from "../../assets/img/logo.svg";

function NavbarMusic() {
    return (
    
         <Navbar id="navbar">
            <Container>
                <Navbar.Brand>
                    <img src={logo} width="70" // height="75" 
                    alt="logo do site soud ware"/>
                    <strong id="nav-title" >Sound ware </strong>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Row>
                        <Col >  
                        <Button href="about" variant="outline-light">Discover</Button>
                        </Col>
                        <Col >  
                        <Button href="about" variant="outline-light">JOIN</Button>
                        </Col>
                    </Row>             
               </Navbar.Collapse>
            </Container>
         </Navbar>

);

 };
         
   export default NavbarMusic ; 










        {/*  <Navbar id="navbar">
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


export default Home; */}