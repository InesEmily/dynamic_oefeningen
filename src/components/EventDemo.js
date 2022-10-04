import {Button} from "react-bootstrap";

export function EventDemo() {
    return (
        <>
            <div>
                <button onClick={() => alert('bootstrap button is clicked')}>Click me please!</button>
            </div>
            <div>
            <Button style={{marginTop: '5px'}} variant={"primary"} onClick={() => alert('bootstrap button is clicked')}>Click me please!</Button>
            </div>
            <button onClick={(e)=>alert(`hallo ${e.clientX},${e.clientY}`)}>klik</button>
        </>)

}