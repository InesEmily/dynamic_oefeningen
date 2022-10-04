import {Numbers} from "../components/Numbers";
import {Section} from "../components/Section";

export function NumbersPage(props) {
    const {numbers} = props;
    if (!numbers) return;
    return <div>
        <div className="mx-3">
            <Section title={'Alle getallen'} button='Getallen jeej'>
            <Numbers numbers={numbers} />
            </Section>
            <Section button='Getallen > 6' title='Getallen >6'>
            <Numbers numbers={numbers.filter(n => n > 6)} title={'getallen > 6'}/>
            </Section>
            <Section button='getallen * 2' title={'Getallen *2'}>
            <Numbers numbers={numbers.map(n => n * 2)} title={'getallen *2'}/>
            </Section>
        </div>
    </div>;
}

