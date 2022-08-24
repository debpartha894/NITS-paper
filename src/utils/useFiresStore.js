import { getStorage, ref } from "firebase/storage";


export default function useFiresStore() {
    const storage = getStorage();

    const pathReference = ref(storage, 'IPv6.pdf');
    const storageRef = ref(storage);

    return [pathReference]
}
