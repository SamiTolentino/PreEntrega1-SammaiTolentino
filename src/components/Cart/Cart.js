import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./_Cart.scss";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="Cart__Vacio">
        <h1>Carrito Vacio</h1>
        <img
          src="https://pbs.twimg.com/media/FJK-epaXEAYaQFv?format=jpg&name=small"
          alt="Compra invisible"
          className="Cart__Invisible"
        />
        <p>Que no cunda el pánico...</p>
        <p>Talvez las compras sean invisibles!</p>
        <Link to="/">Volver A Productos</Link>
      </div>
    );
  }

  return (
    <div className="Cart">
      <h1>Carrito</h1>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h2 className="Cart__Total">Total: ${total}</h2>
      <button onClick={() => clearCart()} className="Cart__Button">
        Vaciar Carrito
      </button>
      <button className="Cart__Button">
        <Link to="/checkout" className="Cart__Comprar">
          Comprar
        </Link>
      </button>
    </div>
  );
};

export default Cart;
