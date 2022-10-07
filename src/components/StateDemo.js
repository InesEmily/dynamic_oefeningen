import {Section} from "./Section";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";
import {DemoValue} from "./DemoValue";

export function StateDemo(){

    return <Section title='state'>
        <DemoValue/>
        <Counter name="counter1"/>
        <Counter name="counter2"/>
        <OnOffDemo/>
    </Section>;

}