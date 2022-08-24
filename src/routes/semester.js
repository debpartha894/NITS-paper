import React from 'react'
import GetSubs from '../utils/getSubs'
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/loading';
import GoBack from '../components/goBack';

export default function Semesters() {
    const { department, sem } = useParams()

    const [data, loading] = GetSubs(department, sem)
    // console.log(data)

    if (loading) return <Loading />

    return (
        <div className='whole-class'>
            <GoBack />

            <h1 className='department-name capitalize my-6'><span className='uppercase'>{department}</span> {sem} semester subjects</h1>

            {data.length === 0 && <div className='my-24'>
                <h1 className='text-center text-2xl lg:text-4xl'>No Data Has Been Added Till Now.</h1>
            </div>}

            <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 ">
                {data && data.map((d, i) => {
                    return <Link
                        to={`/department/${department}/${sem}/${d.code.toLowerCase()}`}
                        key={i} className="sub-card h-100 place-content-center">
                        <div className="px-4 py-6 flex flex-wrap flex-col justify-between h-full mb-auto ">
                            <p className='text-xl'>{d.subject}</p>
                            <br />
                            <p className='text-lg'>{d.code}</p>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}
