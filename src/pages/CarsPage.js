import {Cars} from "../components/Cars";


export function CarsPage(props) {
    const {car} = props;

    if (!car) return;
    return <div>
        <div style={{background: "lavender", height: "850px"}}>
            <Cars car={car} title={"auto's"}/>
        </div>
    </div>;


}