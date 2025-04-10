import React from 'react'
import Sidebar from './Sidebar'
import { Link, Outlet } from 'react-router-dom'

function Adminroot() {
    return (
        <div>
            <section>
                <div class="w-full flex flex-nowrap ">
                    <div id="AdminHeader" class="">
                        <Sidebar />
                    </div>
                    <div class="w-4/5">
                        <Outlet /> {/* This is where the child route renders */}
                    </div>
                </div>
            </section>
            <div>
            </div>
            </div>
            )
}

            export default Adminroot