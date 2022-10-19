import {collection,query,where} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuCard} from "../components/MenuCard";

export function MenuFromDbPage(){
    const collectionRef = collection(firestoreDB,'Menu').withConverter(menuConverter);
    const queryRef = query(collectionRef, where("price", ">", 1),
        where("name", "==", "mojito"));

    const [values,loading,error] = useCollectionData(queryRef);
    console.log(error);
    console.log({values,loading,error});
    return(
        <>
        <MenuCard products={values}/>
        </>
    )
}



const menuConverter ={
// toFirestore: undefined,
    fromFirestore: function (snapshot, options){
        const data =snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};