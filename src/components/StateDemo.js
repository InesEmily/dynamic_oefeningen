import {useState} from "react";
import {Section} from "./Section";
import {Button} from "react-bootstrap";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";

export function StateDemo(){
    const [demoValue,setDemoValue] =useState(0);
    return <Section title='state'>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>
        <MyButton onClick={()=>setDemoValue(77)}>Set77</MyButton>
        <MyButton onClick={()=>setDemoValue(0)}>Set0</MyButton>
        <MyButton onClick={()=>setDemoValue(184)}>Set184</MyButton>
        </div>
        <Counter name="counter1"/>
        <Counter name="counter2"/>
        <OnOffDemo/>
    </Section>;

}