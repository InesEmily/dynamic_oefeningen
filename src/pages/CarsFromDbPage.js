import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Cars} from "../components/Cars";

export function CarsFromDbPage(){
    const query = collection(firestoreDB,'Cars');
    const [values,loading,error] = useCollectionData(query);
    console.log({values,loading,error});
    return( <>
            <Cars cars={values} title="cars from DB"/>
    </>


    )

}