import {useState} from "react";
import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function StateDemo(){
    const [demoValue,setDemoValue] =useState(0);
    return <Section title='state'>
        <div>de waarde van demoValue is {demoValue}</div>
        <Button variant='primary' size='sm' className='ms- mt-1' onClick={()=>setDemoValue(77)}>SET77</Button>
    </Section>;

}