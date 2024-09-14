import { collection, getDocs, query } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { useSelector } from "react-redux";



// export const loadNotes = async( uid = '') => {
//     if ( !uid ) throw new Error('El UID del usuario no existe');

//     const collectionRef = collection( FirebaseDB, `${ uid }/calendario/notes` );
//     const docs = await getDocs(collectionRef);

//     const notes = [];
//     docs.forEach( doc => {
//         notes.push({ id: doc.id, ...doc.data() });
//     });
//     return notes;

// }


// import { collection, query, getDocs } from "@firebase/firestore";
// import { FirebaseDB } from "../firebase/firebase-config";
 
export const loadNotes = async (uid) => {

    
 
    const docs = await getDocs(query(collection(FirebaseDB, `${ uid }/calendario/notes`)));
    const notes = [];
 
    docs.forEach( doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        })
      });
 
    return notes;
};

