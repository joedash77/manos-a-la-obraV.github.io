import React from 'react';
import './stylesBoton.css';

function BotonCerrar({ closeSidebar }) {
    return (
        <button onClick={closeSidebar} className='button'>
            <i className="fa fa-times" aria-hidden="true"></i>
        </button>
    );
}

export default BotonCerrar;