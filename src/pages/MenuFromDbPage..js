import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuProduct} from "../components/MenuProduct";
import {MenuCard} from "../components/MenuCard";

export function MenuFromDbPage(){
    const query = collection(firestoreDB,'Menu');
    const [values,loading,error] = useCollectionData(query);
    console.log({values,loading,error});
    return(
        <>
        <MenuCard products={values}/>
        </>

    )

}