import React, { useEffect, useState } from 'react'
import NewProjectsExtended from './NewProjectsExtended';
import axios from 'axios';
const NewProjects = ({title,description,tags,facultyId,facultyList,studentList,studentId, projectId}) => {
  const facultyMap = facultyList.reduce((acc, faculty) => {
    acc[faculty._id] = faculty.name;
    return acc;
  }, {});
  // Get the names of the faculties based on the IDs
  const selectedFacultyNames = facultyId.map(id => facultyMap[id] || 'Unknown'); 
  const [popUp, setPopUp] = useState(false)
  const filteredNames = studentList
  .filter(student => studentId.includes(student._id))
  .map(student => student.name);
// console.log(filteredNames)
  return (
    <div>
      <div>
            {popUp && 
            <div className='w-full h-[100vh]'>
              <NewProjectsExtended setPopUp={setPopUp} show={popUp} FacultyNames={selectedFacultyNames} requirements={tags} title={title} description={description} team={filteredNames}
              projectId={projectId}
              />
            </div>
            }         
            </div>
    <div className=" rounded-xl border cross bg-white relative px-5 py-5 flex items-start gap-2 mb-5 hover:cursor-pointer" onClick={()=>setPopUp(true)}> 
    
                
                        <span className='bg-white cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  </span>
      <div className='bg-white'>
      <h2 className='text-19xl bg-white'>{title}</h2>
      <div className='bg-blue-200 w-[30vw] h-[15vh] flex items-center justify-center rounded-xl'>
      <h2 className='text-7xl bg-blue-200 text-center'>{description}</h2>
      </div>
      <div>

      </div>
      </div>
      <div className='bg-white'>
      <h2 className='text-19xl bg-white'>Tags</h2>
      <div className='flex gap-5 bg-blue-200 w-[20vw] h-[15vh] px-5 rounded-xl'>
     <p className='bg-blue-600 px-5 py-3 rounded-md text-white h-4'>{tags}</p>
      </div>
      </div>
      <div className='bg-white'>
        <h2 className='text-19xl bg-white'>Faculties</h2>
        <div className='flex flex-col flex-wrap gap-3 bg-blue-200 min-w-[20vw] h-[12vh] px-5 py-4 rounded-xl'>
      {selectedFacultyNames.length > 0 ? (
            selectedFacultyNames.map((name, index) => (
              <p className='bg-blue-600 px-4 py-3 rounded-md text-white h-4 w-[8vw]' key={index}>
                {name}
              </p>
            ))
          ) : (
            <p>No faculties selected</p>
          )}
     
      </div>
        </div>
      </div>
    </div>
  )
}

export default NewProjects