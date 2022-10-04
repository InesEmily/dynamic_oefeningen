import {MyButton} from "./MyButton";
import {useState} from "react";
import {Section} from "./Section";

export function Counter(props){
    const {name} =props;
    const [demoValue,setDemoValue] =useState(0);

    return <Section>
        <div>de waarde van {name} is {demoValue}</div>
        <MyButton onClick={()=>setDemoValue(0)}>Clear</MyButton>
        <MyButton onClick={()=>setDemoValue(demoValue-1)}>-</MyButton>
        <MyButton onClick={()=>setDemoValue(demoValue+1)}>+</MyButton>
    </Section>

}