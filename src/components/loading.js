import React from 'react'
import { ImSpinner9 } from "react-icons/im";
// import { FiLoader } from "react-icons/fi";
// import { FcSynchronize } from "react-icons/fc";


export default function Loading() {
    return (
        <div className='w-screen h-screen flex flex-wrap flex-col items-center mt-20'>
            <ImSpinner9 className='text-5xl animate-spin' />
            <p className='text-2xl mt-4 animate-pulse'>Loading....</p>
        </div>
    )
}
