export function Cars(props) {
    const {car} = props;
    const {title} = props;
    if (!car) return;
    return <>
        <h3 style={{textAlign: "center", fontWeight: "bold"}}>
            {title}
        </h3>

        <div style={{display:"flex", height:"100px", width:"90%" , flexWrap:"wrap", alignItems:"center" ,marginBottom:"150px"}}>
            {car.map(c => <div key={c.id} style={{border:"solid 1px",  backgroundColor:"#ffffff", width:" 25%", margin:"10px", textAlign:"center"}}>
                <h5>{c.name}</h5>
                <div>{c.brand? `merk : ${c.brand}`: ""}</div>
                <div>{c.type? `type : ${c.type}`:""}</div>
                <div>{c.color? `color : ${c.color}`:""}</div>

            </div>)}
        </div>

    </>

}