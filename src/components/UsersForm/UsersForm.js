import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function UsersForm(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    const intialValues = {
        fullName: "",
        dateOfBirth: "",
        id: "",
    };

    return (
        <div className="p-home">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter full name" name="fullName"
                        {...register('fullName', {
                            validate: {
                                lettersOnly: value => {
                                    return /^[a-zA-Z]+$/.test(value);
                                },
                                noMoreThen20Letters: value => {
                                    console.log(value.length);
                                    return value.length <= 20;
                                }
                            }
                        })}
                    />
                </Form.Group>
                {/* {errors.fullName && errors.fullName.type === "lettersOnly" && (
                    <p>Please type only letters</p>
                )}
                  {errors.fullName && errors.fullName.type === "noMoreThen20Letters" && (
                    <p>Please type name less then 20 letters</p>
                )} */}

                <Form.Group>
                    <Form.Label>Select birth date</Form.Label>
                    <Form.Control required type="date" placeholder="Date of birth" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control required type="text" placeholder="Enter your ID number" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default UsersForm;