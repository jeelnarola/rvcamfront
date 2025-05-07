import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { PiNotePencilFill } from 'react-icons/pi'
import API from '../../API';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiShow } from "react-icons/bi";
import { p } from 'framer-motion/client';
import StaffDetails from '../popup/StaffDetails';
function ManageStaff() {
    const [data, setData] = useState([])
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState("");
    const state = useSelector((state) => state.auth?.user);
    const [checkedRows, setCheckedRows] = useState({});
    const [CheckedId, setCheckedId] = useState([]);
    const checkedCount = Object.values(checkedRows).filter(Boolean).length;

    const navigate = useNavigate()

    const getSubject = async () => {
        try {
            const res = await axios.get(`${API.fixAPI}/api/user/getSF/`, {
                headers: {
                    'Authorization': `Bearer ${state.data.token}`,
                    'Content-Type': 'application/json'
                }, params: {
                    role: ['Admin', 'Faculty'] // <-- This adds ?role=faculty to the URL
                }
            });
            console.log("res", res);

            setData(prev => [...res.data.data]);
            console.log("data",data);
            
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
    const checkbox = (e, i, ele) => {
        setCheckedId((prev) => {
            if (e.target.checked) {
                return [...prev, ele];
            } else {
                return prev.filter((id) => id !== ele);
            }
        });

    }
    const deletestaff = async (ele) => {
        const idFilter = CheckedId.filter((id) => id === ele)


        if (idFilter.length === 0) {
            try {
                const res = await axios.delete(`${API.fixAPI}/api/user/deleteSF`, {
                    data: { ids: CheckedId },
                    headers: {
                        'authorization': `Bearer ${state.data.token}`,
                        'Content-Type': 'application/json'
                    }
                });

                // getCourse()
                alert('Login successful');
            } catch (error) {
                if (error.response) {
                    console.error('Server Error:', error.response.data);
                    alert(error.response.data.message || 'Invalid credentials');
                } else {
                    console.error('Login failed:', error.message);
                    alert('Something went wrong');
                }
            }
        } else {
            try {
                const res = await axios.delete(`${API.fixAPI}/api/user/deleteSF`, {
                    data: { ids: CheckedId },
                    headers: {
                        'authorization': `Bearer ${state.data.token}`,
                        'Content-Type': 'application/json'
                    }
                });
                // getCourse()
                alert('Login successful');
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
    }
    const popupShow = (value)=>{
       setPopupData(value)
       setShowPopup(true)
        
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
                            <div class="w-11/12 xl:w-[90%] m-2 mx-auto mt-7 bg-white drop-shadow-md pb-5 overflow-scroll">
                                <div class="bg-black p-2 ">
                                    <h1 class="text-white font-semibold tracking-widest uppercase w-full" id="AddCourseTitle">Show Course</h1>
                                </div>
                                <table class="table-auto  my-5 border mx-5 p-1 border-gray-900 w-[100%] text-left">
                                    <thead >
                                        <tr>
                                            <th class="border border-gray-300 p-2 text-center"></th>
                                            <th class="border border-gray-300 p-2 text-center">Sr. No</th>
                                            <th class="border border-gray-300 text-center">name</th>
                                            <th class="border border-gray-300 text-center">Email</th>
                                            <th class="border border-gray-300 text-center">mobile</th>
                                            <th class="border border-gray-300 text-center">Gender</th>
                                            <th class="border border-gray-300 text-center">Course</th>
                                            <th class="border border-gray-300 text-center">BOD</th>
                                            <th class="border border-gray-300 text-center">Address</th>
                                            <th class="border border-gray-300 text-center">Role</th>
                                            <th class="border border-gray-300 text-center">subjects</th>
                                            <th class="border border-gray-300 text-center">semester</th>
                                            <th class="border border-gray-300 text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        {

                                            data.map((ele, i) => {
                                                // console.log(ele);
                                                
                                                const isChecked = CheckedId.includes(ele._id) || false;
                                                return <tr>
                                                    <td className="border border-gray-300 w-[1%] px-2">
                                                        <input type="checkbox" className='' checked={CheckedId.includes(ele._id)}
                                                            onChange={(e) => {
                                                                checkbox(e, i, ele._id)
                                                            }
                                                            } />
                                                    </td>
                                                    <td className="border border-gray-300 w-[0%] px-2">{i + 1}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.name}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.email}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.mobileNumber}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.gender}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2 text-center">{ele.courseId ? ele.courseId.courseName : "-"}</td>
                                                    <td className="border border-gray-300 px-2">{ele.dob}</td>
                                                    <td className="border border-gray-300 w-[200px] px-2"> {ele.address?.substring(0, 20)}...</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.role}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.subjects.length >= 1 ? (
                                                        <td>
                                                            {ele.subjects.slice(0, 2).map((subject, index) => (
                                                                <span key={index}>
                                                                    {subject.name}
                                                                    {index !== ele.subjects.slice(0, 2).length - 1 && ', '}
                                                                </span>
                                                            ))}
                                                            {ele.subjects.length > 2 && '...'}
                                                        </td>
                                                    ) : (
                                                        <td>-</td>
                                                    )}</td>
                                                    <td className="border border-gray-300 w-[20%] px-2">{ele.semester}</td>
                                                    <td className="border border-gray-300 px-2">
                                                        <tr>
                                                            <td className='p-1  px-2'>
                                                                <div className="flex items-center justify-center">
                                                                    <button className="bg-blue-500 p-2 px-4 mx-2 rounded-lg flex items-center gap-2 text-white" onClick={() => popupShow(ele)}>
                                                                        <BiShow />
                                                                        <p>Show</p>
                                                                    </button>
                                                                    <button className="bg-green-600 text-black p-2 px-4 mx-2 rounded-lg flex items-center gap-2" onClick={() => navigate("/admin/AddStaff", { state: { id: ele } })}>
                                                                        <PiNotePencilFill />
                                                                        <p>Edit</p>
                                                                    </button>
                                                                    <button disabled={!isChecked}
                                                                        onClick={() => deletestaff(ele._id)}
                                                                        className={` p-2 px-4 rounded-lg flex items-center gap-2 ${isChecked
                                                                            ? "bg-red-600 text-white"
                                                                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                                                            }`}>
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
                                <button
                                    disabled={CheckedId.length < 2}
                                    onClick={() => deletestaff("deleteAll")}
                                    className={`p-1 px-8 mx-4 rounded-lg flex items-center gap-2 ${CheckedId.length >= 2
                                        ? "bg-red-600 text-white cursor-pointer"
                                        : "bg-gray-400 text-gray-600 cursor-not-allowed"
                                        }`}
                                >
                                    <MdDelete />
                                    <p>Remove All</p>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showPopup && (
                <StaffDetails title="details" data={popupData} onClose={() => setShowPopup(false)}/>
                // <SataffD title="Welcome!" onClose={() => setShowPopup(false)}>
                //     <p>This is a reusable popup component.</p>
                // </showPopup>
            )}
            
        </div>
    )
}

export default ManageStaff