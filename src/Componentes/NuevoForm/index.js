import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React , {useState} from 'react';
import {db} from '../../firebase'


const GridComplexForm = (prop) => {

  const initialStateValue = {
    nombre: "",
    direccion: "",
    especialidad: "",
    url_foto: "",
    url_mapa: ""
  };

  const [values, setValues] = useState(initialStateValue);

  const handleSubmit = e =>{
    e.preventDefault();
    prop.addOrEditCartaR(values);
  };

  const handleImputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };
  
  return (
    <Form className='Restaurante' onSubmit={handleSubmit}>

      <legend className='tittle-form'> | Añadir Nuevo Restaurante  |  <box-icon type='solid' name='edit'></box-icon></legend>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre Restaurante</Form.Label>
          <Form.Control type="text" 
          placeholder="Ingrese el nombre" 
          name="nombre"
          onChange={handleImputChange}/>
        </Form.Group>
      </Row>
      
      <Form.Group className="mb-3" controlId="formGridDireccion">
        <Form.Label>Dirección del restaurante</Form.Label>
        <Form.Control 
        placeholder="Cll 73 # 84-24" 
        name="direccion"
        onChange={handleImputChange}/>
      </Form.Group>

        <Form.Group as={Col} controlId="formGridEspecialidad">
          <Form.Label>Especialidad</Form.Label>
        <Form.Control type="text" 
         placeholder="Comida tradicional, de otros países, estilos"
         name="especialidad"
         onChange={handleImputChange}/>
        </Form.Group>
  
      <Form.Group className="mb-3" controlId="formGridURLFoto">
        <Form.Label>Url de la foto del restaurante</Form.Label>
        <Form.Control placeholder="https o www" 
        name="url_foto" 
        onChange={handleImputChange}/>
      </Form.Group>

       <Form.Group className="mb-3" controlId="formGridURLMapa">
        <Form.Label>Url del lugar en google Maps</Form.Label>
        <Form.Control placeholder="maps/.." 
        name="url_mapa" 
        onChange={handleImputChange}/>
      </Form.Group>

      
      <Button classname="Form-btn" variant="primary" type="submit">
        Subir
      </Button>
    </Form>
  );
}

export default GridComplexForm;