import React from "react";

const Popup = ({ onClose, title, data }) => {
  console.log(data);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 capitalize">
          {data.name} {title}
        </h2>
        <div className="space-y-2">
          <InfoRow label="Email" value={data.email} />
          <InfoRow label="Mobile Num." value={data.mobileNumber} />
          <InfoRow label="Gender" value={data.gender} />
          <InfoRow label="DOB" value={data.dob} />
          <InfoRow label="Address" value={data.address} />
          <InfoRow label="Role" value={data.role} />
            <InfoRow label="Course" value={data.course} />
          <InfoRow label="Subjects" value={data.subjects.map((ele)=>{
            return(
              `${ele.name} , `
          )})} />
          <InfoRow label="Semester" value={data.semester.map((ele)=>{
            return(
              `${ele},`
          )
            
          })} />
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex gap-2">
    <span className="w-28 font-medium">{label}</span>
    <span className="font-bold pr-5">:</span>
    <span className="flex-1 break-words">{value || "-"}</span>
  </div>
);

export default Popup;
