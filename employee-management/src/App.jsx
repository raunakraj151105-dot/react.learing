import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employee from './components/dashbord/Employee'
import Admin from './components/dashbord/Admin'
import { getlocalstorage, setlocalstorage } from './utils/Localstoraage'
import { useContext } from 'react'
import { Authcontext } from './context/Auth'

const App = () => {

  const [ usserdata, setusserdata ] = useContext(Authcontext)
  console.log(usserdata)
  const [Loggedinuserdata, setLoggedinuserdata] = useState(null)
  const [user, setuser] = useState(null)

  useEffect(() => {

    const loggeddata = localStorage.getItem("loggedindata")
    if (loggeddata) {
      const setter = JSON.parse(loggeddata)
      setuser(setter.role)
      setLoggedinuserdata(setter.data)
    }



  }, [])



  const handlelogin = (email, password) => {




    if (email == 'admin@company.com' && password == '999') {
      setuser("admin");

      localStorage.setItem(
        'loggedindata',
        JSON.stringify({ role: 'admin' })
      );

    }

    else if (usserdata) {
      const employeee = usserdata.find(
        (e) => e.email == email && e.password == password
      );

      if (employeee) {
        setuser("employee");
        setLoggedinuserdata(employeee);
        localStorage.setItem(
          'loggedindata',
          JSON.stringify({ role: 'employee', data: employeee })
        );
      }


    }


    else {
      alert("invalid credentials");
    }
  };


  return (
    <div >
      {!user ? <Login handlelogin={handlelogin} /> : ''}
      {user == "admin" ? <Admin setuser={setuser} /> : (user == "employee" ? <Employee setuser={setuser} data={Loggedinuserdata} /> : null)}
    </div>
  )
}

export default App

