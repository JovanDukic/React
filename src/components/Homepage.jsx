import React from "react";
import Product from "./Product";

function Homepage({ products, addToCart, removeFromCart }) {
  return (
    <div className="homepage">
      {products.map((product) => {
        return (
          <Product
            product={product}
            key={product.id}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            flag={1}
          />
        );
      })}
    </div>
  );
}

export default Homepage;
