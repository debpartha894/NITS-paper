// import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import GetPapers from "../utils/getPapers";
import GoBack from "../components/goBack";
import Loading from "../components/loading";
// import useFiresStore from "../utils/useFiresStore";
// import useDownloadFireStorage from "../utils/useDownloadFireStorage";
// import useSaveLinksInFirestore from "../utils/useSaveLinksInFirestore";

export default function Paper() {
    const { department, sem, papers } = useParams()
    console.log(department, sem, papers)
    console.log(papers.replace('-', ''))

    const [allPapers, subject, loading] = GetPapers(department, sem, papers)
    // console.log(papers)

    // const [url] = useDownloadFireStorage(department, sem, papers.replace('-', ''))
    // useSaveLinksInFirestore(url)

    // console.log(url)

    // const [state, setState] = useState({
    //     'end_sem_answer': url[0],
    //     'end_sem_question': url[1],
    //     'mid_sem_answer': url[2],
    //     'mid_sem_question': url[3],
    // })
    // console.log(state)

    if (loading) return <Loading />

    return (
        <div className='whole-class'>
            <GoBack />

            <div className="my-6">
                <h1 className="text-xl lg:text-2xl">Name : {subject.toUpperCase()} </h1>
                <h1 className="text-xl lg:text-2xl">Code : {papers.toUpperCase()} </h1>
            </div>

            {allPapers.length === 0 && <div className='text-center'>
                <h1 className='text-3xl my-10 capitalize'>Sorry there is no data yet.</h1>
            </div>}

            {allPapers && allPapers.map((p, i) => {
                return <div className="border-b-2 border-slate-400 pb-8" key={i}>
                    <p className="text-md lg:text-xl font-semibold my-6">{p.year}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link
                            to={`/department/${department}/${sem}/${papers}/mid-sem-question`}
                            state={{ p: p.mid_sem_question }}
                            className="paper-card p-4"
                        >
                            MID SEM QUESTION
                        </Link>
                        <Link
                            to={`/department/${department}/${sem}/${papers}/mid-sem-answer`}
                            state={{ p: p.mid_sem_answer }}
                            className="paper-card p-4">
                            MID SEM ANSWER
                        </Link>
                        <Link
                            to={`/department/${department}/${sem}/${papers}/end-sem-question`}
                            className="paper-card p-4"
                            state={{ p: p.end_sem_question }}
                        >
                            END SEM QUESTION
                        </Link>
                        <Link
                            to={`/department/${department}/${sem}/${papers}/end-sem-answer`}
                            className="paper-card p-4"
                            state={{ p: p.end_sem_answer }}
                        >
                            END SEM ANSWER
                        </Link>
                    </div>
                </div>
            })}
        </div>
    )
}
