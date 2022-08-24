import { useState, useEffect } from 'react';
import { collection, getFirestore, getDocs } from "firebase/firestore";

export default function GetDeps() {
    const [sems, setSems] = useState()
    const [loading, setLoading] = useState(true)
    const db = getFirestore()

    useEffect(() => {
        const getDeps = async () => {
            const querySnapshot = await getDocs(collection(db, "departments"));
            const data = querySnapshot.docs.map(doc => doc.data())
            setSems(data)
            setLoading(false)
        }
        getDeps()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [sems, loading]
}
