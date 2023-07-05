import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './_CartWidget.scss'

const CartWidget = () => {
    return (
        <div className='carrito'>
            <FontAwesomeIcon className='icono-carrito' icon={faCartShopping} />
            <span className='numerito'>0</span>
        </div>
    )
}

export default CartWidget;