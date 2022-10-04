import {useState} from "react";
import {MyButton} from "./MyButton";

export function OnOffDemo(props){

    const [demoValue,setDemoValue] =useState(false);

    return <>
        <div>de huidige waarde van  is :{demoValue? 'ON':'OFF'}</div>
        <MyButton onClick={()=>setDemoValue(true)}>on</MyButton>
        <MyButton onClick={()=>setDemoValue(false)}>off</MyButton>
    </>;

}