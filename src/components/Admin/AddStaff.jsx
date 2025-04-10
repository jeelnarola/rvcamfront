/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'

function AddStaff() {
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
            <div id="showHideCourse" >
              <div class="w-11/12 m-2 mx-auto mt-7 bg-white drop-shadow-md pb-5">
              <div class="bg-black p-2">
                  <h1 class="text-white font-semibold tracking-widest uppercase" id="addSubject">Add Staff</h1>
                </div>
                <form action="">
                  <div class="flex flex-col m-4">
                    <label for="" class="mb-2">Name :</label>
                    <input type="text" class="border border-black px-4 mb-4" id="name" name="name" />
                    <label for="" class="mb-2">Email :</label>
                    <input type="email" class="border border-black px-4 mb-4" id="email" name="email" />
                    <label for="" class="mb-2">Phone No :</label>
                    <input type="tel" maxlength="10" minlength="10" class="border border-black px-4 mb-4" id="phone" name="phoneNo" />
                    <div className='mb-5'>
                      <label for="" class="mb-2 pr-2">Gender :</label>
                      <input type="radio" name="gender" class="gender" value="Male"/><label for="" class="m-2">Male</label>
                      <input type="radio" name="gender" class="gender" value="Female"/><label for="" class="m-2">Female</label>
                    </div>
                    <label for="" class="mb-2">Course Name :</label>
                    <select name="" class="border border-black" id="DropDwon">
                        <option value=""></option>
                        <option value="">BCA</option>
                        <option value="">BBA</option>
                        <option value="">B.com</option>
                        </select>
                    {/* <input type="text" class="border border-black px-4 mb-4" id="subjectName" name="Sname"/> */}
                          <label for="" class="mb-2 mt-5">Subject Name :</label>
                          {/* <input type="text" class="border border-black px-4 mb-4" id="subjectName" name="Sname"/>  */}
                          <select name="" class="border border-black" id="DropDwon">
                        <option value=""></option>
                        <option value="">BCA</option>
                        <option value="">BBA</option>
                        <option value="">B.com</option>
                        </select>
                          <input type="submit" value="Add Course" class="bg-blue-600 p-3 rounded-sm block mx-auto text-white hover:border hover:border-black hover:bg-transparent  hover:text-black hover:drop-shadow-2xl transition-all cursor-pointer mt-6" id="addCoursebtn"/>
                    {/* </div> */}
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