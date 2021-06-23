import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "./UsersTable.css";

function UsersTable(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44390/weatherforecast/GetUsers').then(response => setUsers(response.data)
        );
    }, [])
    return (
        <Table className="c-users-table" striped bordered hover>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Date of birth</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(user => {
                    return <tr key={user.ID}>
                        <td>{user.FullName}</td>
                        <td>{user.DateOfBidrh}</td>
                        <td>{user.ID}</td>
                    </tr>
                })}
            </tbody>
        </Table>
    );
}

export default UsersTable;