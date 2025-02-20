import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        alert("show the password");
        if (ref.current.src.includes("src/assets/eyecross.png")) {
            ref.current.src = "src/assets/visibility.png"
        } else {
            ref.current.src = "src/assets/eyecross.png"
        }

    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify(...passwordArray, form))
        console.log(...passwordArray, form)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <div className=" mycontainer">
                <h1 className="text-4xl text font-bold text-center">
                    <span className="text-green-500">&lt;</span>
                    Password
                    <span className="text-green-500"> Manager/&lt;</span>
                </h1>
                <p className="text-green-500 text-lg text-center">Your Own Password Manager</p>
                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className="rounded-full border border-blue-950 w-full p-4 py-1" type="text" name="site" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className="rounded-full border border-blue-950 w-full p-4 py-1" type="text" name="username" id="" />
                        <div className="relative">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className="rounded-full border border-blue-950 w-full p-4 py-1" type="text" name="password" id="" />
                            <span className="absolute right-[1px] top-[4px] cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="src/assets/visibility.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className="flex justify-center gap-2 items-center bg-green-500 hover:bg-green-400 rounded-full px-8 py-2 w-fit border border-green-900">
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#121331,secondary:#000000"
                        >
                        </lord-icon>Add Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.lenght === 0 && <div>No Passwords to Show</div>}
                    {passwordArray.lenght != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-green-600 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center w-32'> <a href={item.site} target='_blank'>{item.site}</a></td>
                                    <td className='py-2 border border-white text-center w-32'>{item.username}</td>
                                    <td className='py-2 border border-white text-center w-32'>{item.password}</td>
                                </tr>
                            })}


                        </tbody>
                    </table>}
                </div>
            </div>
        </>

    )
}

export default Manager



