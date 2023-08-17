import React, { useState } from "react";
import './_CheckoutForm.scss';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [formError, setFormError] = useState(false);

    const namePattern = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    const phonePattern = /^\d+$/;

    const handleConfirm = (event) => {
        event.preventDefault();

        if (!name || !phone || !email) {
            setFormError(true);
            return;
        }

        if (!name.match(namePattern)) {
            setFormError(true);
            return;
        }

        if (!phone.match(phonePattern)) {
            setFormError(true);
            return;
        }

        const userData = {
            name, phone, email
        };
        onConfirm(userData);
        setFormError(false);
    };

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
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                {formError && <p className="error">Por favor completa todos los campos correctamente</p>}
                <div className="form-btn-container">
                    <button className="form-btn" type='submit'>Crear Orden</button>
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;
