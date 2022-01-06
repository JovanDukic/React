import "./App.css";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [productNumber, setproductNumber] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "ROG Strix Scar 17 (2022) G733",
      desc: "Power through any game or project with up to an Intel® Core™ i9-12900H CPU, with a hybrid architecture built from the ground up for Windows 11 Pro. With up to 6 performance cores and 8 efficiency cores, AAA gaming and streaming is effortless.",
      price: 2000,
      total: 0,
      amount: 0,
      max: 5,
      imgIndex: 0,
    },
    {
      id: 2,
      title: "ROG Zephyrus M16 (2022) GU603",
      desc: "Near-rimless at a 94% screen-to-body ratio, the up to QHD 165Hz/3ms display is immersive and deep. High-FPS gameplay is richer with a balance of high-resolution detail and a 165Hz refresh rate. See full-spectrum color accuracy thanks to Pantone® validation and 100% of the DCI-P3 color space, ideal for gamers who also create. A tall 16:10 aspect ratio expands views, making it easy to keep critical commands close.​",
      amount: 0,
      price: 2750,
      total: 0,
      max: 7,
      imgIndex: 1,
    },
    {
      id: 3,
      title: "ROG Flow Z13 (2022) GZ301",
      desc: "Modern gaming laptops use powerful, dedicated graphics chips for high performance—but most route those frames through the CPU's integrated graphics before reaching the display. This offers better battery life, but prevents your GPU from giving its absolute best performance. So we're bringing a MUX switch to all 2022 ROG laptops. For competitive games, you can switch to a direct GPU mode that reduces latency and boosts performance by an average of 9%",
      amount: 0,
      price: 3820,
      total: 0,
      max: 9,
      imgIndex: 2,
    },
  ]);

  function refreshCart() {
    setCartProducts(products.filter((product) => product.amount > 0));
    console.log(cartProducts);
  }

  function addToCart(productID) {
    products.forEach((product) => {
      if (product.id === productID) {
        if (product.amount < product.max) {
          product.amount++;
          product.total += product.price;
          setproductNumber(productNumber + 1);
          refreshCart();
        } else {
          alert(
            "Max avaliable number of product " +
              product.title +
              " is: " +
              product.max
          );
        }
      }
    });
  }

  function removeFromCart(productID) {
    products.forEach((product) => {
      if (product.id === productID) {
        if (product.amount > 0) {
          product.amount--;
          product.total -= product.price;
          setproductNumber(productNumber - 1);
          refreshCart();
        }
      }
    });
  }

  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              products={products}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart boughtProducts={cartProducts} productNumber={productNumber} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
