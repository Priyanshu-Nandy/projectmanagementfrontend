import React from 'react'

const NewProjectComp = () => {
  return (
    <div className=" rounded-xl border bg-white relative px-5 py-5 flex items-start gap-2">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[15vw] w-[26vw] rounded-xl "
      />
      <div>
      <h2 className='text-19xl'>Project</h2>
      <div className='bg-blue-200 w-[30vw] h-[15vh] flex items-center justify-center rounded-xl'>
      <h2 className='text-19xl'>Project Description</h2>
      </div>
      <div>

      </div>
      </div>
      <div>
      <h2 className='text-19xl'>Tags</h2>
      <div className='flex gap-5 bg-blue-200 w-[20vw] h-[15vh] px-5'>
        <p className='bg-blue-600 px-2 rounded-md text-white h-4'>Python</p>
        <p className='bg-blue-600 px-2 rounded-md text-white h-4'>ML</p>
        <p className='bg-blue-600 px-2 rounded-md text-white h-4'>AI</p>
      </div>
      </div>
      <div>
        <h2 className='text-19xl'>Faculties</h2>
        <div className='bg-blue-200 '>
        <div className='flex gap-5 bg-blue-200 w-[15vw] h-[11vh] px-5 py-4'>
        <img
    className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    alt="Dan_Abromov"
  />
      </div>
        </div>
      </div>
    </div>
  )
}

export default NewProjectComp