import { Container } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import AdminHomeScreen from "./screens/AdminHomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { useSelector } from "react-redux";
import ProductEditScreen from "./screens/ProductEditScreen";
import "./app.css";
function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const isAdmin = userInfo?.isAdmin;
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Route
              path="/"
              component={isAdmin ? AdminHomeScreen : HomeScreen}
              exact
            />
            <Route path="/cart/" component={CartScreen} exact />
            <Route path="/login/" component={LoginScreen} exact />
            <Route path="/register/" component={RegisterScreen} exact />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
