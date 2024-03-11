import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductsDetails.css";

const ProductsDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  console.log(productDetails);

  const params = useParams();
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const { id } = params;
    const apiUrl = `https://fakestoreapi.com/products/${id}`;

    const res = await fetch(apiUrl);
    const data = await res.json();
    setProductDetails(data);
  };

  return (
    <div className="product-details-container">
      <h1 className="details-heading">{productDetails.title}</h1>

      <div className="img-and-price-container">
        <img src={productDetails.image} className="img" />
        <div className="des-pric-cate-container">
          <p className="des">
            <span className="headline">Description:</span>{" "}
            {productDetails.description}
          </p>
          <p className="des">
            <span className="headline">Price:</span>
            {productDetails.price}
          </p>
          <p className="des">
            <span className="headline">Category:</span>
            {productDetails.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
