import React from 'react'
import Sidebar from './Sidebar'
import Login from '../Auth/Login'
import { useSelector } from 'react-redux';

export default function Dashboard() {
 
   return (
      <div>
         <section>
            <div class="w-full flex flex-nowrap ">
               <div class="w-full">
                  <div class=" bg-white drop-shadow-md">
                     <div class="p-5 flex justify-between">
                        <h4 class="text-blue-600 font-bold lg:text-xl">College Management System</h4>
                     </div>
                  </div>
                  <div>
                     <div class="container">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
                           <div>
                              <div class="bg-red-500 text-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                                 <div class="flex items-center space-x-4 justify-between">
                                    <h2 class="text-4xl font-bold">1</h2>
                                    <div class="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full">
                                       <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" />
                                       </svg>
                                    </div>
                                 </div>
                                 <p>Total Students</p>
                                 <a href="#" class="text-sm text-white mt-4 inline-flex items-center">
                                    More info
                                    <svg class="ml-1 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="none">
                                       <path d="M12 0L9.58 1.58l7.4 7.4H0v2.04h16.98l-7.4 7.4L12 24l12-12z" />
                                    </svg>
                                 </a>
                              </div>
                           </div>
                           <div>
                              <div class="bg-blue-500 text-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                                 <div class="flex items-center space-x-4 justify-between">
                                    <h2 class="text-4xl font-bold">1</h2>
                                    <div class="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
                                       <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17v-2a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0v-2m8 0a4 4 0 10-8 0v2m-2 2h12" />
                                       </svg>
                                    </div>
                                 </div>
                                 <p>Total Staff</p>
                                 <a href="#" class="text-sm text-white mt-4 inline-flex items-center">
                                    More info
                                    <svg class="ml-1 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="none">
                                       <path d="M12 0L9.58 1.58l7.4 7.4H0v2.04h16.98l-7.4 7.4L12 24l12-12z" />
                                    </svg>
                                 </a>
                              </div>
                           </div>
                           <div>
                              <div class="bg-gray-700 text-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                                 <div class="flex items-center space-x-4 justify-between">
                                    <h2 class="text-4xl font-bold">4</h2>
                                    <div class="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full">
                                       <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h10M7 16h10" />
                                       </svg>
                                    </div>
                                 </div>
                                 <p>Total Courses</p>
                                 <a href="#" class="text-sm text-white mt-4 inline-flex items-center">
                                    More info
                                    <svg class="ml-1 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="none">
                                       <path d="M12 0L9.58 1.58l7.4 7.4H0v2.04h16.98l-7.4 7.4L12 24l12-12z" />
                                    </svg>
                                 </a>
                              </div>
                           </div>
                           <div>
                              <div class="bg-pink-500 text-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                                 <div class="flex items-center space-x-4 justify-between">
                                    <h2 class="text-4xl font-bold">4</h2>
                                    <div class="flex items-center justify-center w-16 h-16 bg-pink-600 rounded-full">
                                       <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m-7 4h8V4H6v16h2z" />
                                       </svg>
                                    </div>
                                 </div>
                                 <p>Total Subjects</p>
                                 <a href="#" class="text-sm text-white mt-4 inline-flex items-center">
                                    More info
                                    <svg class="ml-1 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="none">
                                       <path d="M12 0L9.58 1.58l7.4 7.4H0v2.04h16.98l-7.4 7.4L12 24l12-12z" />
                                    </svg>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    {/* <Login/> */}
      </div>
   )
}
