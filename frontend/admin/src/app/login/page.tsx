"use client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Handle form submission
        // Here, you'd typically send a request to your backend to log in the user.
        // For now, we'll just log the values and redirect to the home page.

        console.log('Email:', email);
        console.log('Password:', password);

        // Dummy login
        if (email === 'user@example.com' && password === 'password') {

        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex items-center justify-end min-h-screen min-w-screen">
            <div className="container w-1/2 h-screen p-10">
                <div className="card bg-white dark:bg-base-200 border dark:border-base-200 dark:bg-opacity-50 w-full h-full p-8 space-y-6 flex flex-col align-center justify-between rounded rounded-3xl shadow-md backdrop-blur-xl">
                    <div className="flex justify-center">
                        <h1>Placeholder for Logo</h1>
                    </div>
                    <div>
                        <h2 className="text-4xl font-semibold text-center py-8">Login</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <label className="input input-bordered flex items-center gap-2 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="password" className="grow" placeholder="Password" />
                            </label>
                            <button
                                type="submit"
                                className="block w-full px-4 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-center">
                        <h1>Placeholder for other operation</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}
