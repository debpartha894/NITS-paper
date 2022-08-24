import { useState, useEffect } from 'react';
import { collection, getFirestore, getDocs, doc, getDoc } from "firebase/firestore";

export default function GetPapers(dep, sem, paper) {
    const [papers, setPapers] = useState()
    const [subject, setSubject] = useState('')
    const [loading, setLoading] = useState(true)
    const db = getFirestore()

    useEffect(() => {
        const getPapers = async () => {
            //! DOC-NAME
            const docRef = doc(db, "departments", dep, "semesters", sem, "subjects", paper.replace('-', ''));
            const docSnap = await getDoc(docRef);
            // console.log('%c HELLO WORL', 'color:yellow')

            if (docSnap.exists()) {
                setSubject(docSnap.data().subject)
                // console.log("Document data:", docSnap.data().subject);
            } else {
                setSubject('')
                console.log("No such document!");
            }

            //! YEAR-COLLECTION
            const querySnapshot = await getDocs(collection(db, "departments", dep, "semesters", sem, "subjects", paper.replace('-', ''), "years"));
            const data = querySnapshot.docs.map(doc => doc.data())
            // const data = querySnapshot.docs.map(doc => [doc.id, doc.data()])
            // console.log(data)
            setPapers(data)
            setLoading(false)
        }
        getPapers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [papers, subject, loading]
}
