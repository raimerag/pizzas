import { useMemo } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const CardPizza = ({ pizzas, addToCart, RestToCart, cart }) => {
  const { tittle, ingredients, price, img, id, quantity } = pizzas;
  const novisible = useMemo(
    () => quantity === 0 || quantity === undefined,
    [cart]
  );
  return (
    <>
      <div className="d-flex mt-2" style={{ height: "20rem" }}>
        <div className="d-flex align-self-center">
          <img
            style={{ width: "15rem", height: "12rem" }}
            variant="top"
            src={img}
          />
        </div>
        <div className="d-flex align-self-center" style={{ width: "25rem" }}>
          <ul>
            <h2 className="text-center">{tittle}</h2>
            <h3 className="text-center">Ingredientes:</h3>
            <p>
              {ingredients.map((e, i) => (
                <li key={i}>🍕{e}</li>
              ))}
            </p>
            <p>Precio: {price}</p>
          </ul>
        </div>
        <div className="d-flex align-self-center ms-3">
          {novisible ? (
            <Button
              style={{ width: "6rem" }}
              className="ms-3"
              variant="dark"
              type="button"
              onClick={() => addToCart(pizzas)}
            >
              <p>AGREGAR AL CARRO</p>
            </Button>
          ) : (
            <>
              <Button
                style={{ width: "6rem" }}
                className="ms-3 "
                variant="dark"
                type="button"
                onClick={() => RestToCart(pizzas)}
              >
                <p>-</p>
              </Button>
              {quantity}
              <Button
                style={{ width: "6rem" }}
                className="ms-3"
                variant="dark"
                type="button"
                onClick={() => addToCart(pizzas)}
              >
                <p>+</p>
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardPizza;
