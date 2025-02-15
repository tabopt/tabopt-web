import { useState } from "react";
import logo from '../../../assets/images/logo/tabopt.png';
import { Link } from "react-router-dom";


  
const SignIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);
  return (
    <>
        <div className='flex min-h-screen flex-col '>
            <header className='flex h-16 w-full max-w-[80rem] flex-row items-center gap-2 self-center px-5 pb-8 pt-10 sm:gap-6 lg:px-8'>
                <Link to={'/'} className='col-start-1 mr-auto flex flex-row items-center gap-4'>
                    <img src={logo} className='w-32' />
                </Link>
            </header>
            <main className='flex w-full max-w-2xl flex-col gap-2 self-center px-6'>
                <h2 className='-mx-2 text-3xl'>
                    {isSignIn ? "Sign in " : " Sign up"}
                </h2>
                <hr className='my-2'/>
                    <div className="w-full">
                        {/* Toggle Buttons */}
                        <div className="inline-flex items-center w-full bg-[#d6d8dc] rounded-2xl h-10 p-1">
                            <button
                            className={`w-full text-sm font-medium rounded-xl whitespace-nowrap px-3 py-1.5 transition-all inline-flex justify-center items-center ${
                                isSignIn ? "bg-[#f1f2f3] shadow " : ""
                            }`}
                            onClick={() => setIsSignIn(true)}
                            >
                            Sign In
                            </button>
                            <button
                            className={`w-full text-sm font-medium rounded-xl whitespace-nowrap px-3 py-1.5 transition-all inline-flex justify-center items-center ${
                                !isSignIn ? "bg-[#f1f2f3] shadow " : ""
                            }`}
                            onClick={() => setIsSignIn(false)}
                            >
                            Sign Up
                            </button>
                        </div>

                        {/* Sign In Form */}
                        {isSignIn && (
                            <div className="mt-2">
                            <div className="mb-2 text-sm text-gray-600">Sign in to an existing account.</div>
                            <form className="flex flex-col gap-3">
                                <input
                                type="email"
                                placeholder="Email"
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black"
                                />
                                <input
                                type="password"
                                placeholder="Password"
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black"
                                />
                                <button className="font-semibold text-base rounded-2xl text-white inline-flex items-center justify-center whitespace-nowrap transition-colors bg-black hover:bg-black/90 h-10 px-4 py-2 w-32">
                                Sign In
                                </button>
                            </form>
                            </div>
                        )}

                        {/* Sign Up Form */}
                        {!isSignIn && (
                            <div className="mt-2">
                            <div className="mb-2 text-sm text-gray-600">Create a new account.</div>
                            <form className="flex flex-col gap-3">
                                <input
                                type="text"
                                placeholder="Username"
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black"
                                />
                                <input
                                type="email"
                                placeholder="Email"
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black"
                                />
                                <input
                                type="password"
                                placeholder="Password"
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black"
                                />
                                <button className="font-semibold text-base rounded-2xl text-white inline-flex items-center justify-center whitespace-nowrap transition-colors bg-black hover:bg-black/90 h-10 px-4 py-2 w-32">
                                Sign Up
                                </button>
                            </form>
                            </div>
                        )}
                        </div>
                {/* <div className='log in w-full'>
                    <div className='inline-flex items-center  w-full bg-[#d6d8dc] rounded-2xl h-10 p-1'>
                        <button className='bg-[#f1f2f3] w-full text-sm font-medium rounded-xl whitespace-nowrap px-3 py-1.5 shadow transition-all inline-flex justify-center items-center' >Sign in</button>
                        <button className=' w-full text-sm font-medium rounded-xl whitespace-nowrap px-3 py-1.5  transition-all inline-flex justify-center items-center' >Sign up</button>
                    </div>
                    <div className='mt-2 signin'>
                        <div className='mb-2 text-sm text-gray-600'>Sign in to an existing account.</div>
                        <form className='flex flex-col gap-3'>
                            <input type='email' placeholder='Email'  className='flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black'  />
                            <input type='password' placeholder="Password" className='flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black'  />
                            <div className=''>
                                <button className='font-semibold text-base rounded-2xl text-white  inline-flex items-center justify-center whitespace-nowrap transition-colors  bg-black  hover:bg-black/90 h-10 px-4 py-2 w-32'>Sign in</button>
                            </div>
                        </form>
                    </div>
                    <div className='mt-2 signup'>
                        <div className='mb-2 text-sm text-gray-600'>Create a new account..</div>
                        <form className='flex flex-col gap-3'>
                            <input type='text' placeholder='Username' className='flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black'/>
                            <input type='email' placeholder='Email' className='flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black'  />
                            <input type='password' placeholder="Password" className='flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-within:border-[#e5e5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-black'  />
                            <div className=''>
                                <button className='font-semibold text-base rounded-2xl text-white  inline-flex items-center justify-center whitespace-nowrap transition-colors  bg-black  hover:bg-black/90 h-10 px-4 py-2 w-32'>Sign in</button>
                            </div>
                        </form>
                    </div>
                </div> */}

            </main>
        </div>
        kal
    </>
  )
}

export default SignIn