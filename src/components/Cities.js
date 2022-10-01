import {Card, Col} from "react-bootstrap";
import {Person} from "./Persons";

export function Cities(props) {
    const {cities, title} = props;
    if (!cities) return;
    return(
        <>
            {cities.map(c => <City key={c.name} city={c}/>)}
        </>
    );
}

export function City(props) {
    const {city} = props;
    if (!city) return;
    return (
        <Col xs={4} sm={3} md={2} xxl={2}
             className={"text-center"}>
            <Card className="m-2 p-2 shadow-sm">
                <h4>{city.name}</h4>
                <div>{city.numberOfPersons}</div>
            </Card>
        </Col>);

}