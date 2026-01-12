import React, { useContext, useState } from 'react'
import { Authcontext } from '../../context/Auth'

const Admincentre = () => {

  const [tasktitle, settasktitle] = useState('')
  const [taskdate, settaskdate] = useState('')
  const [assignto, setassignto] = useState('')
  const [taskcategory, settaskcategory] = useState('')
  const [taskdescription, settaskdescription] = useState('')

  // 🔴 IMPORTANT: context ARRAY hai, object nahi
  const [usserdata, setusserdata] = useContext(Authcontext)

  
  const submithandler = (e) => {
    e.preventDefault()

    const tasknew = {
      active: false,
      completed: false,
      newTask: true,
      failed: false,
      title: tasktitle,
      description: taskdescription,
      date: taskdate,
      category: taskcategory
    }

    const data = usserdata

    data.forEach((elem) => {
      if (elem.firstName === assignto) {
        elem.tasks.push(tasknew)   // 🔴 sirf ye change, warna crash hota
      }
    })

    setusserdata(data)

    // reset — ab sahi jagah pe
    settasktitle('')
    setassignto('')
    settaskcategory('')
    settaskdate('')
    settaskdescription('')
  }

  return (
    <form
      onSubmit={submithandler}
      className="w-full h-88 rounded-xl bg-[#161a22] flex justify-between shadow-lg"
    >

      {/* LEFT */}
      <div className="h-full w-[40%] p-8">
        <div className="h-full flex flex-col justify-between">

          <div>
            <h1 className="mb-1 text-sm text-gray-300">Task Title</h1>
            <input
              value={tasktitle}
              onChange={(e) => settasktitle(e.target.value)}
              type="text"
              className="w-full h-9 rounded-md bg-[#0f1117] border border-gray-600 px-3 text-sm"
            />
          </div>

          <div>
            <h1 className="mb-1 text-sm text-gray-300">Date</h1>
            <input
              value={taskdate}
              onChange={(e) => settaskdate(e.target.value)}
              type="date"
              className="w-full h-9 rounded-md bg-[#0f1117] border border-gray-600 px-3 text-sm"
            />
          </div>

          <div>
            <h1 className="mb-1 text-sm text-gray-300">Assign to</h1>
            <input
              value={assignto}
              onChange={(e) => setassignto(e.target.value)}
              type="text"
              className="w-full h-9 rounded-md bg-[#0f1117] border border-gray-600 px-3 text-sm"
            />
          </div>

          <div>
            <h1 className="mb-1 text-sm text-gray-300">Category</h1>
            <input
              value={taskcategory}
              onChange={(e) => settaskcategory(e.target.value)}
              type="text"
              className="w-full h-9 rounded-md bg-[#0f1117] border border-gray-600 px-3 text-sm"
            />
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="h-full w-[40%] p-6 flex flex-col justify-between">
        <div className="h-[85%] flex flex-col">
          <h1 className="mb-2 text-sm text-gray-300">Description</h1>
          <textarea
            value={taskdescription}
            onChange={(e) => settaskdescription(e.target.value)}
            className="h-full rounded-md bg-[#0f1117] border border-gray-600 p-3 text-sm resize-none"
          />
        </div>

        <button className="h-10 rounded-md bg-emerald-600 font-medium">
          Create Task
        </button>
      </div>

    </form>
  )
}

export default Admincentre
