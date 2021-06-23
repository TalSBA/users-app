import React from 'react';
import UsersForm from '../../components/UsersForm/UsersForm';
import UsersTable from '../../components/UsersTable/UsersTable';
import './Home.css';

function Home(props) {


    return (
        <div className="p-home">
            <h1>Users</h1>
            <UsersTable />
            <UsersForm />
        </div>
    );
}

export default Home;