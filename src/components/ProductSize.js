function ProductSize(props) {
    const {product} = props;
    if (!product?.size) return;
    return `{product}Cl`;
}