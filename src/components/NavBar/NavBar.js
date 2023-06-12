
import CartWidget from "../CartWidget/Cartwidget";

const NavBar = () => {
    return (
        <nav>
            <h3>HyperTech Hardware</h3>
            <div>
                <button>Todos los productos</button>
                <button>Auriculares</button>
                <button>Sillas Gamer</button>
                <button>Micrófonos</button>
                <button>Mouses y Teclados</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;