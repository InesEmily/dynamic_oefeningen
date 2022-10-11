import {Section} from "./Section";
import {Card, Col} from "react-bootstrap";

export function Numbers(props) {
    const {numbers, onSelectNumber} = props;
    if (!numbers) return;
    return <>

        {numbers.map((n, i) => <Number key={i} number={n} onSelect={()=>onSelectNumber(n)}/>)}

    </>
}

export function Number(props) {
    const {number,onSelect} = props;
    if (!number) return;
    return <Col xs={4} sm={3} md={2} xxl={1}
                className={"text-center"}>
        <Card className="m-2 p-2 shadow-sm" onClick={()=>{onSelect()}}>{number}</Card>
    </Col>
}




