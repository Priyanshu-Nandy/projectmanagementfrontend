import React from 'react'
export function CurrentProjectCard({title,launchDate,requirement}) {
  return (
    
    <div className="w-[29vw] rounded-md border bg-white relative p-5 min-h-[20vh]">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[15vw] w-[29vw] rounded-xl object-cover bg-red-50"
      />
      <div className='flex items-start justify-between'>
      <div>
        <div className="text-xl pt-3">
          {title}  
        </div>
        <p>Joined at {launchDate}</p>
      </div>
      <div className='flex gap-5 items-center justify-center mr-5'>
        <p className='bg-blue-600 px-2 py-1 rounded-md text-white'>{requirement}</p>
      </div>
      </div>
    </div>
  )
}
