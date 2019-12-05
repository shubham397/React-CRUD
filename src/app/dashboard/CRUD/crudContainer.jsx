import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from './components/table';

function crudContainer() {

    const initFormData = {
        name:null,
        email:null,
        dob:null
    }

    let tableRowId=null;

    const [formData , setFormData] = useState([initFormData]);

    function handleSubmit(e){
        e.preventDefault();
        const form = document.getElementById("form");
        const name = form.elements[0].value;
        const email = form.elements[1].value;
        const dob = form.elements[2].value;
        if(tableRowId == null){    
            const values = [...formData];
            values.push({name:name, email:email, dob:dob})
            setFormData(values);
        }
        else{
            formData[tableRowId].name = name;
            formData[tableRowId].email = email;
            formData[tableRowId].dob = dob;
            const values = [...formData];
            setFormData(values);
        }        
    }

    function deleteTableRow(id){
        const val = [...formData];
        val.splice(id, 1);
        setFormData(val);
    }

    function editTableRow(id){
        tableRowId = id;
        const form = document.getElementById("form");
        form.elements[0].value = formData[id].name;
        form.elements[1].value = formData[id].email;
        form.elements[2].value = formData[id].dob;
    }

    return (
      <div>
        <Form id="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Choose Date of Birth" />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </Form>
        
        <Table data={formData} delete={deleteTableRow} edit={editTableRow} />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </div>
    );
};

export default crudContainer;