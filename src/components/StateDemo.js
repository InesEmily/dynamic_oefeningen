import {Section} from "./Section";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";
import {DemoValue} from "./DemoValue";
import {useState} from "react";
import {DemoValueReadonly} from "./DemoValueReadonly";

export function StateDemo(){
    const [demoValue,setDemoValue] =useState(0);
    return <Section title='state' initial={true}>
        <DemoValue demoValue={demoValue} setDemoValue={setDemoValue}/>
        <Counter name="counter1"/>
        <Counter name="counter2"/>
        <OnOffDemo/>
        <DemoValueReadonly demoValue={demoValue}/>
    </Section>;

}