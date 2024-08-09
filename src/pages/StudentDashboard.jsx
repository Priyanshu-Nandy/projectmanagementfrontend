// expiresIn
import React, { useEffect,useState } from 'react'
import { CurrentProjectCard } from '../components/StudentComp/CurrentProjectCard'
import axios from "axios"
import NewProjects from '../components/StudentComp/NewProjects'
const StudentDashboard = () => {
  const [newprojects,setNewProjects]=useState([])
  const [allProject,setAllProjects]=useState([])
  const [facultyList,setFacultyLists]=useState([])
  const [studentList,setStudentList]=useState([])
  const [filteredProjects,setFilteredProjects]=useState([])
  async function accesstokenFetch() {
    const response = await axios.post(
      import.meta.env.VITE_BACKEND_URL +
        "facultyRoutes/signin",
       {
            "employee_id":"100000", 
            "password":"Deepan@1234"
          
        }
    );
    // console.log(response.data.accessToken)
  localStorage.setItem("access_token",response.data.accessToken)
  }
  async function studentaccesstokenFetch() {
    const response = await axios.post(
      import.meta.env.VITE_BACKEND_URL +
        "studentsRoutes/signin",
        {
          "password":"Priyanshu@1234",
          "enrollment_no":"12021002019060"
        }
    );
    // console.log(response.data.accessToken)
  localStorage.setItem("student_token",response.data.accessToken)
  }
useEffect(() => {
  accesstokenFetch()
  studentaccesstokenFetch()
}); 
useEffect(() => {
  const fetchAllProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3000/projectRoutes/getAllProjects', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("student_token")}`
        }
      });
      setAllProjects(response.data)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    } 
  };

  fetchAllProjects();
}, [setAllProjects]);
useEffect(() => {
  const fetchFaculty = async () => {
    try {
      const response = await axios.get('http://localhost:3000/facultyRoutes/getAllFaculty', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      setFacultyLists(response.data); // Store the fetched data in the state variable
      // console.log(response.data)
    } catch (err) {
      console.log(err)
    } 
  };
  const fetchCurrentStudent = async () => {
    try {
      const response = await axios.get('http://localhost:3000/studentsRoutes/getCurrentProject', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("student_token")}`
        }
      });
       // Store the fetched data in the state variable
      //  setProjects
      // console.log(response.data)
      setNewProjects(response.data)
    } catch (err) {
      console.log(err)
    } 
  };
  const fetchAllStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/studentsRoutes/getAllStudents', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("student_token")}`
        }
      });
       // Store the fetched data in the state variable
       setStudentList(response.data)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    } 
  };
  fetchCurrentStudent()
  fetchFaculty();
  fetchAllStudents()
}, []);
  return (
    <div className='bg-whitesmoke w-[100vw] min-h-[100vh] relative'>
      <div className='px-10 py-10'>
        <h2>Current Project</h2>
        <div className='flex gap-5 flex-wrap'>
        {newprojects.map((newproject,index)=>(
          <CurrentProjectCard
          key={index}
          title={newproject.project_name}
          launchDate={newproject.launchDate}
          requirement={newproject.requirements}
          />
        ))}
        </div>
      </div>
      <div className='px-5 py-10'>
      <h2>New Projects</h2>
      {
        allProject.map((project, index) => (
          <NewProjects
            key={index}
            title={project.project_name}
            description={project.description}
            tags={project.requirements}
            facultyId={project.faculty_list}
            facultyList={facultyList}
            projectId={project._id}
            studentList={studentList}
            studentId={project.studentTeam}
          />
          
        ))

      }
      </div>
    </div>

  )
}

export default StudentDashboard