import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {

  const state = useSelector((state) => state.auth?.user?.data?.user);
  console.log(state);
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto h-auto bg-white rounded-xl shadow-md overflow-hidden py-10">
        <div className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6">
          <img
            src={ "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-bold">{state.name}</h2>
            <p className="text-gray-600">{state.email}</p>
            <p className="text-sm text-blue-600 font-medium mt-1">{state.role}</p>
          </div>
        </div>
        <div className="border-t px-6 py-4 space-y-2 text-sm text-gray-700">
          <InfoRow label="Mobile" value={state.mobileNumber} />
          <InfoRow label="Gender" value={state.gender} />
          <InfoRow label="DOB" value={state.dob} />
          <InfoRow label="Address" value={state.address} />
          <InfoRow label="Course" value={state.course} />
          <InfoRow label="Semester" value={state.semester} />
          <InfoRow label="Subjects" value={state.subjects} />
        </div>
      </div>
    </div>
  );
};
const InfoRow = ({ label, value }) => (
  <div className="flex gap-2 p-2">
    <span className="w-28 font-medium text-xl">{label}</span>
    <span className="font-bold pr-5">:</span>
    <span className="flex-1 break-words text-lg">{value || "-"}</span>
  </div>
);
export default Profile