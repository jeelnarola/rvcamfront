/* eslint-disable no-undef */
import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
   return (
      <div className='w-auto h-screen overflow-auto bg-gray-50 dark:bg-gray-800'>
         <h1 class="uppercase tracking-widest text-2xl text-white text-center mt-6 font-bold xl:text-2xl hidden md:block group-hover:block">admin </h1>
         <div class="p-2">
            <ul class="space-y-2 font-medium xl:p-2 xl:pr-10">
               <li className='group-hover:w-auto'>
                  <NavLink to="dashboard" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                        {({ isActive }) => (
                        <>
                           <svg
                               className={`flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 dark:group-hover:text-white ${isActive ? 'dark:text-white' : ''
                               }`}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 18"
                           >
                              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.43  6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                           </svg>
                           <span className="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">
                           Dashboard
                           </span>
                        </>
                     )}
                  </NavLink>
               </li>
               <li>
                  <NavLink to="Profile" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     {({ isActive }) => (
                        <>
                           <svg
                              className={`flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 dark:group-hover:text-white ${isActive ? 'dark:text-white' : ''
                                 }`}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 18"
                           >
                              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.43  6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                           </svg>
                           <span className="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">
                              Update Profile
                           </span>
                        </>
                     )}
                  </NavLink>
               </li>
               <li>
                  <NavLink to="course" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     {({ isActive }) => (
                        <>
                            <svg className={`flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 dark:group-hover:text-white ${isActive ? 'dark:text-white' : ''
                                 }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Course</span>
                        </>
                     )}
                    
                  </NavLink>
               </li>
               <li>
                  <NavLink to="Subject" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     {({ isActive }) => (
                        <>
                            <svg className={`flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 dark:group-hover:text-white ${isActive ? 'dark:text-white' : ''
                                 }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Subject</span>
                        </>
                     )}
                     
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/Session" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     {({ isActive }) => (
                        <>
                             <svg className={`flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 dark:group-hover:text-white ${isActive ? 'dark:text-white' : ''
                                 }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Session</span>
                        </>
                     )}
                    
                  </NavLink>
               </li>
               <li>
                  <NavLink to="AddStaff" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     {({ isActive }) => (
                        <>
                     <svg className={`flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 dark:group-hover:text-white ${isActive ? 'dark:text-white' : ''
                                 }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Add Staff</span>
                        </>
                     )}
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/ManageStaff" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     {({ isActive }) => (
                        <>
                           <svg className={`flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 dark:group-hover:text-white ${isActive ? 'dark:text-white' : ''
                                 }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Manage Staff</span>
                        </>
                     )}
                     
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/AddStudent" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     {({ isActive }) => (
                        <>
                     <svg className={`flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 dark:group-hover:text-white ${isActive ? 'dark:text-white' : ''
                                 }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block  group-hover:block">Add Student</span>
                        </>
                     )}
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/ManageStudent" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     <svg class={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Manage Student</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/NotifyStaff" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Notify Staff</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/NotifyStudent" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Notify Student</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/ViewAttendance" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">View Attendance</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/StaffLeave" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Staff Leave</span>
                     <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/StudentLeave" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Student Leave</span>
                     <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/LogOut" className={({ isActive }) => `mt-2 flex p-2 rounded-lg group ${isActive
                     ? 'bg-gray-200 dark:bg-blue-600  dark:text-white'
                     : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`
                  }
                  >
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap hidden md:block group-hover:block">Log Out</span>
                  </NavLink>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Sidebar