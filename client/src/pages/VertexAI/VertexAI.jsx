import React, { useEffect } from 'react';

import LoginPage from './LoginPage/LoginPage';
import Form from './Form/Form';
import Table from './Table/Table';
import fetchData from '../../utils/ApiUtils';

const VertexAI = () => {
    return (
        <>
            {/* <LoginPage /> */}
            <div style={{ display: "flex", gap: "20px", height: "100%", margin: "20px" }}>
                <Form />
                <Table />
            </div>
        </>
    );
}

export default VertexAI;