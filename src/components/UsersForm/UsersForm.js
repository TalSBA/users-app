import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function UsersForm(props) {
    const [fullName, setFullName] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            axios(
                {
                    method: 'post',
                    url: 'https://localhost:44390/weatherforecast/SaveUsers',
                    data: {
                        FullName: fullName,
                        DateOfBirth: date,
                        ID: id
                    }
                }
            ).then(response => console.log(response));
        }

        setValidated(true);
    };

    return (
        <div className="p-home">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter full name"
                        name="fullName" value={fullName} onChange={e => setFullName(e.target.value)}
                        isInvalid={fullName.length > 20}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter full name
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select birth date</Form.Label>
                    <Form.Control required type="date" placeholder="Date of birth"
                        value={date} onChange={e => setDate(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        Please select birth date
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control required type="text" placeholder="Enter your ID number"
                        value={id} onChange={e => setId(e.target.value)}
                        isInvalid={id.length !== 9 && !/^\d+$/.test(id)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please type valid ID.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default UsersForm;