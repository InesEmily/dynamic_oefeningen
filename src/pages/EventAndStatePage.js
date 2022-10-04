
import {EventDemo} from "../components/EventDemo";
import {StateDemo} from "../components/StateDemo";
import {Counter} from "../components/Counter";

export function EventAndStatePage(props) {
    const {title} = props;
    return(
        <div style={{background:'lavender'}} className="mx-3">
            <h1>{title}</h1>
        <EventDemo/>
            <StateDemo/>
            <Counter name="counter1"/>
            <Counter name="counter2"/>
        </div>
    );

}