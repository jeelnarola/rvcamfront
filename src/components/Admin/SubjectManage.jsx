import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { PiNotePencilFill } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import API from '../../API'
import { useNavigate } from 'react-router-dom'
import { fetchSubject } from '../../redux/authSlice '

function SubjectManage() {
    const [data, setData] = useState([])
    const state = useSelector((state) => state.auth?.user);
   
    const navigate = useNavigate()
    
    const getSubject = async () => {
        try {
            const res = await axios.get(`${API.fixAPI}/api/subject/show`, {
                headers: {
                    'Authorization': `Bearer ${state.token}`,
                    'Content-Type': 'application/json'
                }
            });
            setData(prev => [...res.data.data]);
        } catch (error) {
            if (error.response) {
                console.error('Server Error:', error.response.data);
                alert(error.response.data.message || 'Invalid credentials');
            } else {
                console.error('Login failed:', error.message);
                alert('Something went wrong');
            }
        }
    }
    useEffect(() => {
        getSubject()
    }, [])

    return (
        <div>
            <section>
                <div class="w-full flex flex-nowrap">
                    {/* <div id="AdminHeader" class="w-1/5 h-screen overflow-auto bg-gray-50 dark:bg-gray-800"></div> */}
                    <div class="w-full">
                        <div class=" bg-white drop-shadow-md">
                            <div class="p-5 flex justify-between">
                                <h4 class="text-blue-600 font-bold lg:text-xl">College Management System</h4>
                                <div className="flex text-black">
                                    <h4 class="font-semibold cursor-pointer lg:text-xl" onClick={() => navigate("/admin/Subject")}> Add </h4>
                                    <h4 class="font-semibold cursor-pointer lg:text-xl px-2"> ||  </h4>
                                    <h4 class="font-semibold cursor-pointer lg:text-xl" >Manage </h4>
                                </div>
                            </div>
                        </div>
                        <div id="showHideCourse" >
                            <div class="w-11/12 m-2 mx-auto mt-7 bg-white drop-shadow-md pb-5 overflow-scroll">
                                <div class="bg-black p-2 ">
                                    <h1 class="text-white font-semibold tracking-widest uppercase w-full" id="AddCourseTitle">Show Course</h1>
                                </div>
                                <table class="table-auto  my-5 border mx-5 p-1 border-gray-900 w-[700px] xl:w-[90%]  text-left">
                                    <thead >
                                        <tr>
                                            <th class="border border-gray-300 p-2 text-center"></th>
                                            <th class="border border-gray-300 p-2 text-center">Sr. No</th>
                                            <th class="border border-gray-300 text-center">Subject name</th>
                                            <th class="border border-gray-300 text-center">courseId</th>
                                            <th class="border border-gray-300 text-center">credits</th>
                                            <th class="border border-gray-300 text-center">Subject Code</th>
                                            <th class="border border-gray-300 text-center">Faculty</th>
                                            <th class="border border-gray-300 text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        {

                                            data.map((ele, i) => {
                                               
                                                return <tr>
                                                    <td className="border border-gray-300 w-[1%] px-2">
                                                        <input type="checkbox" className=''/>
                                                    </td>
                                                    <td className="border border-gray-300 w-[0%] px-2">{i + 1}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.name}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.courseId}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.credits}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.codeNumber}</td>
                                                    <td className="border border-gray-300 max-w-[300px] px-2">
                                                        <div className="w-[90%] overflow-x-auto p-4 scrollbar-track-gray-50 scrollbar-thumb-gray-900 scrollbar-track-balck text-ellipsis whitespace-nowrap">
                                                            <tr>
                                                                <td >jeel1</td>
                                                               <samp className='pr-1'>,</samp>
                                                               <td >jeel1</td>
                                                               <samp className='pr-1'>,</samp>
                                                               <td >jeel1</td>
                                                               <samp className='pr-1'>,</samp>
                                                               <td >jeel1</td>
                                                               <samp className='pr-1'>,</samp><td >jeel1</td>
                                                               <samp className='pr-1'>,</samp><td >jeel1</td>
                                                               <samp className='pr-1'>,</samp><td >jeel1</td>
                                                               <samp className='pr-1'>,</samp>
                                                            </tr>
                                                        </div>
                                                    </td>
                                                    <td className="border border-gray-300 w-[10%] px-2">
                                                        <tr>
                                                            <td className='p-1 w-[10%] px-2'>
                                                                <div className="flex items-center justify-center">
                                                                    <button className="bg-green-600 text-black p-1 px-8 mx-4 rounded-lg flex items-center gap-2">
                                                                        <PiNotePencilFill />
                                                                        <p>Edit</p>
                                                                    </button>
                                                                    <button className="bg-red-600 text-white p-1 px-8 mx-4 rounded-lg flex items-center gap-2">
                                                                        <MdDelete />
                                                                        <p>Remove</p>
                                                                    </button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </td>
                                                </tr>
                                                //    })

                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SubjectManage