export function Numbers(props) {
    const {number} = props;
    const {title} = props;
    if (!number) return;
    return <>
        <h3 style={{textAlign: "center", fontWeight: "bold"}}>
            {title}
        </h3>
        <div style={{float:"left", margin:"5%"}}></div>
        <div style={{display:"flex", height:"100px", width:"90%" , flexWrap:"wrap", alignItems:"center" ,marginBottom:"150px"}}>
            {number.map(n => <div style={{border:"solid 1px",  backgroundColor:"#ffffff", width:" 25%", margin:"10px", textAlign:"center"}}>{n}</div>)}
        </div>
        <div style={{float:"right", margin:"5%"}}></div>
    </>
}

