import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Cars} from "../components/Cars";

export function CarsFromDbPage(){
    const collectionRef = collection(firestoreDB,'Cars').withConverter(carsConverter);
    const [values,loading,error] = useCollectionData(collectionRef);
    console.log({values,loading,error});
    return( <>
            <Cars cars={values} title="cars from DB"/>
    </>
    )
}
const carsConverter ={
// toFirestore: undefined,
    fromFirestore: function (snapshot, options){
        const data =snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};