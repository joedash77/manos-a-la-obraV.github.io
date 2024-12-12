import React from 'react'
import UserInfo from '../molecules/userInfo/userInfo'
import Header from '../organisms/header/Header'

function Settings() {

  const userId = localStorage.getItem('userID')

  return (
    <div>
        <Header title="Configuración" level={2}/>
        <UserInfo userId={userId}/>
        

    </div>
  )
}

export default Settings