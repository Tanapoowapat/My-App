import React from 'react'

const Main_Content = () => {
  return (
    <div className="container h-screen text-white mt-2 mb-3">
      <div class="bg-gray-800 p-4 rounded-md flex-col justify-items-center">
        <div className="bg-gray-600 p-2 rounded-lg flex items-center justify-center md:mx-80">
          <span>Hi I'm Tanapoowapat from Thailand.</span>
        </div>

        <div class="mx-3 grid grid-cols-2 gap-4 mt-4">
          <div className=" justify-self-end p-2">
            <p className="text-xl font-bold">Tanapoowapat Yomsarn</p>
            <p className="mt-2">Rookie Web Application developer</p>
          </div>
          <div className="p-2">My image</div>
        </div>
      </div>
    </div>
  )
}

export default Main_Content
