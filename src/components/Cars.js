import {COLOR_DATA} from "../data/data";

export function Cars(props) {
    const {car,title} = props;
    if (!car) return;
    return <>
        <h3 style={{textAlign: "center", fontWeight: "bold", display:"block", position:"relative",left:"750px",marginBottom:"300px"}}>
            {title}
        </h3>

        <div style={{display:"flex", height:"100px", width:"90%" , flexWrap:"wrap", justifyContent:"center" ,marginTop:"100px"}}>
            {car.map(c => <div key={c.id} style={{border:"solid 1px",  backgroundColor:"#ffffff", width:" 25%",height:"153px", margin:"10px", textAlign:"center"}}>
                <h5>{c.name}</h5>
                <div>{c.brand? `merk : ${c.brand}`: ""}</div>
                <div>{c.type? `type : ${c.type}`:""}</div>
                <div>{c.note? `opm : ${c.note}`:""}</div>
                {/*<div>{c.color? `color : ${c.color}`:""}</div>*/}
                <div>{c.color ? <div style={c?.color && {backgroundColor: getBackGround(COLOR_DATA,c.color)}}> kleur: {c.color}</div> : ""}</div>
            </div>)}
        </div>
    </>

}



function getBackGround(array , color) {
    return (array.find(el => el.dutch === color).english)
}
