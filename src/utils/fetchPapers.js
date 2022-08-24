import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from 'react-router-dom';

export default function useFetchPapers() {
    const db = getFirestore()

    const { department, sem } = useParams()
    // console.log(department, sem)

    const [data, setData] = useState({
        papers: [],
        loading: true
    })

    const { papers, loading } = data
    // const [papers, setPapers] = useState([])
    // const [loading, setLoading] = useState(true )

    const collectionRef = collection(db, "departments", department, "semesters", sem, "years")

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collectionRef);
            const data = []
            const res = querySnapshot.docs.map(doc => ({ ...doc.data(), year: doc.id }))
            data.push(res)
            setData({ papers: data, loading: false })

            // data.push(querySnapshot.forEach((doc) => doc.data()))
            // querySnapshot.forEach((doc) => {
            //     // setPapers(prev => prev.concat(doc.data()))
            //     console.log(doc.id, " => ", doc.data());
            //     setData({
            //         data: doc.data(),
            //         loading: false
            //     })
            // });
            // setLoading(false)
            // setData({})
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [papers, loading]
}
