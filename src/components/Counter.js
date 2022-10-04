import {MyButton} from "./MyButton";
import {useState} from "react";
import {Section} from "./Section";

export function Counter(props){
    const {name} =props;
    const [demoValue,setDemoValue] =useState(0);

    return <div style={{border:"solid",borderWidth:'1px',borderColor:'black',marginBottom:"15px"}}>
        <div>de waarde van {name} is {demoValue}</div>
        <div>
        <MyButton onClick={()=>setDemoValue(0)}>Clear</MyButton>
        <MyButton onClick={()=>setDemoValue(demoValue-1)}>-</MyButton>
        <MyButton onClick={()=>setDemoValue(demoValue+1)}>+</MyButton>
        </div>
    </div>

}