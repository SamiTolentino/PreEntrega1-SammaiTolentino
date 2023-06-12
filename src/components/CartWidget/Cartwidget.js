import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div className='App' style={{ fontSize: "1.2em", color: "blue" }}>
            <FontAwesomeIcon icon={faCartShopping} />
            0
        </div>
    )
}

export default CartWidget;