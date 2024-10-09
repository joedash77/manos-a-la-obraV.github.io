import React from 'react';
import './stylesBoton.css';

function BotonCerrar({ closeSidebar }) {
    return (
        <button onClick={closeSidebar} className='button'>
            &#10006; {/* Código de la "X" para cerrar */}
        </button>
    );
}

export default BotonCerrar;