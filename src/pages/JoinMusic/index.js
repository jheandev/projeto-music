
import React from "react";


import { Navbar, Container, Button, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Footer from "../../components/Footer";

import NavbarMusic from "../../components/NavbarMusic";
import "./style.css"


function JoinMusic() {

    return (

        <>
            <NavbarMusic />
            <Container id="home-content"  >
                <Row>

                    <Row>
                        <Col>
                            <h1 id="texto">Join the fun.</h1>
                        </Col>
                    </Row>

                    <fieldset class="formulario">
                        <Form className="form">


                            < label Form="name">Nome</label>
                            <input type="text " id="name" />

                            <label Form="email">E-mail</label>
                            <input type="email" id="emmail" />

                            <label Form="Password">Password</label>
                            <input type="password=" id="Passaword" />

                        </Form>
                     


                        <form>

                            <input class="btn_submit" type="submit " value="Join now"></input>

                        </form>

                    </fieldset>
                  
                </Row>
              
            </Container>
            <Footer />

        </>




    );



};



export default JoinMusic;





