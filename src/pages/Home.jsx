import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <h1 className="text-3xl font-bold text-blue-700">
                        Epitome Bookstore
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Welcome to our online bookstore!
                    </p>

                    <button 
                    onClick={()=>navigate("/login")}
                    className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Explore Books
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home