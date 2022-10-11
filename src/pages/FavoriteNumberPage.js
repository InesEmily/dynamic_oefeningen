import {Section} from "../components/Section";
import {favoriteNumber, Numbers} from "../components/Numbers";
import {useState} from "react";

export function FavoriteNumberPage(props){
    const [favorite, setFavorite] = useState(77);
    const {numbers} = props
    if (!numbers) return;
    return <div>
        <div className="mx-3">
            <Section title={'Alle getallen'}  initial={true}>
                <Numbers numbers={numbers}  onSelectNumber={setFavorite}/>
            </Section>
            <div>Mijn favoriete getal is :{favorite? `${favorite}`:'(nog niet gekozen)'}</div>
        </div>
    </div>

}
