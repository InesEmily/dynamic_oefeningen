import {Menuproduct} from "../Menuproduct";

export function MenuCardPage(props){
    const {product} = props;
    if (!product) return;
    return <div>{product.map(p => <Menuproduct key ={p.name} product={p}/>)}</div>

}