import { useEffect, useState } from 'react'
import GoBack from './goBack';
import { useParams, useLocation } from 'react-router-dom';
import Loading from './loading';
import useFetchPapers from '../utils/fetchPapers';

export default function Paper() {
    // const { department, sem, paper } = useParams()
    // console.log(department, sem)
    // console.log(paper)

    // const [papers, loading] = useFetchPapers(department, sem)
    // console.log('HELLO WORLD')
    // console.log(papers.flat(), loading)


    const location = useLocation()
    const { state } = location
    // console.log(state?.p)

    return (
        <div className='whole-class'>
            <GoBack />

            {/* <p className='text-4xl my-10 text-center'>PAPER</p> */}


            {state?.p === undefined && <div className='my-10'>
                <h1 className="text-3xl text-center">Sorry There Is No Data yet.</h1>
            </div>}


            {state?.p.length === 0 && <div className='text-center'>
                <h1 className='text-3xl my-10 capitalize'>Sorry there is no data yet.</h1>
            </div>}

            {state?.p && <embed
                src={state.p}
                type="application/pdf"
                className='w-full h-screen my-10'
            />}

        </div>
    )
}
