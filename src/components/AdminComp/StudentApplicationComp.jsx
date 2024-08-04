import React from 'react'
import useFormatData from '../../hooks/useFormatDate'
import { useNavigate } from 'react-router-dom'
const StudentApplication = ({title,description,date,studentId}) => {
  const formattedDate=useFormatData(date)
  const navigate=useNavigate()
  const handleViewClick = (studentId) => {
    navigate(`/admin-dashboard/${studentId}`);
  };
  return (
    <div className=" rounded-xl  bg-white  px-5 py-5 flex items-start gap-4 w-[90%] mb-5">
              <div className='flex w-1/4 gap-11 items-center h-10 bg-white'>
          <p className='text-xl'>{title}</p>            
              </div>
          <div className='flex w-[50%] gap-11 items-center justify-center h-10 text-xl bg-white'>
            {description}
            </div>         
          <div className='flex w-[10%] gap-11 items-center justify-center h-10 text-xl bg-white'>
          {formattedDate}
            </div>         
          <button onClick={()=>handleViewClick(studentId)}className='flex w-[10%] gap-11 items-center justify-center h-10 text-xl cursor-pointer bg-blue-500 text-white rounded-md'>
          View
            </button>         
    </div>
  )
}

export default StudentApplication