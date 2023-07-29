import React, { useState, useEffect } from 'react';
import { Form} from 'react-bootstrap';
import './_SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, onSearch]);

  return (
    <div className="search-bar">
      <Form>
        <Form.Control
          type="search"
          placeholder="Buscar..."
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default SearchBar;







