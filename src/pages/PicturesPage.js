/*
Here I use the data-array directly in the component PicturesPage.
What's the difference with PRODUCTS_DATA???
Note: the PICTURES_DATA array is not exported, so it will never be used in
another file.
The fact that this array is not passed as a prop makes it impossible
to reuse this PicturesPage Component for another array of pictures.
In this case I decided that that's just fine...
(it's a thin line...)
*/
import {Menuproduct} from "../Menuproduct";


export function PicturesPage(props) {
    const {picture} = props;
    if (!picture) return;
    return <div style={{display: "block"}}>{picture.map(p => <PictureDisplay key={p.id} picture={p}/>)}</div>;

}

export function PictureDisplay(props) {
    const {picture} = props;
    if (!picture?.id) return;
    return (
        <div>
            <img src={`images/${picture.name}`} alt={"lucht"} width="60%" style={{margin: "2vw auto 0 2vw"}}/>
            <div style={{margin: " 0 0 0 2vw"}}>
                <a href={picture.credit}>{picture.author}</a>
            </div>
        </div>
    )
}


