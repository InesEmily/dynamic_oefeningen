export function Menuproduct(props) {
    const {product} = props;
    if (!product?.name) return;
    return <div>{product.name || 'unknown'} €{product.price}</div>
}