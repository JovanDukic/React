import React from "react";
import images from "./Images";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

function Product({ product, addToCart, removeFromCart, flag }) {
  return (
    <div className={flag === 1 ? "product_1" : "product_2"}>
      <img src={images[product.imgIndex]} alt="Product-1" className="image" />
      <h3>{product.title}</h3>
      <div className="desc">{product.desc}</div>
      <div className="money">
        <h3 className="price">Price: {product.price}$</h3>
        <h3 className="price">Total: {product.total}$</h3>
      </div>

      <div className="bottom">
        {flag === 1 ? (
          <>
            <button className="button" onClick={() => addToCart(product.id)}>
              <BsPlusLg />
            </button>
            <button
              className="button"
              onClick={() => removeFromCart(product.id)}
            >
              <BsDashLg />
            </button>
          </>
        ) : (
          <></>
        )}

        <h4 className="amount">Amount: {product.amount}</h4>
      </div>
    </div>
  );
}

export default Product;
