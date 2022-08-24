import { useEffect, useState } from 'react'
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default function useDownloadFireStorage(dep, sem, sub, yr = 2020) {
    const [url, setUrl] = useState([])
    const storage = getStorage();
    const fileStorageRef = ref(storage, `${dep}/semesters/${sem}/subjects/${sub}/years/${yr}`)

    useEffect(() => {
        listAll(fileStorageRef)
            .then((res) => {
                res.items.forEach((itemRef, i) => {
                    // console.log(i, itemRef)
                    getDownloadURL(itemRef).then((_url) => setUrl(url.concat(_url)))
                });
            })
            .catch((error) => {
                console.log(error.message)
                switch (error.code) {
                    case 'storage/object-not-found':
                        console.log('object-not-found')
                        break;
                    case 'storage/unauthorized':
                        console.log('unauthorized')
                        break;
                    case 'storage/canceled':
                        console.log('canceled')
                        break;
                    case 'storage/unknown':
                        console.log('unknown')
                        break;

                    default: break;
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log("THIS IS WORKING ")
    console.log(url)
    console.log(url.length)

    // const db = getFirestore()

    // const fireStoreRef = doc(db, "departments", "LA")

    // useEffect(() => {
    //     const writeData = async () => {
    //         console.log('callOnlyOnce ')
    //         // await setDoc(doc(db, "departments", "LA"), {
    //         //     name: "Los Angeles",
    //         //     state: "CA",
    //         //     country: "USA"
    //         // });
    //     }
    //     writeData()
    // }, [])

    // const [state, setState] = useState({
    //     'end_sem_answer': url[0],
    //     'end_sem_question': url[1],
    //     'mid_sem_answer': url[2],
    //     'mid_sem_question': url[3],
    // })

    // useEffect(()=>{

    // })
    // console.log(state)

    return [url]
}
