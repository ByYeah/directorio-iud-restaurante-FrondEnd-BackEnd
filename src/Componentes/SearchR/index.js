import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react';

function BusquedaBar() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><box-icon name='search-alt' color='rgba(25,159,197,0.98)' ></box-icon></InputGroup.Text>
        <Form.Control
          placeholder="Mexicana, Argentina, Tradicioal"
          aria-label="Busca aquí!"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}

export default BusquedaBar;
