import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cart,
    aumentarCantidad,
    disminuirCantidad,
    total
  } = useContext(CartContext);

  return (
    <div className="Cart-container">

      <h2>Carrito de compras</h2>

      {cart.map((pizza) => (

        <div key={pizza.id} className="cart-item">
          <div className="cart-info">
            <img
              src={pizza.img}
              alt={pizza.name}
            />
            <div className="cart-text">
              <h4>{pizza.name}</h4>
              <p>
                ${pizza.price.toLocaleString("es-CL")}
              </p>
            </div>
          </div>

          <div className="cart-controls">
            <button
              onClick={() =>
                disminuirCantidad(pizza.id)
              }
            >
              -
            </button>

            <span>
              {pizza.count}
            </span>

            <button
              onClick={() =>
                aumentarCantidad(pizza.id)
              }
            >
              +
            </button>

          </div>
        </div>
      ))}

      <hr />

      <h3>
        Total:
        ${total.toLocaleString("es-CL")}
      </h3>
      <button>Pagar</button>
    </div>
  );
}

export default Cart;