
import React from 'react'
import { Container, Button, Row, Col} from "react-bootstrap";
import NavbarMusic from "../../components/NavbarMusic"
import Footer from "../../components/Footer";



import group from "../../assets/img/group.svg";
import Group6 from "../../assets/img/Group 6.svg";
import Group5 from "../../assets/img/Group 5.svg";
import Group4 from "../../assets/img/Group 4.svg";


import "./style.css"


function DiscoverMusic(){

   return(
      <>
     
      <NavbarMusic />

          <Container id="home-content" fluid className="discover-backgound">
            <Row>
              <Col>



                <Row>
                    <Col>
                    <h1 className="font-color2">Discover new music</h1>
                    </Col>
                </Row>    


                    <Row className="grupo3" > 
                    <Col > <img src={Group6} alt="imagens" width="100%"  /> </Col>
                    <Col ><img src={Group5} alt="imagens" width="100%" /></Col>
                    <Col > <img src={Group4} alt="imagens" width="85%"  /></Col>
                   </Row>

                      
                
                    <Row>
                    <Col id='font-color3'>
                    <h1 >Best Music you will ever want to listen to,is here</h1>
                    </Col>

                    </Row>

                

                <Row>

                 <Col className='font-imagem'>
                    <img src={group} alt="imagens" width="100%" />
                </Col>

                  </Row>


                 </Col>
                </Row>
               
         </Container>
         <Footer />

         </>
          

     );


};

export default DiscoverMusic;