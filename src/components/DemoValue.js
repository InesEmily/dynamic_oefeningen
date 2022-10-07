import {MyButton} from "./MyButton";

export function DemoValue(props){
 const {demoValue,setDemoValue} = props;
    return <>
    <div>de waarde van demoValue is {demoValue}</div>
    <div>de waarde van demoValue is {demoValue}</div>
    <div>
        <MyButton onClick={()=>setDemoValue(77)}>Set77</MyButton>
        <MyButton onClick={()=>setDemoValue(0)}>Set0</MyButton>
        <MyButton onClick={()=>setDemoValue(184)}>Set184</MyButton>
    </div>
    </>

}