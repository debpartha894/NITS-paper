import { useState, useEffect } from 'react';
import { collection, getFirestore, getDocs } from "firebase/firestore";

export default function GetSubs(dep, sem) {
    const [subs, setSubs] = useState()
    const [loading, setLoading] = useState(true)
    const db = getFirestore()

    useEffect(() => {
        const getSubs = async () => {
            const querySnapshot = await getDocs(collection(db, "departments", dep, "semesters", sem, "subjects"));
            const data = querySnapshot.docs.map(doc => doc.data())
            setSubs(data)
            setLoading(false)
        }
        getSubs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [subs, loading]
}
