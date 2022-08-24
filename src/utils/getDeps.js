import { useState, useEffect, useMemo } from 'react';
import { collection, getFirestore, getDocs } from "firebase/firestore";

export default function GetDeps() {
    const [deps, setDeps] = useState(null)
    const [loading, setLoading] = useState(true)
    const db = getFirestore()

    useEffect(() => {
        const getDeps = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "departments"));
                console.log(querySnapshot)
                const data = querySnapshot.docs.map(doc => doc.data())
                setDeps(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getDeps()
        // useMemo(() => getDeps(), [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [deps, loading]
}
