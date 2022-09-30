import {Section} from "./Section";
import {Card, Col} from "react-bootstrap";

export function Person(props) {
    const {person} = props;
    if (!person) return;
    return (
        <Col xs={4} sm={3} md={2} xxl={2}
             className={"text-center"}>
            <Card className="m-2 p-2 shadow-sm">
                <h4>{person.name}</h4>
                <div>{person.age}</div>
                <div>{person.city}</div>
            </Card>
        </Col>);

}

export function Persons(props) {
    const {persons} = props;
    if (!persons) return;
    return (<>
            {persons.map(p => <Person key={p.id} person={p}/>)}
        </>


    );

}