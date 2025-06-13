import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CourseMange from './CourseMange';
import { useLocation, useNavigate } from 'react-router-dom';
import API from '../../API';

function Course() {
    const location = useLocation();
    const id = location?.state?.id._id;
    const [course, setCourse] = useState("")
    const navigate = useNavigate();
    const state = useSelector((state) => state.auth?.user);

    const handleCourse = async (e) => {
        if (e.target.value === "Update Course") {
            try {
                const res = await axios.patch(`${API.fixAPI}/api/course/update/${id}`, {
                    courseName: course
                }, {
                    headers: {
                        'authorization': `Bearer ${state.data.token}`,
                        'Content-Type': 'application/json'
                    }
                });
                alert('Update successful');
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
                const res = await axios.post(`${API.fixAPI}/api/course/add`, {
                    courseName: course
                }, {
                    headers: {
                        'authorization': `Bearer ${state.data.token}`,
                        'Content-Type': 'application/json'
                    }
                });
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
    return (
        <>
            <section>
                <div class="w-full flex flex-nowrap">
                    <div class="w-full">
                        <div class=" bg-white drop-shadow-md">
                            <div class="p-5 flex justify-between">
                                <h4 class="text-blue-600 font-bold lg:text-xl">College Management System</h4>
                                <div className="flex text-black">
                                    <h4 class="font-semibold cursor-pointer lg:text-xl" onClick={() => navigate("/Course")}> Add </h4>
                                    <h4 class="font-semibold cursor-pointer lg:text-xl px-2"> ||  </h4>
                                    <h4 class="font-semibold cursor-pointer lg:text-xl" onClick={() => navigate("/admin/CourseManage")}>Manage </h4>
                                </div>
                            </div>
                        </div>
                        <div id="showHideCourse" >
                            <div class="w-11/12 m-2 mx-auto mt-7 bg-white drop-shadow-md pb-5">
                                <div class="bg-black p-2">
                                    <h1 class="text-white font-semibold tracking-widest uppercase" id="AddCourseTitle">Add </h1>
                                </div>
                                <form action="" onSubmit={(e) => e.preventDefault()}>
                                    <div class="flex flex-col m-4">
                                        <label for="" class="mb-2">Course Name :</label>
                                        <input type="text" class="border border-black px-4 mb-4" id="courseName" name="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
                                        <input type="submit" onClick={handleCourse} value={!id ? 'Add Course' : "Update Course"} class="bg-blue-600 p-3 rounded-sm block mx-auto text-white hover:border hover:border-black hover:bg-transparent  hover:text-black hover:drop-shadow-2xl transition-all cursor-pointer" id="addCoursebtn" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Course