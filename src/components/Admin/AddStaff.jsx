/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourse } from '../../redux/courseSlice';
import { fetchSubject } from '../../redux/authSlice ';
import { feSubject, Subject } from '../../redux/subjectSlice';
import { PostAPI } from '../../redux/postAPI';
import { useLocation } from 'react-router-dom';
import { PatchAPI } from '../../redux/patchAPI';

function AddStaff() {
  const location = useLocation();
  let id = location?.state;
  const [staffData, setStaffData] = useState({
    "name":id?.id?.name || '',
    "password": id?.id?.name || '',
    "email": id?.id.email || '',
    "mobileNumber":id?.id.mobileNumber ||  '',
    "role": "Faculty",
    "gender": id?.id.gender ||  '',
    "address": id?.id.address ||  '',
    "dob": id?.id.dob ||  '',
    "courseId": id?.id?.courseId?._id ||  '',
    "division": id?.id.division ||  [],
    "semester": id?.id.semester ||  [],
    "HODId":"680f3cdc68235891c7097d08",
    "subjects":id?.id.subjects ||  []

  })
  const [courseData, setCourseData] = useState([])
  const [subjectData, setSubjectData] = useState([])
  const dispatch = useDispatch("")
  const state = useSelector((state) => state);
  const token = state.auth.user.data.token;

  useEffect(() => {
    if (token) {
      dispatch(fetchCourse({ token })).unwrap();
      dispatch(feSubject({ token })).unwrap();
      
    }
    if (state.course.isDone && state.course.data?.data) {
      setCourseData([...state.course.data.data]);
    }
    
    if (state.subject.isDone && state.subject.data?.data) {
      setSubjectData([...state.subject.data.data]);
    }
  }, [dispatch])

  const handelStaff = async (e) => {
    try {;
      if (e.target.value === "Update Course") {
        try {
          await dispatch(PatchAPI({...staffData, token, URL: `/api/user/updateSF/${id.id._id}` })).unwrap();
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
            await dispatch(PostAPI({ ...staffData, token, URL: "/api/user/addSF" })).unwrap();
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
      
    } catch (err) {
      alert(err || "Add Staff failed");
    }
  }

  return (
    <div>
      <section>
        <div class="w-full flex flex-nowrap">

          <div class="w-full">
            <div class=" bg-white drop-shadow-md">
              <div class="p-5 flex justify-between">
                <h4 class="text-blue-600 font-bold lg:text-xl">College Management System</h4>
              </div>
            </div>
            <div>
              <div class="w-11/12 m-2 mx-auto mt-7 bg-white drop-shadow-md pb-5">
                <div class="bg-black p-2">
                  <h1 class="text-white font-semibold tracking-widest uppercase" id="addSubject">Add Staff</h1>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div class="flex flex-col m-4">
                    <label for="" class="block text-gray-700 font-medium mb-2">Name :</label>
                    <input type="text" class="border border-black px-4 mb-4" id="name" name="name" value={staffData.name} onChange={(e) => setStaffData({ ...staffData, name: e.target.value })} />
                    <label for="" class="block text-gray-700 font-medium mb-2">Email :</label>
                    <input type="email" class="border border-black px-4 mb-4" id="email" name="email" value={staffData.email} onChange={(e) => setStaffData({ ...staffData, email: e.target.value })} />
                    <label for="" class="block text-gray-700 font-medium mb-2">Password :</label>
                    <input type="password" class="border border-black px-4 mb-4" id="password" name="password" value={staffData.password} onChange={(e) => setStaffData({ ...staffData, password: e.target.value })} />
                    
                    <label for="" class=" text-gray-700 font-medium mb-2">Phone No :</label>
                    <input type="number" maxlength="10" minlength="10" class="border border-black px-4 mb-4" id="phone" name="phoneNo" value={staffData.mobileNumber} onChange={(e) => setStaffData({ ...staffData, mobileNumber: Number(e.target.value) })} />
                    <div className='mb-5'>
                      <label for="" class="text-gray-700 font-medium mb-2 mr-4">Gender :</label>
                      <input type="radio" name="gender" class="gender" value="Male" checked={staffData.gender === "Male"} onChange={(e) => setStaffData({ ...staffData, gender: e.target.value })} /><label for="" class="m-2">Male</label>
                      <input type="radio" name="gender" class="gender" value="Female" checked={staffData.gender === "Female"} onChange={(e) => setStaffData({ ...staffData, gender: e.target.value })} /><label for="" class="m-2">Female</label>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Address:</label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          placeholder="Street"
                          className="border border-black p-2 w-1/3"
                          value={staffData.address.split(',')[0]?.trim() || ''}
                          onChange={(e) => {
                            const parts = staffData.address.split(',');
                            parts[0] = e.target.value;
                            setStaffData({ ...staffData, address: parts.join(',') });
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Area"
                          className="border border-black p-2 w-1/3"
                          value={staffData.address.split(',')[1]?.trim() || ''}
                          onChange={(e) => {
                            const parts = staffData.address.split(',');
                            parts[1] = e.target.value;
                            setStaffData({ ...staffData, address: parts.join(',') });
                          }}
                        />
                        <input
                          type="text"
                          placeholder="City"
                          className="border border-black p-2 w-1/3"
                          value={staffData.address.split(',')[2]?.trim() || ''}
                          onChange={(e) => {
                            const parts = staffData.address.split(',');
                            parts[2] = e.target.value;
                            setStaffData({ ...staffData, address: parts.join(',') });
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Zip Code"
                          className="border border-black p-2 w-1/3"
                          value={staffData.address.split(',')[3]?.trim() || ''}
                          onChange={(e) => {
                            const parts = staffData.address.split(',');
                            parts[3] = e.target.value;
                            setStaffData({ ...staffData, address: parts.join(',') });
                          }}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Date of Birth:</label>
                      <input
                        type="date"
                        className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={staffData.dob}
                        onChange={(e) => setStaffData({ ...staffData, dob: e.target.value })}
                      />
                    </div>
                    <label for="" class="mb-2">Course Name :</label>
                    <select
                      id="DropDown"
                      value={staffData.courseId}
                      onChange={(e) => setStaffData({ ...staffData, courseId: e.target.value })}
                      className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a course</option>
                      {courseData && courseData.map((ele) => (
                        <option key={ele._id} value={ele._id}>
                          {ele.courseName}
                        </option>
                      ))}
                    </select>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2 mt-5">Divisions:</label>
                      <select
                        multiple
                        className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={staffData.division?.map(s => typeof s === "object" ? s._id : s) || []}
                        onChange={(e) => {
                          const selectedDivisions = Array.from(e.target.selectedOptions, option => option.value);
                          setStaffData({ ...staffData, division: selectedDivisions });
                        }}
                      >
                        <option value="division 1" >Division 1</option>
                        <option value="division 2">Division 2</option>
                        <option value="division 3">Division 3</option>
                        <option value="division 4">Division 4</option>
                      </select>
                    </div>


                    <label for="" class="mb-2 mt-5">Subject Name :</label>
                    <select name="" onChange={(e) => {
                      const selectedDivisions = Array.from(e.target.selectedOptions, option => option.value);
                      setStaffData({ ...staffData, subjects: selectedDivisions });
                    }}   value={staffData.subjects?.map(s => typeof s === "object" ? s._id : s) || []} multiple class="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" id="DropDwon">
                      {
                        subjectData && subjectData.map((ele) => {
                          return <option value={ele._id}>{ele.name}</option>
                        })
                      }
                    </select>
                    <label for="" class="mb-2 mt-5">HOD  :</label>
                    <select name="" class="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" id="DropDwon">
                      <option value="">Me</option>
                      <option value="">Me2</option>
                      <option value="">Me3</option>
                      <option value="">Me4</option>
                    </select>
                    <label for="" class="mb-2 mt-5">Semester  :</label>
                    <select name="" multiple onChange={(e) => {
                      const selectedDivisions = Array.from(e.target.selectedOptions, option => option.value);
                      setStaffData({ ...staffData, semester: selectedDivisions });
                    }}  value={staffData.semester?.map(s => typeof s === "object" ? s._id : s) || []} class="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" id="DropDwon">
                      <option value="sem1">Sem 1</option>
                      <option value="sem2">Sem 2</option>
                      <option value="sem3">Sem 3</option>
                      <option value="sem4">Sem 4</option>
                      <option value="sem5">Sem 5</option>
                      <option value="sem6">Sem 6</option>
                    </select>
                    <input type="submit" onClick={handelStaff} value={!id ? 'Add Course' : "Update Course"} class="bg-blue-600 p-3 rounded-sm block mx-auto text-white hover:border hover:border-black hover:bg-transparent  hover:text-black hover:drop-shadow-2xl transition-all cursor-pointer mt-6" id="addCoursebtn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddStaff