import {Menuproduct} from "../Menuproduct";
import PropTypes from "prop-types";

export function MenuCardPage(props){
    const {product} = props;
    if (!product) return;
    return <div>{product.map(p => <Menuproduct key ={p.name} product={p}/>)}</div>

}
// MenuCardPage.prototypes = {
//     product: PropTypes.string.isRequired
//
// }