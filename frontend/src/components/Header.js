import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    console.log(userInfo);
    if (userInfo === null) {
      history.push("/login/");
    }
  }, [userInfo, history]);
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle />
          <Nav className="me-auto">
            {userInfo ? (
              <LinkContainer to="/cart">
                <Nav.Link href="">
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
            ) : (
              <LinkContainer to="/login/">
                <Nav.Link href="">
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
            )}

            {userInfo ? (
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user" onClick={logoutHandler}>
                    {" "}
                    Logout
                  </i>
                </Nav.Link>
              </LinkContainer>
            ) : (
              <LinkContainer to="/login/">
                <Nav.Link>
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{userInfo?.username}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
