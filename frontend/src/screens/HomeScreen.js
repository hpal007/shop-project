import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Table, Button, Image, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const HomeScreen = () => {
  const disptach = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    disptach(listProducts());
  }, [disptach]);

  const addToCartHandler = (id) => {
    console.log("Add to cart", id);
    disptach(addToCart(id, 1));
  };

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Latest Product</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Product Price</th>
                <th>Remaining</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>
                    <Image className="images" src={product.image} fluid />{" "}
                  </td>
                  <td>₹{product.price}</td>
                  <td>{product.countInStock}</td>
                  <td>
                    {cartItems.filter(
                      (val) => val.product === product._id
                    )[0] !== undefined ? (
                      <Row>
                        <Col sm={1}>
                          <i className="fas fa-check " />
                        </Col>
                        <Col sm={9}>
                          <p className="font-weight-normal">
                            Item has been added
                          </p>
                        </Col>
                      </Row>
                    ) : (
                      <Button
                        disabled={product.countInStock === 0}
                        variant="primary"
                        onClick={() => addToCartHandler(product._id)}
                      >
                        Add To Cart
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
