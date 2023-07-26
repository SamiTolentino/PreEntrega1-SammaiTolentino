import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <Button variant="outline-success" type="submit">Buscar</Button>
        </Form>
    );
};

export default SearchBar;


