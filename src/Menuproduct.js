

function ProductSize(props) {
    const {product} = props;
    if (!product?.size) return;
    return <span style={{color: "Blue"}} > ({product.size} cl) </span>;
}
function Productnote(props) {
    const {product} = props;
    if (!product?.note) return;
    return <div style={{color: "Blue", fontSize :"smaller"}} > {product.note}</div>;
}



export function Menuproduct(props) {
    const {product} = props ;
    if (!product?.name) return;
    return <div style={{margin: "2vw",fontSize: "larger",display: "flex"}} >
        <div style={{flex: 1}}>{product.name}
            <ProductSize product = {product}/>
        <Productnote product = {product}/>  </div>
        <div>€{product.price}</div>
    </div>
}