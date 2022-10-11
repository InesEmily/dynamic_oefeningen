import {Cars} from "../components/Cars";
import {Section} from "../components/Section";


export function CarsPage(props) {
    const {cars} = props;

    if (!cars) return;
    return <>
        <Section className="mx-3" title={"Auto's"} button='Cars!!!' initial={true} >
            <Cars cars={cars} />
        </Section>;
    </>


}