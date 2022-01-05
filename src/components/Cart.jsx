import React from "react";
import Product from "./Product";

function Cart({ boughtProducts }) {
  console.log(boughtProducts);
  return (
    <div className="cart">
      <form>
        <div className="form-div">
          <label htmlFor="firstname">Firstname:</label>
          <input
            type="text"
            placeholder="Enter firstname"
            name="firstname"
            required
          ></input>

          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            placeholder="Enter lastname"
            name="lastname"
            required
          ></input>

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            required
          ></input>
        </div>
      </form>

      <div className="boughtProducts">
        {boughtProducts.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
