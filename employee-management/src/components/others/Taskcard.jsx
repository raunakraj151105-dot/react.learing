import React from 'react'
import Accepttask from '../../Task/Accepttask';
import Newtask from '../../Task/Newtask';
import Completetask from '../../Task/Completetask';
import Failedtask from '../../Task/Failedtask';

const Taskcard = ({ data }) => {
  return (


    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Task Card */}
     
        {data.tasks.map((elem , idx)=>{
           if (elem.active){
            return <Accepttask key = {idx} data = {elem}/>
            
           }
           if(elem.newTask){
            return <Newtask  key = {idx} data = {elem} />
           }

           if (elem.completed){
            return <Completetask key = {idx} data = {elem} />
           }
           if (elem.failed){
            return <Failedtask key = {idx} data = {elem} />
           }
          }
          
        
          
        ) 

        }


    </div>



  );
};



export default Taskcard

