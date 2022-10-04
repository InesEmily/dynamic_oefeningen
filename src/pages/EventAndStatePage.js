
import {EventDemo} from "../components/EventDemo";
import {StateDemo} from "../components/StateDemo";

export function EventAndStatePage(props) {
    const {title} = props;
    return(
        <div style={{background:'lavender'}} className="mx-3">
            <h1>{title}</h1>
        <EventDemo/>
            <StateDemo/>
        </div>
    );

}