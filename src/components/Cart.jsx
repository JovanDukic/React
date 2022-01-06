import React from "react";
import Product from "./Product";
import $ from "jquery";
import jquery from "jquery";

const Cart = ({ boughtProducts, productNumber }) => {
  console.log(boughtProducts);
  if (productNumber === 0) {
    return (
      <div className="emptyDiv">
        <h1 className="emptyTitle">The cart is empty!</h1>
      </div>
    );
  } else {
    var totalPrice = 0;
    for (var i = 0; i < boughtProducts.length; i++) {
      totalPrice = totalPrice + boughtProducts[i].total;
    }

    jquery(function () {
      var pattern = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      $("#form").on("submit", function (e) {
        e.preventDefault();
        if (
          $("#firstname").val() &&
          $("#lastname").val() &&
          $("#email").val() &&
          $("#address").val()
        ) {
          if (!pattern.test($("#email").val())) {
            alert("Incorrect email address!");
            return;
          }
          alert(
            "<Shipping details>" +
              "\nFirstname: " +
              $("#firstname").val() +
              "\nLastname: " +
              $("#lastname").val() +
              "\nEmail: " +
              $("#email").val() +
              "\nAddress: " +
              $("#address").val() +
              "\nTotal price: " +
              totalPrice +
              "$" +
              "\nTotal number of products: " +
              productNumber
          );
        } else {
          alert("All fields are required!");
        }
      });
    });

    return (
      <div className="cart">
        <div>
          <form action="." id="form">
            <h1 className="formTitle">Submission form</h1>
            <div className="form-div">
              <label htmlFor="firstname">Firstname:</label>
              <input
                type="text"
                placeholder="Enter firstname"
                name="firstname"
                id="firstname"
              ></input>

              <label htmlFor="lastname">Lastname:</label>
              <input
                type="text"
                placeholder="Enter lastname"
                name="lastname"
                id="lastname"
              ></input>

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                id="email"
              ></input>

              <label htmlFor="address">Address:</label>
              <input
                type="text"
                placeholder="Enter address"
                name="address"
                id="address"
              ></input>

              <label htmlFor="totalPriceLabel">Total price:</label>
              <label name="totalPriceLabel">{totalPrice}$</label>

              <label htmlFor="totalProductsLabel">
                Total number of products:
              </label>
              <label name="totalProductsLabel">{productNumber} products</label>

              <input type="submit" className="submitButton" value="SUBMIT" />
            </div>
          </form>
        </div>

        <div className="boughtProducts">
          <h1 className="productsTitle">Bought Prodcuts</h1>
          {boughtProducts.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    );
  }
};

export default Cart;
