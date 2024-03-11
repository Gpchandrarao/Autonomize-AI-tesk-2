import React, { useEffect, useState } from "react";
import "../styles/Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const apiUrl = "https://fakestoreapi.com/products";

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    setProductsList(data);
  };

  return (
    <div className="productts-container">
      <Link to="/" className="link">
        <h1 className="product-heading">All Products</h1>
      </Link>
      <ul className="ul-container">
        {productsList.map((eachProduct, index) => (
          <li key={index} className="li-container">
            <Link to={`/products/${eachProduct.id}`} className="link">
              <h1>{eachProduct.title}</h1>
              <img className="main-img" src={eachProduct.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
