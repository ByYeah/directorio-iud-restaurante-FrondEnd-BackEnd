import 'boxicons';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css'
import Logo from './assets/img/logo.png';
import { Container, Navbar, Row, Col, Nav } from "react-bootstrap";
import { Card } from 'react-bootstrap';
import React from 'react'
import GridComplexForm from './Componentes/NuevoForm';


function App() {

  return (  
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" width="90px" height="90px"  />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">
                Inicio  |    <box-icon name='home' type='solid' color='rgba(197,25,25,0.98)' ></box-icon>
            </Nav.Link>
            <Nav.Link href="">
                Busqueda  |    <box-icon name='search-alt' color='rgba(25,159,197,0.98)' ></box-icon>
            </Nav.Link>
            <Nav.Link href="">
                Nuevo  |   <box-icon name='edit' type='solid' color='rgba(221,226,13,0.98)' ></box-icon>
            </Nav.Link>
            <Nav.Link href="#contacto" >
                Contacto  |   <box-icon name='contact' type='solid' color='rgba(48,212,25,0.98)' ></box-icon>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container style={{witdh: "1800px"}}>
      <Row className="justify-content-md-center">
        <Col md={5} className="tittle">| Destacados <box-icon size='sm' name='star' type='solid' color='#edf305' ></box-icon>|</Col>
      </Row>
      <Row sm={4} className="g-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </>
  );
}

export default App;
