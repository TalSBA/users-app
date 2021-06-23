import React from 'react';
import UsersForm from '../../components/UsersForm/UsersForm';
import UsersTable from '../../components/UsersTable/UsersTable';
import './Home.css';

function Home(props) {


    return (
        <div className="p-home">
            <UsersTable />
            <UsersForm />
        </div>
    );
}

export default Home;