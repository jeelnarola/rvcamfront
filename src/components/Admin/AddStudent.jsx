import React from 'react'

function AddStudent() {
  return (
    <div>
      <section>
        <div className="w-full flex flex-nowrap">
          <div className="w-full">
            <div class=" bg-white drop-shadow-md">
              <div class="p-5 flex justify-between">
                <h4 class="text-blue-600 font-bold lg:text-xl">College Management System</h4>
              </div>
            </div>
            <div className="w-11/12 m-2 mx-auto mt-7 bg-white drop-shadow-md pb-5">
              <div class="bg-black p-2">
                <h1 class="text-white font-semibold tracking-widest uppercase" id="addSubject">Add Student</h1>
                </div>
                <form action="">
                <div className='flex flex-col m-4'>
                  <label for="" class="block text-gray-700 font-medium mb-2">Name :</label>
                  <input type="text" class="border border-black px-4 mb-4" id="name" name="name" />
                    <label for="" class="block text-gray-700 font-medium mb-2">Email :</label>
                    <input type="email" class="border border-black px-4 mb-4" id="email" name="email" />
                    <label for="" class="block text-gray-700 font-medium mb-2">Password :</label>
                    <input type="password" class="border border-black px-4 mb-4" id="password" name="password"  />
                    
                    <label for="" class=" text-gray-700 font-medium mb-2">Phone No :</label>
                    <input type="number" maxlength="10" minlength="10" class="border border-black px-4 mb-4" id="phone" name="phoneNo" />
                    <div className='mb-5'>
                      <label for="" class="text-gray-700 font-medium mb-2 mr-4">Gender :</label>
                      <input type="radio" name="gender" class="gender" value="Male"  /><label for="" class="m-2">Male</label>
                      <input type="radio" name="gender" class="gender" value="Female"  /><label for="" class="m-2">Female</label>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Address:</label>
                      <div className="md:flex md:gap-3">
                        <input
                          type="text"
                          placeholder="Street"
                          className="border border-black p-2 w-full mb-2 md:mb-0 md:w-1/3 block"
                          
                        />
                        <input
                          type="text"
                          placeholder="Area"
                          className="border border-black p-2 w-full mb-2 md:mb-0 md:w-1/3 block"
                          
                        />
                        <input
                          type="text"
                          placeholder="City"
                          className="border border-black p-2 w-full mb-2 md:mb-0 md:w-1/3 block"
                          
                        />
                        <input
                          type="text"
                          placeholder="Zip Code"
                          className="border border-black p-2 w-full mb-2 md:mb-0 md:w-1/3 block"
                          
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Date of Birth:</label>
                      <input
                        type="date"
                        className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                       />
                    </div>
                    <label for="" class="mb-2">Course Name :</label>
                    <select
                      id="DropDown"
                    className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a course</option>
                      
                    </select>
                    <label for="" class="mb-2 mt-5">Semester  :</label>
                    <select name=""  class="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" id="DropDwon">

                      <option value="sem1">Sem 1</option>
                      <option value="sem2">Sem 2</option>
                      <option value="sem3">Sem 3</option>
                      <option value="sem4">Sem 4</option>
                      <option value="sem5">Sem 5</option>
                      <option value="sem6">Sem 6</option>
                    </select>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2 mt-5">Divisions:</label>
                      <select
                        
                        className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                       
                      >
                        <option value="division 1" >Division 1</option>
                        <option value="division 2">Division 2</option>
                        <option value="division 3">Division 3</option>
                        <option value="division 4">Division 4</option>
                      </select>
                    </div>


                    <label for="" class="block text-gray-700 font-medium mb-2 mt-5">SID :</label>
                    <input type="tel" class="border border-black px-4 mb-4" id="password" name="password"  />

                    <label for="" class="block text-gray-700 font-medium mb-2">EnrollmentNumber :</label>
                    <input type="tel" class="border border-black px-4 mb-4" id="password" name="password"  />

                    <input type="submit" value="Add Student" class="bg-blue-600 p-3 rounded-sm block mx-auto text-white hover:border hover:border-black hover:bg-transparent  hover:text-black hover:drop-shadow-2xl transition-all cursor-pointer mt-6" id="addCoursebtn" />

                </div>
              </form>
              </div>
            </div>
          </div>
      </section >
    </div >
  )
}

export default AddStudent