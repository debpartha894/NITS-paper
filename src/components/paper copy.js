import { useEffect, useState } from 'react'
import GoBack from './goBack';
import { useParams, useLocation } from 'react-router-dom';
import Loading from './loading';

export default function Paper() {
    const { department, sem, papers, paper } = useParams()

    // const [loading, setLoading] = useState(true)
    const location = useLocation()
    const { state } = location
    console.log(state?.p)
    // console.log(typeof state?.p)

    // const [data, setData] = useState({
    //     link: location.state.p,
    //     loading: true
    // })

    // const { link, loading } = data
    // console.log(link )

    // const { state: { p } } = location
    // console.log(p)

    // useEffect(() => {
    //     const fetchData = () => {
    //         const { state: { p } } = location
    //         console.log(p)
    //         setData({ link: p, loading: false })
    //         // console.log(p.length)
    //     }
    //     // console.log('data is fetched ')
    //     // fetchData()
    // }, [])

    // console.log(data)

    return (
        <div className='whole-class'>
            <GoBack />

            {/* <h1 className="text-4xl text-center my-10 text-red-500">
                {paper.toUpperCase()}
            </h1> */}

            {/* {loading && <Loading />} */}

            {state?.p === undefined && <div className='my-10'>
                <h1 className="text-3xl text-center">Your data is loading...</h1>
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
