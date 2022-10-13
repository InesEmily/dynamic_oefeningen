import {firestoreDB} from "../services/firebase";
import {collection} from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import {useState} from "react";

export function PersonsFromDbPage(){
    const [search, setSearch] = useState("");
    const query = collection(firestoreDB,'Persons');
    const [values,loading,error] = useCollectionData(query);
    console.log({values,loading,error});
    // const collectionRef = collection(firestoreDB,"persons").withConverter(personConverter);

    return(
        <>
            <label htmlFor="search">test input :</label>
            <input id="search" value={search} onChange={e => setSearch(e.target.value)}/>
            <div>{search}</div>
            <div>Persons froms db</div>
            <Persons title="Personen van DB" persons={search?values.filter(p => p.name.includes(search)):values} isInitiallyOpen={true}/>

        </>

    )

}