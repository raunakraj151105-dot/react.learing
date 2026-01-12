import React from 'react'
import { useState } from 'react'

const Header = ({ data, setuser }) => {

 const [username, setusername] = useState(null)
  const logoutuser = () => {
    localStorage.setItem("loggedindata", "")
    setuser('')


  }

  // if (!data){
  //   setusername('admin')
    
  // }
  // else{
  //   setusername(data.firstName)
  // }
  return (
    <div>

      <header className="flex justify-between items-end mb-10">
        <h1 className="text-3xl font-semibold">
          Hello <br /> <span className="text-5xl font-bold text-emerald-400">

            username👋</span>
        </h1>
        <button
          onClick={logoutuser}
          className="bg-red-600 hover:bg-red-700 transition active:scale-105 px-6 py-2 rounded-lg font-medium text-sm">
          Log Out
        </button>
      </header>
    </div>
  )
}

export default Header
