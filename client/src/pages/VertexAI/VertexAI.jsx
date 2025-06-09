import React, { useEffect } from 'react';

import LoginPage from './LoginPage/LoginPage';
import Form from './Form/Form';
import Table from './Table/Table';
import fetchData from '../../utils/ApiUtils';

import './VertexAI.css'

const VertexAI = () => {
    return (
        <>
            {/* <LoginPage /> */}
            <div className="VA-parent-container">
                <Form />
                <Table />
            </div>
        </>
    )
};

export default VertexAI;