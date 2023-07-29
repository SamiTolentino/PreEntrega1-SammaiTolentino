import { useState } from "react";
import './_CheckoutForm.scss';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleConfirm}>
                <label className="form-label">
                    Nombre
                    <input
                        className="form-input"
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className="form-label">
                    Telefono
                    <input
                        className="form-input"
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className="form-label">
                    Email
                    <input
                        className="form-input"
                        type='text'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div className="form-btn-container">
                    <button className="form-btn" type='submit'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;