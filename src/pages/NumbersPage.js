import {Numbers} from "../components/Numbers";

export function NumbersPage(props) {
    const {number} = props;
    if (!number) return;
    return <div>
        <div style={{background: "lavender", height: "1100px"}}>
            <Numbers number={number} title={'alle getallen'}/>
            <Numbers number={number.filter(n => n > 6)} title={'getallen > 6'}/>
            <Numbers number={number.map(n => n *2)} title={'getallen *2'}/>
        </div>
    </div>;
}