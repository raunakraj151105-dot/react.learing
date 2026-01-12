import React, { useContext } from 'react'
import { Authcontext } from '../../context/Auth'


const Adminbottm = () => {

    const [usserdata , setusserdata] = useContext(Authcontext)

    return (

        <div className="bg-[#161a22] mt-6 w-full    rounded-xl flex flex-col gap-3 p-3  scrollbar-thumb-gray-600 scrollbar-track-transparent">

            <div className={`flex-none bg-500/20  border border-500/40 h-12 w-full rounded-lg flex justify-between items-center px-6 text-sm font-medium`}>
                <span className='w-1/5 text-md font-medium'>Name</span>
                <span className='w-1/5 text-md font-medium'>Newtask</span>
                <span className='w-1/5 text-md font-medium'>Active</span>
                <span className='w-1/5 text-md font-medium'>Completed</span>
                <span className='w-1/5 text-md font-medium'>Failed</span>

            </div>


            {usserdata.map((c, i) => (
                <div
                    key={i}
                    className="flex-none bg-slate-800/40 border border-slate-700/50 h-12 w-full rounded-lg flex justify-between items-center px-6 text-sm font-medium hover:bg-slate-700/40 transition"
                >
                    <span className="w-1/5 text-slate-200 text-md font-medium">
                        {c.firstName}
                    </span>

                    <span className="w-1/5 text-sky-400 text-md font-medium">
                        {c.taskStats.newTask}
                    </span>

                    <span className="w-1/5 text-amber-400 text-md font-medium">
                        {c.taskStats.active}
                    </span>

                    <span className="w-1/5 text-emerald-400 text-md font-medium">
                        {c.taskStats.completed}
                    </span>

                    <span className="w-1/5 text-rose-400 text-md font-medium">
                        {c.taskStats.failed}
                    </span>
                </div>
            ))}

        </div>

    )
}

export default Adminbottm

