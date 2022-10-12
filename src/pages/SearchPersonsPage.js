import {useState} from "react";
import {Persons} from "../components/Persons";

export function SearchPersonsPage(props){
    const {persons} = props;
    const [testInput, setTestInput] = useState("");

    return (
        <div className="mx-3">
            <div className="mx-3">
                <label htmlFor="search">test input :</label>
                <input id="search" value={testInput} onChange={e => setTestInput(e.target.value)}/>
                <div>je hebt dit ingetikt {testInput}</div>
            </div>
                <div>
                    <Persons persons={persons.filter(p => p.name.toLowerCase().includes(testInput.toLowerCase())
                        || p.city.toLowerCase().includes(testInput.toLowerCase()))} title="Search" isInitiallyOpen={true}/>
                </div>

        </div>

    )

}