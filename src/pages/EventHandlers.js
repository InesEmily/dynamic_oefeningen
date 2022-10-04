import {Section} from "../components/Section";
import {Button} from "react-bootstrap";

export function EventHandlers(props) {
    const {title} = props;
    return(
        <Section>
            <h1>{title}</h1>
            <button onClick={() => alert('bootstrap button is clicked')}>Click me please!</button>
            <Button style={{marginTop: '5px'}} variant={"primary"} onClick={() => alert('bootstrap button is clicked')}>Click me please!</Button>
        </Section>
    );

}