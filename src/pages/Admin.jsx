import React, { useEffect, useState } from 'react'
import StudentApplication from '../components/AdminComp/StudentApplicationComp'
import axios from 'axios';
import AdminProjects from '../components/AdminComp/AdminProjects';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const [date,setDate]=useState([])
    const [applications, setApplications] = useState([])
    const [projects,setProjects]=useState([])
    const [facultyList,setFacultyLists]=useState([])
  const navigate = useNavigate();

// For fetching signin access token
  async function accesstokenFetch() {
        const response = await axios.post(
          import.meta.env.VITE_BACKEND_URL +
            "facultyRoutes/signin",
           {
                "employee_id":"100000", 
                "password":"Deepan@1234"
              
            }
        );
      localStorage.setItem("access_token",response.data.accessToken)
      }

      // For fetching applications
      useEffect(() => {
        const fetchApplications = async () => {
          try {
            const response = await axios.get('http://localhost:3000/projectRoutes/getallapplications', {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
              }
            });
            setApplications(response.data); // Store the fetched data in the state variable
            console.log(response.data)
          } catch (err) {
            console.log(err)
          } 
        };
    
        fetchApplications();
      }, []);
  
      // To get projects 
      useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await axios.get('http://localhost:3000/projectRoutes/getProjects', {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
              }
            });
            setProjects(response.data); // Store the fetched data in the state variable
          } catch (err) {
            console.log(err)
          } 
        };
    
        fetchProjects();
      }, []);

    useEffect(() => {
      accesstokenFetch()
      setInterval(()=>{
      
        accesstokenFetch();
      },5400000)
    });
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
      setProjects(projects.filter(project => project._id !== projectId));
      console.log("Working")
    };
  return (
    <div className='w-full h-full relative flex flex-col items-center justify-center'>
        <div className=' w-full'>
        <h1 className='px-10 mb-10 text-17xl font-normal'>MANAGEMENT</h1>
        <h3 className='px-10 text-10xl font-semibold'>Student Applications</h3>
        </div>
        {applications.map((application, index) => (
        <StudentApplication 
          key={index}
          title={application.student_name}
          description={application.project_name}
          date= {application.appliedAt}
          studentId={application.studentId}
        />
        
      ))}
        <h3 className='pl-44 text-10xl font-semibold  w-full'>Your Projects</h3>
        {projects.map((project, index) => (
        <AdminProjects 
          key={index}
          title={project.project_name}
          description={project.description}
          tags={project.requirements}
          facultyId={project.faculty_list}
          facultyList={facultyList}
          projectId={project._id}
          onDelete={handleDelete}
        />
        
      ))}
      <button className='h-[5vh] w-[5vw] hover:cursor-pointer' onClick={()=>navigate("/project-form")}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
      </button>
      
    </div>
  )
}

export default Admin