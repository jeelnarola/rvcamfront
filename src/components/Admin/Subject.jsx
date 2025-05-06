import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import API from '../../API';
import { number } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Subject() {
  const navigate =useNavigate()
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    courseId: '',
    codeNumber:Number,
    facultyId:'',
    credits:Number,
    semester:""
  });
  const state = useSelector((state) => state.auth?.user);
  const getCourse = async () => {
    try {
      const res = await axios.get(`${API.fixAPI}/api/course/show`, {
        headers: {
          'Authorization': `Bearer ${state.data.token}`,
          'Content-Type': 'application/json'
        }
      });
      setData(prev => [...res.data.data]);

      // https://rvcam-production.up.railway.app/api/course/show
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
    getCourse()
  }, [])

  const handleSubject = async()=>{
    try {
      const res = await axios.post(`${API.fixAPI}/api/subject/add`,formData, {
          headers: {
              'authorization': `Bearer ${state.data.token}`,
              'Content-Type': 'application/json'
          }
      },{ withCredentials: true });

      alert('Add successful');

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
  return (
    <div>
      <section>
        <div class="w-full flex flex-nowrap ">
          {/* <div id="AdminHeader" class="w-1/5 h-screen overflow-auto bg-gray-50 dark:bg-gray-800"></div> */}
          <div class="w-full">
          <div class=" bg-white drop-shadow-md">
                            <div class="p-5 flex justify-between">
                                <h4 class="text-blue-600 font-bold lg:text-xl">College Management System</h4>
                                <div className="flex text-black">
                                    <h4 class="font-semibold cursor-pointer lg:text-xl" > Add </h4>
                                    <h4 class="font-semibold cursor-pointer lg:text-xl px-2"> ||  </h4>
                                    <h4 class="font-semibold cursor-pointer lg:text-xl" onClick={() => navigate("/admin/SubjectManage")}>Manage </h4>
                                </div>
                            </div>
                        </div>
            <div id="showAddSubject">
              <div class="w-11/12 m-2 mx-auto mt-7 bg-white drop-shadow-md pb-5">
                <div class="bg-black p-2">
                  <h1 class="text-white font-semibold tracking-widest uppercase" id="addSubject">Add Subject</h1>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div class="flex flex-col m-4">
                    <label for="" class="mb-2">Subject Name :</label>
                    <input type="text" class="border border-black px-4 mb-4 p-1" id="subjectName" name="name" value={formData.name}  onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                    <label for="" class="mb-2">Course Name :</label>
                    <select name="courseId" class="border border-black p-1 mb-4" id="DropDwon" value={formData.courseId}   onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}>
                    <option value=""></option>

                      {
                        data && data.map((ele)=>{
                          return <option value={ele._id}>{ele.courseName}</option>
                          
                        })
                      }
                    </select>
                    <label for="" class="mb-2">Subject code :</label>
                    <input type="number" class="border border-black px-4 mb-4 p-1" name="codeNumber" value={formData.codeNumber}  onChange={(e) => setFormData({ ...formData, codeNumber: e.target.value })}/>
                    <label for="" class="mb-2">Subject credits :</label>
                    <input type="text" class="border border-black px-4 mb-4 p-1"   name="credits" value={formData.credits}  onChange={(e) => setFormData({ ...formData, credits: e.target.value })}/>
                    <label for="" class="mb-2">facultyId Name :</label>
                    <input disabled type="text" class="border border-black px-4 mb-4 p-1" id="subjectName" name="facultyId" value={formData.facultyId}  onChange={(e) => setFormData({ ...formData, facultyId: e.target.value })}/>
                    <label for="" class="mb-2">semester :</label>
                    <input type="text" class="border border-black px-4 mb-4 p-1" id="subjectName" name="semester" value={formData.semester}  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}/>
                    
                    <input type="submit" onClick={()=>handleSubject()} value="Add Subject" class="bg-blue-600 p-3 rounded-sm block mx-auto text-white hover:border hover:border-black hover:bg-transparent  hover:text-black hover:drop-shadow-2xl transition-all cursor-pointer mt-6" id="addCoursebtn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Subject