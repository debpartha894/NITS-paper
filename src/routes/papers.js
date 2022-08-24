// import { useState } from "react";
import { useParams, Link } from "react-router-dom";
// import GetPapers from "../utils/getPapers";
import GoBack from "../components/goBack";
import Loading from "../components/loading";
import useFetchPapers from "../utils/fetchPapers";
import { BiHappyAlt } from "react-icons/bi";

// import useFiresStore from "../utils/useFiresStore";
// import useDownloadFireStorage from "../utils/useDownloadFireStorage";
// import useSaveLinksInFirestore from "../utils/useSaveLinksInFirestore";

export default function Paper() {
    const { department, sem } = useParams()
    const [papers, loading] = useFetchPapers(department, sem)
    console.log(papers.flat(), loading)

    if (loading) return <Loading />

    return (
        <div className='whole-class'>
            <GoBack />
            {papers.flat().length === 0 && <div className="my-10 text-4xl text-center">
                <h1 className="">We are updating this page soon.</h1>
                <BiHappyAlt className="mx-auto my-3 text-5xl hover:text-blue-500" />  
            </div>}
            {papers && papers.flat().map((p, i) => {

                return <div className="border-b-2 border-slate-400 pb-8" key={i}>
                    <p className="text-md lg:text-xl font-semibold my-6">{p.year}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link
                            to={`/department/${department}/${sem}/mid-sem-question`}
                            state={{ p: p['mid-sem-question'] }}
                            className="paper-card p-4"
                        >
                            MID SEM QUESTION
                        </Link>
                        <Link
                            to={`/department/${department}/${sem}/mid-sem-answer`}
                            // state={{ p: p.mid_sem_answer }}
                            className="paper-card p-4">
                            MID SEM ANSWER
                        </Link>
                        <Link
                            to={`/department/${department}/${sem}/end-sem-question`}
                            className="paper-card p-4"
                        // state={{ p: p.end_sem_question }}
                        >
                            END SEM QUESTION
                        </Link>
                        <Link
                            to={`/department/${department}/${sem}/end-sem-answer`}
                            className="paper-card p-4"
                        // state={{ p: p.end_sem_answer }}
                        >
                            END SEM ANSWER
                        </Link>
                    </div>
                </div>
            })}

        </div>
    )
}
