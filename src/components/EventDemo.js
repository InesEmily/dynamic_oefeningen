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
            <div>
            <button onClick={(e)=>alert(`hallo ${e.clientX},${e.clientY}`)}>klik</button>
            </div>
            <div style={{backgroundColor:'pink', padding:'15px', marginTop: '5px', marginBottom:'10px'}} onClick={()=>alert('dit is een div')}><p>Dit is een div met een eventhandler</p><a href={'#'} onClick={(e)=>{e.preventDefault();e.stopPropagation();{alert('button is clicked')}}}> dit een link met een href</a> - en - <Button variant={"primary"} onClick={()=>alert('click')}>dit is een button</Button>

            </div>
        </>)

}