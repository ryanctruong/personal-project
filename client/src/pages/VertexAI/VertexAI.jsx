import React from 'react';

import LoginPage from './LoginPage/LoginPage';
import useStore from '../../utils/VariableStore';
import Form from './Form/Form';
import Table from './Table/Table';

import './VertexAI.css'

const VertexAI = () => {
    const isLoggedIn = useStore((state) => state.isLoggedIn);
    return (
        <>
            {isLoggedIn ? (
                <div className="VA-parent-container">
                    <Form />
                    <Table />
                </div>
            ) : (
                <LoginPage />
            )}
        </>
    )
};

export default VertexAI;