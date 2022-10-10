
import React from "react";
import { Container, Button, Row, Col} from "react-bootstrap";
import NavbarMusic from "../../components/NavbarMusic";




import person from "../../assets/img/person.svg";
import "./style.css"


function Home() {
     return(
   <>

 <NavbarMusic />

         <Container id="home-content" fluid className="home-backgound">
            <Row>
                <Col >
                <img src={person} alt="Pessoa ouvindo musica" width="80%" />
             
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
                    <Button  variant="info" id="btn-join" classNome="font-color"size="lg">Join now </Button>
                    </Col>
                  </Row>
                  
                 </Col>
                </Row>
         </Container>
        
   </>

     );

}

export default Home;









