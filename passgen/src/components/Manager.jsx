import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="bg-gray-400 mycontainer">
                <h1 className="text-4xl text font-bold text-center">
                <span className="text-green-700">&lt;</span>
                    Password
                    <span className="text-green-700"> Manager/&lt;</span>
                </h1>
                <p className="text-green-700 text-lg text-center">Your Own Password Manager</p>
                <div className="text-black flex flex-col p-4 gap-8">
                    <input className="rounded-full border border-blue-950 w-full p-4 py-1" type="text" name="" id="" />
                    <div className="flex w-full justify-between gap-8">
                    <input className="rounded-full border border-blue-950 w-full p-4 py-1" type="text" name="" id="" />
                    <input className="rounded-full border border-blue-950 w-full p-4 py-1" type="text" name="" id="" />

                    </div>
                    <button>Add Password</button>
                </div>
            </div>
        </>

    )
}

export default Manager
