import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getUsers } from '../../services/services';

function UsersTable(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(getUsers());
    }, [])
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Date of birth</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
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