export function DemoValueReadonly(props) {
    const {demoValue} = props;
    return <div style={{border: "solid", borderWidth: '1px', borderColor: 'black', marginBottom: "15px"}}>
        {`DemoValue = ${demoValue}`}
    </div>

}