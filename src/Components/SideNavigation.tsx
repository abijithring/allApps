import React, {ReactNode} from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Add a type for props that includes children
type SideNavigationProps = {
  children: ReactNode;
};
const SideNavigation: React.FC<SideNavigationProps> = ({ children }: SideNavigationProps) => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col xs={3} md={2} className="bg-dark text-white vh-100 p-3">
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white">Bootstrap</Nav.Link>
            <Nav.Link href="#" className="text-white">UseStateProg</Nav.Link>
            <Nav.Link href="#" className="text-white">PropPrograms</Nav.Link>
            <Nav.Link href="#" className="text-white">Operators</Nav.Link>
          </Nav>
        </Col>

        {/* Content Section */}
        <Col xs={9} md={10} className="p-4">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default SideNavigation;
// This code defines a functional component called SideNavigation that renders a sidebar navigation menu.
