import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-around gap-5 bg-red-500 h-14'>
        <div>
            <h1 className='text-3xl text-white'>ReactMeals</h1>
        </div>
        <div className='flex gap-3 bg-slate-700 p-3 rounded-xl'>
            <div className='text-white'>cart</div>
            <div className='text-white'>Your Cart</div>
            <div>0</div>
        </div>
    </div>
  )
}

export default Header