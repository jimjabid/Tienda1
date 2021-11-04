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

const VistaRegistro = () => {
  const ControladorSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ContenedorFormulario>
      <h1> Registro</h1>
      <Form onSubmit={ControladorSubmit}>
        <FormGroup controlId="nombre">
          <FormLabel>Nombre</FormLabel>
          <FormControl
            type="nombre"
            placeholder="Ingrese su nombre"
          ></FormControl>
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            placeholder="Ingrese su email"
          ></FormControl>
        </FormGroup>
        <FormGroup controlId="contrasena">
          <FormLabel> Contrasena</FormLabel>
          <FormControl
            type="contrasena"
            placeholder="Ingrese su contrasena"
          ></FormControl>
        </FormGroup>
        <FormGroup controlId="ConfirmarContrasena">
          <FormLabel> Confirmar Contraseña</FormLabel>
          <FormControl
            type="contrasena"
            placeholder="Confirmar contrasena"
          ></FormControl>
        </FormGroup>

        <Button className="mt-3" type="submit" variant="primary">
          Registrate
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          ¿Ya tienes Cuenta? <Link to="/login">Inicia Sesion</Link>
        </Col>
      </Row>
    </ContenedorFormulario>
  );
};

export default VistaRegistro;
