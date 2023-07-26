import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Carrito Vacio</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )

    }

    return (
        <div>
            <h1>Carrito</h1>
            {cart.map(p => <CartItem key={p.id}{...p}/>)}
            <h2>Total: ${total}</h2>
            <button onClick={() => clearCart()} className="Button">Vaciar Carrito</button>
            <Link to='/checkout' className="Option">checkout</Link>
        </div>
    )

}

export default Cart;