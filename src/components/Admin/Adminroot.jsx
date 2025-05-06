import React from 'react'
import Sidebar from './Sidebar'
import { Link, Outlet } from 'react-router-dom'

function Adminroot() {
    return (
        <div className="flex h-screen w-full ">
            {/* Fixed Sidebar */}
            <div className="w-[15%] fixed top-0 left-0 h-full md:w-[20%] lg:w-[15%] xl:w-[15%]">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="ml-[15%] w-[80%] md:ml-[20%] lg:ml-[15%] xl:ml-[15%]">
                <Outlet /> {/* This is where the child route renders */}
            </div>
        </div>
    )
}

export default Adminroot
