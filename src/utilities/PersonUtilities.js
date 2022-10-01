import {City} from "../components/Cities";

export function PersonUtilities(props){
    const {cities} = props
    const {cityonce} = props
    let arr2 =[]
    for (let i = 0; i < cityonce.length; i++) {
        let count = 0
        for (let j = 0; j < cities.length; j++) {
            if(cityonce[i] === cities[j]){
                count++
            }
        }
        arr2.push({name: cityonce[i], numberOfPersons: count})
    }
    return<>
        {arr2.map(c => <City city={c}/>)}
    </>
}