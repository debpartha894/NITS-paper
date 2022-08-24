import { Link } from 'react-router-dom'
import GoBack from './goBack';

export default function NotFound() {
    return (
        <div className='whole-class text-center'>
            <div className="text-left">
                <GoBack />
            </div>
            <h1 className='text-5xl mt-10 text-center'> <span className='font-bold text-red-500'>404</span> Error</h1>
            <h1 className='text-3xl mb-10 font-extralight'>Page Not Found</h1>

            <Link to="/" className='px-4 py-2 bg-blue-500  hover:bg-blue-400 text-xl text-white rounded-3xl'>Go Home</Link>
        </div>
    )
}
