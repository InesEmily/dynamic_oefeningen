import {firestoreDB} from "../services/firebase";
import {collection,query,orderBy} from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import {useState} from "react";

export function PersonsFromDbPage(){
    const [search, setSearch] = useState("");

    const collectionRef =  collection(firestoreDB,'Persons').withConverter(personConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values,loading,error] = useCollectionData(queryRef);

    console.log({values,loading,error});


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

const personConverter ={
toFirestore: undefined,
    fromFirestore: function (snapshot, options){
    const data =snapshot.data(options);
    return {...data, id: snapshot.id}
    }
};