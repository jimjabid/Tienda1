import React from "react";
import { Row, Col } from "react-bootstrap";
import Producto from "../components/Producto";
import productos from "../productos";

const VistaProductoHome = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {productos.map((producto) => (
          <Col key={producto._id} sm={12} md={6} lg={4} xl={3}>
            <Producto producto={producto} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default VistaProductoHome;
