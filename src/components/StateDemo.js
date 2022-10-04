import {useState} from "react";
import {Section} from "./Section";
import {Button} from "react-bootstrap";
import {MyButton} from "./MyButton";

export function StateDemo(){
    const [demoValue,setDemoValue] =useState(0);
    return <Section title='state'>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <MyButton onClick={()=>setDemoValue(77)}>Set77</MyButton>
        <MyButton onClick={()=>setDemoValue(0)}>Set0</MyButton>
        <MyButton onClick={()=>setDemoValue(184)}>Set184</MyButton>
    </Section>;

}