
import { ImCross } from "react-icons/im";
import React, { useState, useEffect } from 'react';

import axios from 'axios';
const Profile = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  const [skills,setSkills]=useState([])
  useEffect(() => {
    const fetchStudentProflie = async () => {
      try {
        const response = await axios.get('http://localhost:3000/studentsRoutes/studentProfile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("student_token")}`
          }
        });
         // Store the fetched data in the state variable
        console.log(response.data)
        setStudentDetails(response.data)
      } catch (err) {
        console.log(err)
      } 
    };

    fetchStudentProflie();
  }, []);
    
  

  
  if (!studentDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-[100vw] min-h-[100vh]">
      <div className="px-3 py-0">
      <div className="h-[30vh] w-[100%] flex items-center bg-white gap-10 mt-20">
      <img className="w-[15vw] h-full rounded-[60%] object-cover" src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div className="flex flex-col bg-white">
      <h1 className="text-29xl  font-[550]  bg-white block ">{studentDetails.name}</h1>
      <div className="bg-white">
      <span className="text-5xl bg-white">Enrollment Number-</span>
      <span className="text-5xl bg-white">{studentDetails.enrollment_no}</span>
      </div>
      <div className="flex gap-10 mt-5 bg-white">
        <div className="bg-white">
      <span className="text-5xl bg-white">Stream-</span>
      <span className="text-5xl bg-white">{studentDetails.stream}</span>
        </div>
        <div className="bg-white">
        <span className="text-5xl bg-white">Year-</span>
      <span className="text-5xl bg-white">{studentDetails.year}</span>
        </div>
        <div className="bg-white">
        <span className="text-5xl bg-white">Sec-</span>
      <span className="text-5xl bg-white">{studentDetails.Sec}</span>
        </div>
        <div className="bg-white">
        <span className="text-5xl bg-white">Roll-</span>
      <span className="text-5xl bg-white">{studentDetails.roll_number}</span>
        </div>
      </div>
      </div>
      </div>
      <div className="min-h-[35vh] mt-5 flex items-center justify-center flex-col">
          <h3 className="text-21xl font-semibold">Student Introduction</h3>
          <span className="text-3xl">{studentDetails.Introduction}</span>
      </div>
      <div className="bg-white">
        <h3 className="bg-white text-10xl font-semibold">Skills</h3>
      <div className="min-h-16  flex items-center gap-5 justify-start rounded-md px-6 flex-wrap">
      {(skills && skills.length > 0)? (
    skills.map((skill, index) => (
      <p className='bg-blue-600 px-4 py-3 rounded-md text-white' key={index}>
        {skill}
      </p>
    ))
  ) : (
    <p className='bg-blue-600 px-4 py-3 rounded-md text-white' >No skills available</p>
  )}
        
      </div>

      </div>
      <h3 className="bg-white text-10xl font-semibold">Resume:
      {
        studentDetails.resume && <a href={studentDetails.resume}>Resume Link</a> 
      }
      No resume
      </h3>
      <div className="flex justify-end px-5">
      <button className="bg-blue-600 px-10 py-3 rounded-md text-white cursor-pointer">Edit</button>
      </div>
      </div>
      </div>    
  )
}

export default Profile;
