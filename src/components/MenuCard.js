
import {Menuproduct} from "../Menuproduct";

export function MenuCard(props){
    const {product} = props;
    if (!product) return;
    return <div>{product.map(p => <Menuproduct key ={p.name} product={p}/>)}</div>

}