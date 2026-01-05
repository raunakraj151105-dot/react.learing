import { useEffect, useState } from "react"


const App = () => {
  const [Num1, setNum1] = useState(0)
  const [Num2, setNum2] = useState(100)
useEffect(function(){
  console.log("use effect is running ")
}, [Num2])
  

  return (
    <div>
      <h1>NUM1 {Num1}</h1>
      <h1>NUM2 {Num2}</h1>
      <button 
      onMouseEnter={
      ()=>{
        setNum1(Num1+10)
      }
      }
      onMouseLeave={()=>{
        setNum2(Num1+10)
      }}
      
      > Click</button>
    </div>
  )
}

export default App

