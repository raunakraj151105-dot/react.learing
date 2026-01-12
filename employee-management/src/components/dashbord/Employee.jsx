import React from 'react';
import Header from '../others/Header';
import Stats from '../others/Stats';
import Taskcard from '../others/Taskcard';

const Dashboard = ({data , setuser}) => {
  

  return (
    <div className="min-h-screen select-none bg-[#0f1117] text-white p-10 font-sans">
      {/* Header */}
     <Header  data = {data} setuser = {setuser} />

      {/* Stats Grid */}
      <Stats  data = {data}/>

      {/* Task List Section */}

      <Taskcard  data = {data} />
      
    
      </div>
)}

export default Dashboard;