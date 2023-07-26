import './_CartItem.scss';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    const subtotal = price * quantity;

    const handleRemoveItem = () => {
        removeItem(id);
    };

    return (
        <div className="CartItem">
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${subtotal}</p>
            <p onClick={handleRemoveItem}>
                <FontAwesomeIcon className='Remover' icon={faTrash} />
            </p>
        </div>
    );
};

export default CartItem;

