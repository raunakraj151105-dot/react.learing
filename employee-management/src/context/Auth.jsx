import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage, setlocalstorage } from '../utils/Localstoraage'

export const Authcontext = createContext()

const Auth = ({children}) => {
  
  const [usserdata, setusserdata] = useState(null)

  useEffect(() => {
      setlocalstorage()
      const {employees} = getlocalstorage()
      setusserdata(employees)
    
  }, [])
  
 
  
  return (

 <div>
      <Authcontext.Provider  value = {[usserdata , setusserdata]}>

        {children}
      </Authcontext.Provider>
    </div>
  )
}

export default Auth
