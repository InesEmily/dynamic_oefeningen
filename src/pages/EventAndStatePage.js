
import {EventDemo} from "../components/EventDemo";

export function EventAndStatePage(props) {
    const {title} = props;
    return(
        <div style={{background:'lavender'}} className="mx-3">
            <h1>{title}</h1>
        <EventDemo/>
        </div>
    );

}