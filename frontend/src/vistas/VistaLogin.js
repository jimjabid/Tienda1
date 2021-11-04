import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Button,
  Row,
  Col,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import ContenedorFormulario from "../components/ContenedorFormulario";

const VistaLogin = () => {
  const ControladorSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ContenedorFormulario>
      <h1> Iniciar Sesion</h1>
      <Form onSubmit={ControladorSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            placeholder="Ingrese Su email"
          ></FormControl>
        </FormGroup>
        <FormGroup controlId="contrasena">
          <FormLabel> Contrasena</FormLabel>
          <FormControl
            type="contrasena"
            placeholder="Ingrese Su contrasena"
          ></FormControl>
        </FormGroup>

        <Button className="mt-3" type="submit" variant="primary">
          Iniciar Sesion
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          ¿No tienes Cuenta? <Link to="/registro">Registrate</Link>
        </Col>
      </Row>
    </ContenedorFormulario>
  );
};

export default VistaLogin;
