import {useState} from "react";
import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function StateDemo(){
    const [demoValue,setDemoValue] =useState(0);
    return <Section title='state'>
        <div>de waarde van demoValue is {demoValue}</div>
        <span><Button variant='primary' size='sm' className='ms- mt-1' onClick={()=>setDemoValue(77)}>SET77</Button></span>
        <span> <Button variant='primary' size='sm' className='ms- mt-1' onClick={()=>setDemoValue(0)}>SET0</Button></span>
        <span><Button variant='primary' size='sm' className='ms- mt-1' onClick={()=>setDemoValue(184)}>SET184</Button></span>
    </Section>;

}