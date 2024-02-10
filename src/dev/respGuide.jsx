import React from 'react'

const RespGuide = () => {
  return (
    <div className="fixed z-[1001] bottom-2 right-2 bg-violet-600 text-white rounded rounded-tl-xl py-2 px-4">
        <span className="sm:hidden">Mobile</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block">2xl</span>
    </div>
  )
}

export default RespGuide;