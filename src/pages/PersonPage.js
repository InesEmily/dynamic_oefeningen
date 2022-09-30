import {Persons} from "../components/Persons";
import {Section} from "../components/Section";
import {Numbers} from "../components/Numbers";

export function PersonPage(props) {
    const {persons} = props;
    if (!persons) return;
    return (<>
            <Section title={'Alle personen'}>
                <Persons persons={persons}/>
            </Section>
            <Section title={'Alle personen volgens leeftijd'}>
                <Persons persons={[...persons].sort((p, a) => a.age - p.age)}/>
            </Section>
            <Section title={'Alle personen volgens leeftijd'}>
            </Section>

        </>


    )
}