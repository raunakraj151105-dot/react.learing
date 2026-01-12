import React from 'react'

const Accepttask = ({data}) => {
    
  return (
    <div className="bg-[#1c1f26] border  border-gray-800 p-6 rounded-3xl flex flex-col justify-between min-h-75 shadow-xl">
        <div>
          <div className="flex  justify-between items-center mb-4">
            <span className="bg-rose-600 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded">{data.category}</span>
            <span className="text-sm text-gray-400 font-medium">{data.date}</span>
          </div>
          <h3 className="text-2xl  font-bold mt-7 mb-3">{data.title}</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
          {data.description}
          </p>
        </div>

        <div className="mt-6    flex justify-between">
          <button className=" bg-emerald-600 w-[45%] hover:bg-emerald-500 py-2 rounded-lg font-semibold active:scale-95 transition">
            Mark as Completed
          </button>
          <button className=" bg-red-600 w-[45%] hover:bg-red-500 py-2 rounded-lg font-semibold active:scale-95 transition">
            Mark as Failed
          </button>
        </div>

        
      </div>
  )
}

export default Accepttask
