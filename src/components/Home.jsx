import { useState, useMemo } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [productos, setProductos] = useState(pizzas);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExists = cart.findIndex((pizza) => pizza.id === item.id);
    if (itemExists >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function RestToCart(item) {
    const itemExists = cart.findIndex((pizza) => pizza.id === item.id);

    if (itemExists >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity--;
      setCart(updatedCart);
      if (item.quantity <= 0) {
        return (item.quantity = 0);
      }
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );
  return (
    <>
      <Header />
      <div className="d-flex flex-column">
        <div className="align-self-center">
          {productos.map((pizzas) => (
            <CardPizza
              key={pizzas.id}
              pizzas={pizzas}
              addToCart={addToCart}
              RestToCart={RestToCart}
              cart={cart}
            />
          ))}
        </div>
      </div>
      <div className="m-5">
        <div className="d-grid gap-2">
          <Button variant="outline-danger" size="lg">
            <p>Total a Pagar ${cartTotal}</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
