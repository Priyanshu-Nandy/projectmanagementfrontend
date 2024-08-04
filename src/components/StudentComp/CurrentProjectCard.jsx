import React from 'react'
export function CurrentProjectCard() {
  return (
    <div className="w-[29vw] rounded-md border bg-white relative p-5">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[15vw] w-full rounded-xl object-cover bg-red-50"
      />
      <div className='flex items-start justify-between'>
      <div>
        <div className="text-xl pt-3">
          Project  
        </div>
        <p>Joined at 12/06/25</p>
      </div>
      <div className='flex gap-5'>
        <p className='bg-blue-600 px-2 rounded-md text-white'>Python</p>
        <p className='bg-blue-600 px-2 rounded-md text-white'>ML</p>
        <p className='bg-blue-600 px-2 rounded-md text-white'>AI</p>
      </div>
      </div>
    </div>
  )
}
