export function Menuproduct(props) {
    const {productName,productPrice} = props;

    return <div>{productName} €{productPrice}</div>
}