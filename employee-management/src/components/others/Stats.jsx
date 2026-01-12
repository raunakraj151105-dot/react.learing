import React from 'react'


const Stats = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        {/* In Progress */}
        <div className={`bg-blue-500/10 border-blue-500/20 border p-6 rounded-2xl transition-transform hover:scale-105 cursor-pointer`}>
          <h2 className={`text-4xl font-bold text-blue-500`}>
             {data.taskStats.active}
          </h2>
          <p className="text-lg font-medium mt-1 opacity-80">In Progress</p>
        </div>

        {/* Completed */}
        <div className={`bg-emerald-500/10 border-emerald-500/20 border p-6 rounded-2xl transition-transform hover:scale-105 cursor-pointer`}>
          <h2 className={`text-4xl font-bold text-emerald-500`}>
 {data.taskStats.completed}
          </h2>
          <p className="text-lg font-medium mt-1 opacity-80">Completed</p>
        </div>

        {/* Failed */}
        <div className={`bg-amber-500/10 border-amber-500/20 border p-6 rounded-2xl transition-transform hover:scale-105 cursor-pointer`}>
          <h2 className={`text-4xl font-bold text-amber-500`}>
             {data.taskStats.failed}
          </h2>
          <p className="text-lg font-medium mt-1 opacity-80">Failed</p>
        </div>

        {/* New Tasks */}
        <div className={`bg-rose-500/10 border-rose-500/20 border p-6 rounded-2xl transition-transform hover:scale-105 cursor-pointer`}>
          <h2 className={`text-4xl font-bold text-rose-500`}>
            {data.taskStats.newTask}
          </h2>
          <p className="text-lg font-medium mt-1 opacity-80">New Tasks</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
