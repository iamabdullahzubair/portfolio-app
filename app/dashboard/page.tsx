'use client'
import React, { useState } from 'react'
import { loginWithEmail } from '../firebase/actions';
import LoadingOverlay from '../components/ui/loadingOverlay';
import { auth } from "@/app/firebase/firebase"
import { signOut } from 'firebase/auth';
const Page = () => {

  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget); // Type-safe way to access form

    // Convert formData to an object
    const data: Record<string, FormDataEntryValue | string> = {}; // Record for key-value pairs

    formData.forEach((value, key) => {
      data[key] = value
      console.log(key, " ---->> :", value)
    });

    if (!data.email || !data.password) {
      alert("Email and password required")
      return
    }

    try {
      setLoading(true)
      await loginWithEmail(data.email as string, data.password as string)
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
    finally {
      setLoading(false)
    }

  };

  const handleLogout = async () => {
    try {
      setLoading(true)
      await signOut(auth)
    } catch (error) {
      console.error("error on logging out :: ----->> ", error)
    }finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {loading && <LoadingOverlay />}

      {!auth.currentUser && <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email" // Add name attribute
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter email here"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password" // Add name attribute
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter password"
          />
        </div>
        <button type='submit' className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>}
      {auth.currentUser && <div className='text-center'>
        <h1 className='text-4xl'>Welcome Mohd Abdullah</h1>
        <button onClick={handleLogout} type='button' className="mt-14 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Logout
        </button>
      </div>}
    </div>
  )
}

export default Page