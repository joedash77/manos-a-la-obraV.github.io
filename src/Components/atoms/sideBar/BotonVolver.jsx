import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.css";

function BotonVolver({level}) {
    const navigate = useNavigate();
    const goBackHistory = () => {
        navigate(-1);
    };

  return (
    <div >
        {level > 1 && (
            <button onClick={goBackHistory} className='button'>
            <img src="/public/flecha.png"
            className='img'
            alt="goBackBtn" />
            </button>
        )}
    </div>
  )
}

export default BotonVolver