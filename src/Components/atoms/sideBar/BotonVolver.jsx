import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./stylesBoton.css";

function BotonVolver({ level }) {
  const navigate = useNavigate();
  const goBackHistory = () => {
      navigate(-1);
  };

  return (
      <div>
          {level > 1 && (
              <button onClick={goBackHistory} className='button'>
                  <i className="fa fa-arrow-left" aria-hidden="true"></i> {/* Icono de flecha hacia atrás */}
              </button>
          )}
      </div>
  );
}

export default BotonVolver