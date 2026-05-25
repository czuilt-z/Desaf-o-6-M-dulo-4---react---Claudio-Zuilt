import napolitana from "../assets/img/napolitana.jpg";
import espanola from "../assets/img/espanola.jpg";
import pepperoni from "../assets/img/pepperoni.jpg";
import cuatroEstaciones from "../assets/img/cuatro-estaciones.jpg";
import bacon from "../assets/img/bacon.jpg";
import polloPicante from "../assets/img/pollo-picante.jpg";

import { useContext } from "react";
import { useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { PizzaContext } from "../context/PizzaContext";

function Pizza() {

  const { id } = useParams();

  const { pizzas } = useContext(PizzaContext);

  const pizza = pizzas.find(
    (pizza) => pizza.id === id
  );

  const pizzaImages = {
    p001: napolitana,
    p002: espanola,
    p003: pepperoni,
    p004: cuatroEstaciones,
    p005: bacon,
    p006: polloPicante,
  };

  if (!pizza) {

    return (
      <>
        <h1>Cargando pizza...</h1>
      </>
    );
  }

  return (

    <div className="d-flex justify-content-center">

      <Card
        className="pizza-card"
        style={{ width: "25rem" }}
      >

        <Card.Img
          variant="top"
          src={pizzaImages[pizza.id]}
        />

        <Card.Body>

          <Card.Title>
            Pizza {pizza.name}
          </Card.Title>

          <hr />

          <Card.Text>
            {pizza.desc}
          </Card.Text>

          <p className="text-center">
            <strong>
              Ingredientes:
            </strong>
          </p>

          <ul className="ingredients">

            {pizza.ingredients.map(
              (ingredient,index)=>(

                <li key={index}>
                  🍕 {ingredient}
                </li>

              )
            )}

          </ul>

          <hr />

          <p className="price">

            Precio:
            ${pizza.price.toLocaleString("es-CL")}

          </p>

          <div className="buttons">

            <Button
              variant="outline-dark"
              size="sm"
            >
              Ver Más 👀
            </Button>

            <Button
              variant="dark"
              size="sm"
            >
              Agregar 🛒
            </Button>

          </div>

        </Card.Body>

      </Card>

    </div>
  );
}

export default Pizza;