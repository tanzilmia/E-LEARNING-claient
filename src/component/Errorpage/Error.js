import React from 'react';
import './Error.css'
const Error = () => {
    return (
        <div className='error_conteiner'>
            <div style={{width : '450px'}}>
            <h1 className='display-1 fw-bold text-danger text-center'>404</h1>
            <p className='text-danger text-center'>Page Not Found</p>
            </div>
        </div>
    );
};

export default Error;