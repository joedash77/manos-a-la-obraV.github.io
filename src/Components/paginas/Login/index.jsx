import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const data = {
      "username" : "luciana",
      "password": "1234"
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("https://lamansysfaketaskmanagerapi.onrender.com/api/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userID', data.user._id);
            navigate('/');
        })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

  return (
    <div>
        <div>
            <h1>LOGIN</h1>
            <p>Please enter your login and password</p>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input placeholder='Username' type="text" name="" id="" />
                    <input placeholder='Password' type="password" name="" id="" />
                </div>
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}