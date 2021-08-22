// import React, { useEffect, useState } from "react";
// import { Row, Col, Image, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import axios from "axios";
// // import products from "../products";

// const ProductScreen = ({ match }) => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     async function fetchProduct() {
//       const { data } = await axios.get(`/api/products/${match.params.id}`);

//       setProduct(data);
//     }
//     fetchProduct();
//   }, []);

//   // const product = products.find((p) => p._id === match.params.id);

//   return (
//     <div>
//       <Link to="/" className="btn btn-light my-3">
//         Go Back
//       </Link>
//       <Row>
//         <Col md={6}>
//           <Image src={product.image} alt="..." fluid />
//         </Col>
//         <Col md={6}>
//           <Row>
//             <h4>{product.name}</h4>
//             <p>{product.description}</p>
//             <Button disabled={product.countInStock === 0} variant="primary">
//               Add To Cart
//             </Button>
//           </Row>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ProductScreen;
