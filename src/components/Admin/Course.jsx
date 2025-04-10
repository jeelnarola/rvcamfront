import React from 'react'

function Course() {
    return (
        <>
            <section>
                <div class="w-full flex flex-nowrap">
                    {/* <div id="AdminHeader" class="w-1/5 h-screen overflow-auto bg-gray-50 dark:bg-gray-800"></div> */}
                    <div class="w-full">
                    <div class=" bg-white drop-shadow-md">
                     <div class="p-5 flex justify-between">
                        <h4 class="text-blue-600 font-bold lg:text-xl">College Management System</h4>
                        <div className="flex text-black">
                        <h4 class="font-semibold cursor-pointer lg:text-xl"> Add </h4>
                        <h4 class="font-semibold cursor-pointer lg:text-xl px-2"> ||  </h4>
                        <h4 class="font-semibold cursor-pointer lg:text-xl">Manage </h4>
                        </div>
                     </div>
                  </div>
                        <div id="showHideCourse" >
                            <div class="w-11/12 m-2 mx-auto mt-7 bg-white drop-shadow-md pb-5">
                                <div class="bg-black p-2">
                                    <h1 class="text-white font-semibold tracking-widest uppercase" id="AddCourseTitle">Add Course</h1>
                                </div>
                                <form action="">
                                <div class="flex flex-col m-4">
                                        <label for="" class="mb-2">Course Name :</label>
                                        <input type="text" class="border border-black px-4 mb-4" id="courseName" name="Course"/>
                                            <input type="submit" value="Add Course" class="bg-blue-600 p-3 rounded-sm block mx-auto text-white hover:border hover:border-black hover:bg-transparent  hover:text-black hover:drop-shadow-2xl transition-all cursor-pointer" id="addCoursebtn"/>
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