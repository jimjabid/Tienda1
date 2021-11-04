import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VistaProductoHome from "./vistas/VistaProductoHome";
import VistaProducto from "./vistas/VistaProducto";
import VistaLogin from "./vistas/VistaLogin";
import VistaQuienesSomos from "./vistas/VistaQuienesSomos";
import VistaRegistro from "./vistas/VistaRegistro";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/registro" component={VistaRegistro} />
          <Route path="/quienesSomos" component={VistaQuienesSomos} />
          <Route path="/login" component={VistaLogin} />
          <Route path="/producto/:id" component={VistaProducto} />
          <Route path="/" component={VistaProductoHome} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
