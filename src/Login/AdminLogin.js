import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({setLogin}) => {
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [formvalue, SetFormValues] = useState({
        admin_name: "",
        admin_password: ""
    });

    const inputEvent = (e) => {
        const { name, value } = e.target;
        SetFormValues({ ...formvalue, [name]: value })
    }

    const adminlogin = (e) => {
        e.preventDefault();
        if (!formvalue.admin_name && !formvalue.admin_password) {
            setError("please")
        } else if (
            formvalue.admin_name === "admin" && formvalue.admin_password === "admin"
        ) {
            setLogin(true)
            navigate("/admin/dashboard");
        } else {
            setError("plase")
        }
    }
    return (
        <section>
            <div className="my-40">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div
                        className="hidden lg:block lg:w-1/2 bg-cover"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")'
                        }}></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">
                            Brand
                        </h2>
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Admin Name
                            </label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text"
                                onChange={inputEvent}
                                value={formvalue.admin_name}
                                name="admin_name"
                                
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                            </div>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="password"
                                onChange={inputEvent}
                                value={formvalue.admin_password}
                                name= "admin_password"
                            />
                        </div>
                        <div className="mt-8">
                            <button onClick={adminlogin} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin