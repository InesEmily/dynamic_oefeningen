import {Cars} from "../components/Cars";


export function CarsPage(props) {
    const {car} = props;

    if (!car) return;
    return <div>
        <div style={{background: "lavender", height: "850px", display:"flex", justifyContent: "center"}}>
            <Cars car={car} title={"Auto's"}/>
        </div>
    </div>;


}