import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import sems from '../data/sems'
import GoBack from '../components/goBack'

export default function Department() {
    const { department }  = useParams()
    const [name, setName] = useState('')

    useEffect(() => {
        switch (department) {
            case 'cse'  : setName('Computer Science & Engineering'); break;
            case 'ece'  : setName('Electronics & Communication Engineering'); break;
            case 'me'   : setName('Mechanical Engineering'); break;
            case 'ce'   : setName('Civil Engineering'); break;
            case 'ee'   : setName('Electrical Engineering'); break;
            case 'eie'  : setName('Electronics & Instrumentation & Engineering'); break;
            default: break;
        }
    }, [department])


    const [chosen, setChosen] = useState();
    const LinkComponent       = ({ sem, setChosen, active }) => {
        return (
            <Link
                // to="#!"
                to        = {`/department/${department}/${sem.sem.charAt(0)}`}
                onClick   = {() => { setChosen(sem) }}
                className = {`department department-card ${active ? 'bg-teal-500' : ''}`}>
                {sem.sem} Sem
            </Link>
        )
    }

    return (
        <div className = 'whole-class'>
            <GoBack />
            <h1 className = "department-name mt-6">{name.toUpperCase()}</h1>

            <div className = "grid-col-3 my-12">
                {sems && sems.map((sem, i) => (
                    <LinkComponent
                        sem       = {sem} key = {i}
                        active    = {sem === chosen}
                        setChosen = {setChosen}
                    />
                ))}
            </div>
        </div>
    )
}
