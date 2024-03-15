import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  const mentor = localStorage.getItem("mentor");
  const navigate = useNavigate();

  const handleMentorChange = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {mentor ? (
            <Nav>
              <LinkContainer to="/student-select" className="navBorder pr-3">
                <Nav.Link>Add Student</Nav.Link>
              </LinkContainer>
              <LinkContainer
                to="/student-view"
                className="navBorder pl-3 pr-3"
              >
                <Nav.Link>View Student</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title="Mentor" // Static title if mentor is present
                id="basic-nav-dropdown"
                className="navBorder pl-3"
              >
                <NavDropdown.Item onClick={() => handleMentorChange()}>
                  End Session
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Select Mentor</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
