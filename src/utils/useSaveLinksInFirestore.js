import React, { useEffect } from 'react'
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default function useSaveLinksInFirestore(url) {
    console.log(url.length )
    const db = getFirestore()

    useEffect(() => {
        const writeData = async () => {
            console.log('callOnlyOnce ')
            // await setDoc(doc(db, "departments", "LA"), {
            //     name: "Los Angeles",
            //     state: "CA",
            //     country: "USA"
            // });
        }
        writeData()
    }, [])
}
