import React from 'react'
import Header from '../others/Header'
import Admincentre from '../others/Admincentre'
import Adminbottm from '../others/Adminbottm'

const Admin = ({setuser}) => {
    return (
        <div className="min-h-screen select-none bg-[#0f1117] text-white p-10 font-sans">

            {/* HEADER */}
           <Header  setuser = {setuser} />

            {/* CREATE TASK CARD */}
           <Admincentre  />
            {/* TASK LIST (SCROLL FIXED) */}
           <Adminbottm  />


        </div>
    )
}

export default Admin

