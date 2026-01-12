import React, { useState } from 'react'


const Login = ({handlelogin}) => {


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [show, setshow] = useState(false)
    const submithandler = (e) => {
        e.preventDefault()
        handlelogin(email , password)
       
        setemail('')
        setpassword('')
    }

    return (
        <div className='font-sans h-screen 
    bg-[url(https://i.pinimg.com/736x/3d/07/4a/3d074ac55451ef5b65f816702ae7b109.jpg)]
    bg-cover bg-center bg-no-repeat select-none
    flex justify-center items-center'>

            <div className='bg-white h-[90%] w-[90%] rounded-[90px] 
      flex items-center justify-between px-8 shadow-xl'>

                {/* LEFT */}
                <div className='h-[95%] w-[45%] rounded-[85px] flex justify-end items-center'>
                    <div className='h-[70%] w-[70%] flex  flex-col'>

                        {/* Heading */}
                        <div className='flex flex-col justify-center items-center  h-[25%] w-full gap-2'>
                            <h1 className='text-3xl font-semibold'>Welcome home 🏠</h1>
                            <p className='text-md text-gray-500'>
                                please enter your details
                            </p>
                        </div>

                        {/* Form */}
                        <div className='h-[75%] w-full flex p-5 justify-center items-center'>
                            <form
                                onSubmit={(e)=>{
                                    submithandler(e)
                                }}



                                className='flex flex-col gap-6 h-[60%] w-full'>


                                <input
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setemail(e.target.value)
                                    }}
                                    type="email"
                                    placeholder='enter your email'
                                    className='bg-white border-2 border-gray-300 rounded-full
                  w-full h-11 px-5 placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-500'
                                />
                                <div className='relative w-full'>
                                    <input
                                        value={password}
                                        onChange={(e) => {
                                            setpassword(e.target.value)
                                        }}
                                        type={show === true ? 'text' : 'password'}

                                        placeholder='enter your password '
                                        className='border-2 border-gray-300 rounded-full
                  w-full h-11 px-5 placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-500'
                                    />

                                    <span
                                        value={show}
                                        onClick={() => {
                                            setshow(!show)
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2
    cursor-pointer text-gray-500 hover:text-gray-700"
                                    >
                                        <i class="ri-eye-line"></i>
                                    </span>
                                </div>


                                <button
                                    className='bg-linear-to-r from-emerald-600 to-green-500
                  rounded-full w-full h-12 text-white text-lg font-medium
                  active:scale-95 transition cursor-pointer'
                                >
                                    Login
                                </button>

                            </form>
                        </div>

                    </div>
                </div>

                {/* RIGHT */}
                <div className='h-[95%] w-[45%] rounded-[90px]
        bg-[url(https://i.pinimg.com/1200x/a9/28/f6/a928f6bb8e1d64a2a444feed25e61c5b.jpg)]
        bg-cover bg-center bg-no-repeat shadow-lg'>
                </div>

            </div>
        </div>
    )
}

export default Login

