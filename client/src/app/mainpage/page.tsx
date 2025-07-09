import React from 'react'
import Form from './Form'

const HomePage = () => {
  return (
     <>
            <div className="bg-[url('/bg.jpg')]  h-screen bg-cover bg-center bg-no-repeat text-white ">
                <div className=" bg-black/40 h-screen flex flex-col md:gap-6 gap-0 justify-center items-center " >

                    <h1 className='xl:text-7xl md:text-5xl text-4xl text-center font-semibold leading-14'>
                        Emotion Reflection</h1>

                    <div className="flex flex-col xl:gap-10 md:gap-6 gap-4 max-w-3xl px-5">

                        <p className='font-medium xl:text-xl lg:text-lg md:text-md text-sm text-center text-neutral-100'>Find out the weightage of emotions over your confidence.</p>

                        {/* Form Component  */}
                        <Form/>
                    </div>

                </div>
            </div>
        </>

  )
}

export default HomePage
