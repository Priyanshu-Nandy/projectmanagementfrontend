// expiresIn
import React, { useEffect,useState } from 'react'
import { CurrentProjectCard } from '../components/StudentComp/CurrentProjectCard'
import axios from "axios"
import AdminProjects from '../components/AdminComp/AdminProjects'
import NewProjects from '../components/StudentComp/NewProjects'
const StudentDashboard = () => {
  const [title, setTitle] = useState("")
  const [project,setProjects]=useState([])
  const [newProject,setNewProjects]=useState([])
  const [facultyList,setFacultyLists]=useState([])
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
useEffect(() => {

  accesstokenFetch()
  
  setInterval(()=>{
  
    accesstokenFetch();
  },5400000)
});

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

  studentaccesstokenFetch()
  
  setInterval(()=>{
  
    studentaccesstokenFetch();
  },5400000)
});
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3000/projectRoutes/getProjects', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      const allProjects=response.data
      const filteredProjects = allProjects.filter(project => project.studentTeam.length > 0);
      setProjects(filteredProjects);
      // console.log(allProjects )
      // console.log(filteredProjects)
    } catch (err) {
      console.log(err)
    } 
  };

  fetchProjects();
}, []); 
useEffect(() => {
  const fetchAllProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3000/projectRoutes/getAllProjects', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("student_token")}`
        }
      });
      const allProjects=response.data
      setNewProjects(allProjects);
      console.log(allProjects)
    } catch (err) {
      console.log(err)
    } 
  };

  fetchAllProjects();
}, []);
useEffect(() => {
  const fetchFaculty = async () => {
    try {
      const response = await axios.get('http://localhost:3000/facultyRoutes/getAllFaculty', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      setFacultyLists(response.data); // Store the fetched data in the state variable
      console.log(response.data)
    } catch (err) {
      console.log(err)
    } 
  };

  fetchFaculty();
}, []);
const handleDelete = (projectId) => {
  setProjects(newProject.filter(project => project._id !== projectId));
  console.log("Working")
};
  return (
    <div className='bg-whitesmoke min-w-[100vw] min-h-[100vh] relative'>
      <div className='px-10 py-10'>
        <h2>Current Project</h2>
        <CurrentProjectCard/>
      </div>
      <div className='px-5 py-10'>
      <h2>New Projects</h2>
      {newProject.map((project, index) => (
        <NewProjects
          key={index}
          title={project.project_name}
          description={project.description}
          tags={project.requirements}
          facultyId={project.faculty_list}
          facultyList={facultyList}
          projectId={project._id}
        />
        
      ))}
      </div>
    </div>

  )
}

export default StudentDashboard